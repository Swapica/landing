<script lang="ts" setup>
import { AppNavbar, AppFooter } from '@/common'

import { ErrorHandler } from '@/helpers/error-handler'
import { ref } from 'vue'
import { config } from '@config'

const isAppInitialized = ref(false)
const init = async () => {
  try {
    document.title = config.APP_NAME
  } catch (error) {
    ErrorHandler.process(error)
  }
  isAppInitialized.value = true
}

init()
</script>

<template>
  <div v-if="isAppInitialized" class="app__container">
    <app-navbar class="app__navbar" />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component class="app__main" :is="Component" />
      </transition>
    </router-view>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.app__container {
  display: grid;
  grid-template-rows: 1fr max-content;
  flex: 1;

  @include respond-to(small) {
    grid-template-rows: 1fr max-content;
  }
}

.app__main {
  --padding: #{toRem(144)} var(--app-padding-right) #{toRem(154)}
    var(--app-padding-left);
  --padding-mobile: #{toRem(112)} var(--app-padding-right) #{toRem(100)}
    var(--app-padding-left);

  padding: var(--padding);
  max-width: toRem(1512);
  margin: 0 auto;
  width: 100%;

  @include respond-to(tablet) {
    padding: var(--padding-mobile);
  }
}

.fade-enter-active {
  animation: fade-in 0.25s;
}

.fade-leave-active {
  animation: fade-in 0.25s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
