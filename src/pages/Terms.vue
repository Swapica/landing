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

    <ol class="terms__upper-alpha-list terms__main-list">
      <li
        class="terms__paragraph"
        v-for="i in 10"
        :key="i"
        v-html="$t(`terms.list-desc-${i}`)"
      />
    </ol>

    <div class="terms__block">
      <h3>{{ $t('terms.block-1-title') }}</h3>
      <ol class="terms__numeric-list">
        <li class="terms__paragraph" v-for="i in 7" :key="i">
          <template v-if="i === 1">
            <span class="terms__list-item-span">
              {{ $t('terms.block-1-list-desc-1') }}</span
            >
            <ul class="terms__numeric-list-with-temples">
              <li
                v-for="num in 9"
                :key="num"
                class="terms__paragraph"
                v-html="$t(`terms.block-1-subblock-1-list-desc-${num}`)"
              />
            </ul>
          </template>
          <template v-else>
            <span
              class="terms__list-item-span"
              v-html="$t(`terms.block-1-list-desc-${i}`)"
            />
          </template>
        </li>
      </ol>
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

  a {
    font-size: inherit;
    text-decoration: underline;
    line-height: inherit;
    color: var(--text-primary-dark);
  }

  i {
    font-style: italic;
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

.terms__subblock-title {
  margin-top: toRem(16);
}

.terms__block {
  margin-bottom: toRem(40);
}

.terms__numeric-list-with-temples {
  margin-top: toRem(8);
  counter-reset: value;

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    display: table;
    margin-top: toRem(8);

    &:first-child {
      margin-top: 0;
    }

    &:before {
      counter-increment: value;
      content: '(' counter(value) ') ';
      display: table-cell;
      padding-right: 0.6em;
    }
  }
}

.terms__upper-alpha-list {
  margin-top: toRem(16);
  padding-left: toRem(16);

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    list-style-type: upper-alpha;
    margin-top: toRem(8);

    &:first-child {
      margin-top: 0;
    }
  }
}

.terms__numeric-list {
  margin-top: toRem(16);
  counter-reset: value;

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    display: table;
    margin-top: toRem(8);

    &:first-child {
      margin-top: 0;
    }

    &:before {
      counter-increment: value;
      content: '1.' counter(value) ' ';
      display: table-cell;
      padding-right: 0.6em;
    }
  }
}

.terms__subsubblock-title {
  margin-top: toRem(16);
}

.terms__main-list {
  margin-bottom: toRem(40);
}

.terms__list-item-span {
  font-size: inherit;
  font-weight: inherit;
}
</style>
