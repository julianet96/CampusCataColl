<script setup lang="ts">
import { Ref, ref, onMounted } from 'vue';
import { galey, fold } from 'src/entity/galery';


const allGalerys = ref<galey[]>([])
const galerys = ref<galey[]>([])
const folders = ref<fold[]>([])
const tab = ref('all')



onMounted(() => {
    allGalerys.value.push({img:"img/Soccer_training_facility_field_28f51f97.png",description:"Test description",folder:"Test"})
    allGalerys.value.push({img:"img/Clean_modern_locker_room_eea1995d.png",description:"Test description",folder:"Test2"})
    galerys.value.push({img:"img/Soccer_training_facility_field_28f51f97.png",description:"Test description",folder:"Test"})
    galerys.value.push({img:"img/Clean_modern_locker_room_eea1995d.png",description:"Test description",folder:"Test2"})
    folders.value.push({name:"Test",description:"test"})
    folders.value.push({name:"Test2",description:"test"})
})


function folderChange () {
    console.log("tab selected: ",tab.value)

    if(tab.value == "all") {
        galerys.value = allGalerys.value
    } else {
        galerys.value = allGalerys.value.filter(itm => itm.folder == tab.value)
    }
}

</script>

<template>
    <section class="py-16 md:py-24 bg-gradient-to-b">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h1 class="text-3xl md:text-4xl font-black mb-4" > Galería</h1>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Momentos inolvidables de nuestros entrenamientos y competiciones</p>
            </div>
            <div class="flex flex-wrap gap-2 justify-center mb-8">
                 <q-tabs
                    v-model="tab"
                    active-bg-color="secondary"
                    dense
                    @update:model-value="folderChange"
                >
                    <q-tab name="all" label="Todas" class="rounded-xl"></q-tab>
                    <q-tab v-for="folder in folders" :name="folder.name" :label="folder.name" class="rounded-xl"></q-tab>
                </q-tabs>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div v-for="galery in galerys" class="relative group cursor-pointer rounded-lg overflow-hidden aspect-square">
                        <img :src="galery.img" class="w-full h-full object-cover transition-transform group-hover:scale-105">
                        <div class="absolute inset-0 bg-black/0 group-hover transition-colors flex items-end p-4">
                            <p class="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">{{ galery.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>



</template>

<style scoped lang="scss">

</style>