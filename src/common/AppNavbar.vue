<template>
  <div
    class="app-navbar"
    :class="{
      'app-navbar--mobile': isMobile,
      'app-navbar--hidden': isNavbarHidden,
    }"
  >
    <div class="app-navbar__content">
      <app-logo class="app-navbar__logo" />

      <div v-if="!isMobile" class="app-navbar__nav">
        <router-link class="app-navbar__link" :to="{ name: $routes.homepage }">
          {{ $t('app-navbar.homepage-link') }}
        </router-link>
        <router-link class="app-navbar__link" :to="{ name: $routes.terms }">
          {{ $t('app-navbar.terms-link') }}
        </router-link>
        <router-link
          class="app-navbar__link"
          :to="{ name: $routes.privacyPolicy }"
        >
          {{ $t('app-navbar.privacy-policy-link') }}
        </router-link>
      </div>
    </div>
    <div>
      <app-button
        v-if="!isMobile"
        scheme="primary"
        :text="$t('app-navbar.launch-btn')"
        class="app-navbar__action-btn"
        :href="$config.DASHBOARD_APP_URL"
      />

      <app-button
        v-if="isMobile"
        class="app-navbar__toogle-btn"
        :icon-right="$icons.menu"
        @click="isMobileNavigationShown = true"
      />
    </div>
    <app-navigation-mobile
      :is-shown="isMobileNavigationShown"
      @close-nav="isMobileNavigationShown = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { AppLogo, AppButton, AppNavigationMobile } from '@/common'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { WINDOW_BREAKPOINTS } from '@/enums'

const MOBILE_NAVBAR_HEIGHT = 88
const NAVBAR_HEIGHT = 96

const { width: windowWidth } = useWindowSize()
const isMobileNavigationShown = ref(false)
const lastScrollPosition = ref(0)
const isNavbarHidden = ref(false)

const isMobile = computed(() => windowWidth.value < WINDOW_BREAKPOINTS.tablet)
const navbarHeight = computed(() =>
  isMobile.value ? MOBILE_NAVBAR_HEIGHT : NAVBAR_HEIGHT,
)

onMounted(() => {
  window.addEventListener('scroll', toggleShowNavbar)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleShowNavbar)
})

const toggleShowNavbar = () => {
  const currentScrollPosition = window.pageYOffset
  if (
    currentScrollPosition > lastScrollPosition.value &&
    currentScrollPosition > navbarHeight.value
  ) {
    isNavbarHidden.value = true
  } else if (currentScrollPosition < lastScrollPosition.value) {
    isNavbarHidden.value = false
  }
  lastScrollPosition.value = currentScrollPosition
}
</script>

<style lang="scss" scoped>
$z-local-index: 9;

.app-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: toRem(24) var(--app-padding-right) toRem(24) var(--app-padding-left);
  position: fixed;
  top: 0;
  background-color: var(--background-primary-main);
  box-shadow: 0 toRem(2) toRem(12) var(--shadow-primary-dark);
  height: toRem(96);
  z-index: $z-local-index;
  width: 100vw;
  transition: transform 0.3s;
  transform: none;

  &--hidden {
    transform: translateY(-100%);
  }

  @include respond-to(tablet) {
    flex-wrap: wrap;
    height: toRem(88);
    padding: toRem(24) var(--app-padding-right) toRem(24)
      var(--app-padding-left);
  }
}

.app-navbar__content {
  display: flex;
  gap: toRem(32);
  align-items: center;
}

.app-navbar__nav {
  display: flex;
  gap: toRem(32);
}

.app-navbar__link {
  padding: toRem(11.5) toRem(12);
  position: relative;
  color: var(--text-primary-dark);
  opacity: 0.5;
  transition: color 0.3s;

  &:hover {
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    background: url('/backgrounds/button-underline.svg') no-repeat;
    background-size: 100% 100%;
    width: 0;
    height: toRem(6.5);
    left: 0;
    bottom: 0;
    transition: width 0.2s ease-in-out;
  }

  &.router-link-active {
    opacity: 1;

    &:after {
      width: 100%;
    }
  }
}

.app-navbar__logo {
  width: toRem(40);
  height: toRem(40);

  .app-navbar--mobile & {
    width: toRem(120);
    height: toRem(23);
  }
}

.app-navbar__toogle-btn {
  --button-icon-size: #{toRem(40)};
}

.app-navbar__action-btn {
  width: toRem(198);
}
</style>
