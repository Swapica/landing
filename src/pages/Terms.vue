<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="terms">
    <h1 class="terms__main-title">
      {{ $t('terms.title') }}
    </h1>
    <p class="terms__paragraph">
      {{ $t('terms.desc') }}
    </p>
    <p class="terms__paragraph terms__effective-desc">
      {{ $t('terms.effective-desc') }}
    </p>

    <div class="terms__anchors">
      <a class="terms__anchor">
        {{ $t('terms.block-1-title') }}
      </a>
    </div>

    <div class="terms__block">
      <h3>{{ $t('terms.block-1-title') }}</h3>
      <p class="terms__paragraph" v-html="$t('terms.block-1-desc-part-1')" />
      <p class="terms__paragraph" v-html="$t('terms.block-1-desc-part-2')" />
      <p class="terms__paragraph">
        {{ $t('terms.block-1-desc-part-3') }}
      </p>
      <p class="terms__paragraph">
        {{ $t('terms.block-1-desc-part-4') }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.terms__main-title {
  font-size: toRem(48);
  line-height: 1;

  @include respond-to(tablet) {
    font-size: toRem(32);
  }
}

.terms__paragraph {
  font-size: toRem(20);
  margin-top: toRem(16);

  b {
    color: var(--text-primary-dark);
  }

  @include respond-to(tablet) {
    font-size: toRem(16);
  }
}

.terms__effective-desc {
  margin: toRem(40) 0;

  @include respond-to(tablet) {
    margin: toRem(24) 0;
  }
}

.terms__anchors {
  display: flex;
  flex-direction: column;
  gap: toRem(12);
  margin-bottom: toRem(64);

  @include respond-to(tablet) {
    margin-bottom: toRem(32);
  }
}

.terms__anchor {
  font-size: toRem(24);

  @include respond-to(tablet) {
    font-size: toRem(18);
  }
}
</style>
