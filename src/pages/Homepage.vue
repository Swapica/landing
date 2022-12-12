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
          alt="image"
        />
        <img
          v-else
          class="homepage__first-block-image"
          src="/images/first-block.png"
          alt="image"
        />
      </div>
    </section>

    <section class="homepage__second-block">
      <img
        v-if="!isMobile"
        class="homepage__second-block-image"
        src="/images/second-block.png"
        alt="image"
      />
      <div class="homepage__second-block-content">
        <h2 class="homepage__second-block-title">
          {{ $t('homepage.second-block-title') }}
        </h2>
        <p class="homepage__second-block-desc">
          {{ $t('homepage.second-block-desc') }}
        </p>
        <i18n-t
          class="homepage__second-block-desc homepage__second-block-desc-second"
          keypath="homepage.second-block-second-desc"
          tag="p"
        >
          <template #part1>
            <span class="homepage__second-block-desc-bold">
              {{ $t('homepage.second-block-second-desc-part-1') }}
            </span>
          </template>
        </i18n-t>
      </div>
    </section>

    <section class="homepage__third-block">
      <div class="homepage__third-block-info-block">
        <div class="homepage__third-block-info-block-wrp">
          <span class="homepage__third-block-info-block-title-number">
            {{ $t('homepage.third-block-title-number-1') }}
          </span>
          <h3>{{ $t('homepage.third-block-title-1') }}</h3>
        </div>
        <img
          class="homepage__third-block-info-block-img"
          src="/images/third-block-1.png"
          alt="image"
        />
        <p class="homepage__third-block-info-block-desc">
          {{ $t('homepage.third-block-desc-1') }}
        </p>
      </div>
      <div class="homepage__third-block-info-block">
        <div class="homepage__third-block-info-block-wrp">
          <span class="homepage__third-block-info-block-title-number">
            {{ $t('homepage.third-block-title-number-2') }}
          </span>
          <h3>{{ $t('homepage.third-block-title-2') }}</h3>
        </div>
        <img
          class="homepage__third-block-info-block-img"
          src="/images/third-block-2.png"
          alt="image"
        />
        <p class="homepage__third-block-info-block-desc">
          {{ $t('homepage.third-block-desc-1') }}
        </p>
      </div>
      <div class="homepage__third-block-info-block">
        <div class="homepage__third-block-info-block-wrp">
          <span class="homepage__third-block-info-block-title-number">
            {{ $t('homepage.third-block-title-number-3') }}
          </span>
          <h3>{{ $t('homepage.third-block-title-3') }}</h3>
        </div>
        <img
          class="homepage__third-block-info-block-img"
          src="/images/third-block-3.png"
          alt="image"
        />
        <p class="homepage__third-block-info-block-desc">
          {{ $t('homepage.third-block-desc-1') }}
        </p>
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
  gap: toRem(16);
  grid-template-columns: 1fr 1.269fr;
  align-items: center;
  padding: 0 toRem(33) 0 toRem(66);

  @include respond-to(large) {
    padding: 0;
  }

  @include respond-to(tablet) {
    grid-template-columns: 1fr toRem(150);
    align-items: flex-start;
    gap: 0;
    padding-bottom: toRem(80);
  }

  @include respond-to(643px) {
    padding-bottom: toRem(30);
  }

  @include respond-to(xsmall) {
    grid-template-columns: 1fr toRem(50);
    padding-bottom: toRem(68);
  }
}

.homepage__first-block-image-wrp {
  position: relative;
}

.homepage__first-block-image {
  width: 100%;
}

.homepage__first-block-image-mobile {
  height: toRem(309);
  width: toRem(153);
  position: absolute;
  right: toRem(-32);
  top: toRem(-35);
  box-shadow: toRem(-2) toRem(4) toRem(16) toRem(9) rgba(94, 77, 62, 0.05);
  border-radius: toRem(29) 0 0 toRem(29);

  @include respond-to(xsmall) {
    top: toRem(59);
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

.homepage__second-block {
  margin-top: toRem(108);
  display: grid;
  gap: toRem(56);
  grid-template-columns: 1fr 1.091fr;
  align-items: center;
  padding: 0 toRem(82) 0 toRem(66);

  @include respond-to(large) {
    padding: 0;
  }

  @include respond-to(tablet) {
    margin-top: toRem(84);
    grid-template-columns: 1fr;
  }
}

.homepage__second-block-image {
  width: 100%;
  border-radius: 6.5%;
  box-shadow: toRem(-2) toRem(4) toRem(16) toRem(9) rgba(94, 77, 62, 0.05);
}

.homepage__second-block-title {
  margin-bottom: toRem(16);

  @include respond-to(tablet) {
    margin-bottom: toRem(20);
  }
}

.homepage__second-block-desc-second {
  margin-top: toRem(24);

  @include respond-to(tablet) {
    margin-top: toRem(20);
  }
}

.homepage__second-block-desc {
  font-size: toRem(22);
  line-height: 1.2;
}

.homepage__second-block-desc-bold {
  font-size: inherit;
  line-height: inherit;
  color: var(--text-primary-dark);
}

.homepage__third-block {
  margin-top: toRem(126);
  display: grid;
  gap: toRem(32);
  grid-template-columns: 1fr 1fr 1fr;

  @include respond-to(tablet) {
    margin-top: toRem(100);
    grid-template-columns: 1fr;
  }
}

.homepage__third-block-info-block-img {
  max-width: toRem(302);
  width: 100%;
}

.homepage__third-block-info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: toRem(24);
}

.homepage__third-block-info-block-wrp {
  display: flex;
  gap: toRem(16);
  align-items: center;
}

.homepage__third-block-info-block-desc {
  font-size: toRem(20);
  line-height: 1.2;
  text-align: center;
}

.homepage__third-block-info-block-title-number {
  font-size: toRem(36);
  line-height: 1;
  color: var(--text-primary-dark);
  padding: toRem(14) toRem(22) toRem(4) toRem(20);
  background: url('/backgrounds/circle-bg.svg') no-repeat;
  background-size: 100% 100%;
}
</style>
