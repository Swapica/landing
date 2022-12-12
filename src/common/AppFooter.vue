<template>
  <div class="app-footer">
    <span class="app-footer__created-text">
      {{ $t('app-footer.created-txt') }}
    </span>
    <app-logo v-if="!isMobile" class="app-footer__logo" with-text />
    <app-button
      class="app-footer__github-link"
      :icon-left="$icons.github"
      :href="$config.GITHUB_URL"
    />
  </div>
</template>

<script lang="ts" setup>
import { AppLogo, AppButton } from '@/common'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { WINDOW_BREAKPOINTS } from '@/enums'

const { width: windowWidth } = useWindowSize()

const isMobile = computed(() => windowWidth.value < WINDOW_BREAKPOINTS.tablet)
</script>

<style lang="scss" scoped>
.app-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: toRem(44.5) var(--app-padding-right) toRem(44.5)
    var(--app-padding-left);
  border-top: toRem(1) solid var(--primary-dark);
  background-color: var(--background-primary-main);
  align-items: center;

  @include respond-to(tablet) {
    grid-template-columns: 1fr 1fr;
    padding: toRem(32) var(--app-padding-right) toRem(32)
      var(--app-padding-left);
  }
}

.app-footer__logo {
  width: toRem(120);
  height: toRem(23);
  margin: 0 auto;
}

.app-footer__github-link {
  --button-icon-size: #{toRem(32)};

  margin-left: auto;
}

.app-footer__created-text {
  font-size: toRem(16);
  line-height: 1;
  color: var(--text-primary-dark);

  @include respond-to(tablet) {
    max-width: toRem(105);
    line-height: 1.2;
  }
}
</style>
