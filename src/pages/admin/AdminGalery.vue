<script setup lang="ts">
import { computed, ref } from 'vue';

interface ImageItem {
  id: string;
  src: string;
  description: string;
}

interface FolderItem {
  id: string;
  name: string;
  description: string;
  images: ImageItem[];
}

const folders = ref<FolderItem[]>([
  {
    id: 'folder-test',
    name: 'Test',
    description: 'Carpeta de ejemplo',
    images: [
      {
        id: 'image-test-1',
        src: 'img/Soccer_training_facility_field_28f51f97.png',
        description: 'Test description',
      },
    ],
  },
  {
    id: 'folder-test-2',
    name: 'Test2',
    description: 'Carpeta de ejemplo',
    images: [
      {
        id: 'image-test-2',
        src: 'img/Clean_modern_locker_room_eea1995d.png',
        description: 'Test description',
      },
    ],
  },
]);

const newFolderName = ref('');
const newFolderDescription = ref('');
const selectedFolderId = ref<string | null>(null);
const newImageSrc = ref('');
const newImageDescription = ref('');

const folderOptions = computed(() =>
  folders.value.map((folder) => ({ label: folder.name, value: folder.id }))
);

const canAddFolder = computed(() => newFolderName.value.trim().length > 0);
const canAddImage = computed(
  () =>
    Boolean(selectedFolderId.value) &&
    newImageSrc.value.trim().length > 0 &&
    newImageDescription.value.trim().length > 0
);

const createId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const addFolder = () => {
  if (!canAddFolder.value) {
    return;
  }

  folders.value.push({
    id: createId('folder'),
    name: newFolderName.value.trim(),
    description: newFolderDescription.value.trim(),
    images: [],
  });

  newFolderName.value = '';
  newFolderDescription.value = '';
};

const addImage = () => {
  if (!canAddImage.value || !selectedFolderId.value) {
    return;
  }

  const targetFolder = folders.value.find((folder) => folder.id === selectedFolderId.value);
  if (!targetFolder) {
    return;
  }

  targetFolder.images.push({
    id: createId('image'),
    src: newImageSrc.value.trim(),
    description: newImageDescription.value.trim(),
  });

  newImageSrc.value = '';
  newImageDescription.value = '';
};

const removeImage = (folderId: string, imageId: string) => {
  const targetFolder = folders.value.find((folder) => folder.id === folderId);
  if (!targetFolder) {
    return;
  }

  targetFolder.images = targetFolder.images.filter((image) => image.id !== imageId);
};
</script>

<template>
  <q-page padding class="bg-grey-1">
    <div class="q-mx-auto" style="max-width: 1100px;">
      <div class="q-mb-lg">
        <h1 class="text-h4 text-weight-bold q-mb-xs">Administrar galería</h1>
        <p class="text-body1 text-grey-7">
          Organiza las imágenes por carpeta y administra el contenido antes de publicarlo.
        </p>
      </div>

      <div class="row q-col-gutter-lg q-mb-xl">
        <div class="col-12 col-md-6">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6 text-weight-semibold">Crear carpeta</div>
              <div class="text-caption text-grey-6">La estructura final queda carpeta → imagen.</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-input v-model="newFolderName" label="Nombre de la carpeta" outlined />
              <q-input
                v-model="newFolderDescription"
                label="Descripción"
                outlined
                class="q-mt-md"
              />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                color="primary"
                label="Añadir carpeta"
                :disable="!canAddFolder"
                @click="addFolder"
              />
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-12 col-md-6">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6 text-weight-semibold">Añadir imagen</div>
              <div class="text-caption text-grey-6">Escoge la carpeta y carga la imagen.</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-select
                v-model="selectedFolderId"
                :options="folderOptions"
                label="Carpeta"
                outlined
                emit-value
                map-options
              />
              <q-input
                v-model="newImageSrc"
                label="Ruta de la imagen"
                outlined
                class="q-mt-md"
              />
              <q-input
                v-model="newImageDescription"
                label="Descripción"
                outlined
                class="q-mt-md"
              />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                color="primary"
                label="Añadir imagen"
                :disable="!canAddImage"
                @click="addImage"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div class="q-mb-md">
        <div class="text-h6 text-weight-bold">Carpetas e imágenes</div>
        <div class="text-caption text-grey-6">
          Las imágenes se muestran agrupadas por carpeta para mantener la estructura carpeta → imagen.
        </div>
      </div>

      <q-list bordered separator class="bg-white rounded-borders">
        <q-expansion-item
          v-for="folder in folders"
          :key="folder.id"
          expand-separator
          icon="folder"
          :label="folder.name"
          :caption="folder.description"
        >
          <q-card flat>
            <q-card-section>
              <div v-if="folder.images.length === 0" class="text-grey-6">
                No hay imágenes en esta carpeta.
              </div>
              <div v-else class="row q-col-gutter-md">
                <div v-for="image in folder.images" :key="image.id" class="col-12 col-sm-6 col-md-4">
                  <q-card flat bordered class="q-pa-sm">
                    <img :src="image.src" class="full-width rounded-borders" style="height: 160px; object-fit: cover;" />
                    <div class="q-mt-sm text-subtitle2">{{ image.description }}</div>
                    <div class="text-caption text-grey-6">{{ image.src }}</div>
                    <q-btn
                      color="negative"
                      flat
                      icon="delete"
                      label="Eliminar"
                      class="q-mt-sm"
                      @click="removeImage(folder.id, image.id)"
                    />
                  </q-card>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>
