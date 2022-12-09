<template>
  <div class="homepage">
    <section class="homepage__first-block">
      <div class="homepage__first-block-content">
        <h1>{{ $t('homepage.first-block-title') }}</h1>
        <p class="homepage__first-block-desc">
          {{ $t('homepage.first-block-desc') }}
        </p>
        <app-button
          class="homepage__launch-btn"
          :text="$t('homepage.launch-btn')"
          scheme="primary"
          :href="$config.DASHBOARD_APP_URL"
        />
      </div>
      <div class="homepage__first-block-image-wrp">
        <img
          v-if="isMobile"
          class="homepage__first-block-image-mobile"
          src="/images/first-block-mobile.png"
        />
        <img
          v-else
          class="homepage__first-block-image"
          src="/images/first-block.png"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { AppButton } from '@/common'

import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { WINDOW_BREAKPOINTS } from '@/enums'

const { width: windowWidth } = useWindowSize()
const isMobile = computed(() => windowWidth.value < WINDOW_BREAKPOINTS.tablet)
</script>

<style lang="scss" scoped>
.homepage__first-block {
  display: grid;
  gap: toRem(32);
  grid-template-columns: 1fr 1.211fr;
  align-items: center;
  padding: 0 toRem(49) 0 toRem(66);

  @include respond-to(large) {
    padding: 0;
  }

  @include respond-to(tablet) {
    grid-template-columns: 1fr toRem(150);
    align-items: flex-start;
    gap: 0;
  }

  @include respond-to(xsmall) {
    grid-template-columns: 1fr toRem(50);
  }
}

.homepage__first-block-image-wrp {
  position: relative;
}

.homepage__first-block-image {
  width: 100%;
}

.homepage__first-block-image-mobile {
  height: toRem(356);
  width: toRem(153);
  position: absolute;
  right: toRem(-32);
  top: 0;

  @include respond-to(xsmall) {
    top: toRem(41);
  }
}

.homepage__first-block-desc {
  margin: toRem(24) 0 toRem(48);
  font-size: toRem(32);
  line-height: 1;

  @include respond-to(tablet) {
    font-size: toRem(24);
    line-height: 1.2;
    margin: toRem(16) 0 toRem(24);
  }

  @include respond-to(xsmall) {
    max-width: toRem(188);
  }
}

.homepage__launch-btn {
  width: toRem(199);

  @include respond-to(xsmall) {
    width: toRem(188);
  }
}
</style>
