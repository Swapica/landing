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

    <ol class="terms__numeric-list">
      <li class="terms__block-title">
        {{ $t('terms.block-1-title') }}
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
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-2-title') }}

        <ol class="terms__numeric-list">
          <li class="terms__paragraph" v-for="i in 6" :key="i">
            <template v-if="i === 3">
              <span class="terms__list-item-span">
                {{ $t('terms.block-2-list-desc-3') }}</span
              >
              <ul class="terms__numeric-list-with-temples">
                <li
                  v-for="num in 4"
                  :key="num"
                  class="terms__paragraph"
                  v-html="$t(`terms.block-2-subblock-3-list-desc-${num}`)"
                />
              </ul>
            </template>
            <template v-else>
              <span
                class="terms__list-item-span"
                v-html="$t(`terms.block-2-list-desc-${i}`)"
              />
            </template>
          </li>
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-3-title') }}
        <ol class="terms__numeric-list">
          <li class="terms__paragraph" v-for="i in 6" :key="i">
            <template v-if="i === 1">
              <span class="terms__list-item-span">
                {{ $t('terms.block-3-list-desc-1') }}</span
              >
              <ul class="terms__numeric-list-with-temples">
                <li
                  v-for="num in 4"
                  :key="num"
                  class="terms__paragraph"
                  v-html="$t(`terms.block-3-subblock-1-list-desc-${num}`)"
                />
              </ul>
            </template>
            <template v-else>
              <span
                class="terms__list-item-span"
                v-html="$t(`terms.block-3-list-desc-${i}`)"
              />
            </template>
          </li>
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-4-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 14"
            :key="i"
            v-html="$t(`terms.block-4-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-5-title') }}
        <ol class="terms__numeric-list">
          <li class="terms__paragraph">
            {{ $t('terms.block-5-list-desc-1') }}

            <ul class="terms__numeric-list-with-temples">
              <li
                v-for="num in 21"
                :key="num"
                class="terms__paragraph"
                v-html="$t(`terms.block-5-subblock-1-list-desc-${num}`)"
              />
            </ul>
          </li>
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-6-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 2"
            :key="i"
            v-html="$t(`terms.block-6-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-7-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 5"
            :key="i"
            v-html="$t(`terms.block-7-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-8-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 5"
            :key="i"
            v-html="$t(`terms.block-8-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-9-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 2"
            :key="i"
            v-html="$t(`terms.block-9-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-10-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 3"
            :key="i"
            v-html="$t(`terms.block-10-list-desc-${i}`)"
          />
        </ol>
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-11-title') }}
        <p
          class="terms__paragraph"
          v-for="i in 2"
          :key="i"
          v-html="$t(`terms.block-11-list-desc-${i}`)"
        />
      </li>

      <li class="terms__block-title">
        {{ $t('terms.block-12-title') }}
        <ol class="terms__numeric-list">
          <li
            class="terms__paragraph"
            v-for="i in 6"
            :key="i"
            v-html="$t(`terms.block-12-list-desc-${i}`)"
          />
        </ol>
      </li>
    </ol>
  </div>
</template>
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
  line-height: 1.2;

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

.terms__block-title {
  /* stylelint-disable-next-line declaration-no-important */
  margin-top: toRem(40) !important;
  font-size: toRem(32);
  color: var(--text-primary-dark);
  margin-bottom: toRem(16);

  @include respond-to(tablet) {
    font-size: toRem(24);
  }
}

.terms__numeric-list-with-temples {
  margin-top: toRem(8);
  counter-reset: value;

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    display: table;
    margin-top: toRem(8);

    &:before {
      counter-increment: value;
      content: '(' counter(value) ') ';
      display: table-cell;
      padding-right: toRem(10);
    }
  }
}

.terms__upper-alpha-list {
  margin-top: toRem(16);
  padding-left: toRem(16);

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    list-style-type: upper-alpha;
    margin-top: toRem(16);
  }
}

.terms__numeric-list {
  list-style-type: none;
  counter-reset: item;

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    counter-increment: item;
    margin-top: toRem(16);

    &:before {
      content: counters(item, '.') '. ';
    }

    ol.terms__numeric-list {
      > li {
        display: table;
      }

      > li:before {
        padding-right: toRem(10);
        content: counters(item, '.') ' ';
        display: table-cell;
      }
    }
  }
}

.terms__main-list {
  margin-bottom: toRem(40);
}

.terms__list-item-span {
  font-size: inherit;
  font-weight: inherit;
}
</style>
