<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

const localeOptions = computed(() => [
  { label: t('languages.english'), value: 'en', icon: 'GB' },
  { label: t('languages.spanish'), value: 'es', icon: 'ES' },
  { label: t('languages.catalan'), value: 'ca', icon: 'CA' }
]);

const selectedLanguage = computed({
  get: () => localeOptions.value.find(option => option.value === locale.value),
  set: () => localeOptions.value.find(option => option.value === locale.value)
});

const changeLanguage = (newLocale: string) => {
    console.log(newLocale)
  if (newLocale !== locale.value) {
    locale.value = newLocale;
    localStorage.setItem('language', newLocale);
  }
};
</script>

<template>
  <div class="language-selector">
    <q-select
      v-model="selectedLanguage"
      color="primary"
      :options="localeOptions"
      @update:model-value="(value) => changeLanguage(value.value)"
      outlined
      dense
      rounded
    />
  </div>
</template>

<style scoped lang="scss">
.language-selector {
  width: 100%;
  min-width: 100px;
}

.language-selector label {
  width: 100%;
  border-radius: 50px;
  border: 1px hsla(0, 0%, 100%, 0.5) solid;
}
</style>

<style>
.q-field--auto-height.q-field--dense .q-field__control, .q-field--auto-height.q-field--dense .q-field__native {
  color: white;
}

.q-field--outlined .q-field__control:before {
  border: none;
}

.q-select__dropdown-icon {
  color: white;
}

@media (max-width: 1024px) {
  .q-field--auto-height.q-field--dense .q-field__control,
  .q-field--auto-height.q-field--dense .q-field__native {
    color: var(--dark-text);
  }

  .q-field--outlined .q-field__control:before {
    border: 1px var(--dark-text) solid;
  }

  .q-select__dropdown-icon {
    color: var(--dark-text);
  }
}
</style>
