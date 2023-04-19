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

    <div class="terms__content">
      <div class="terms__texts">
        <ol class="terms__upper-alpha-list terms__main-list">
          <li
            class="terms__paragraph"
            v-for="i in 10"
            :key="i"
            v-html="$t(`terms.list-desc-${i}`)"
          />
        </ol>

        <ol class="terms__numeric-list">
          <li class="terms__block-title" id="definitions-and-interpretations">
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

          <li
            class="terms__block-title"
            id="access-and-use-the-platform-and-services"
          >
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

          <li class="terms__block-title" id="use-of-the-platform-and-services">
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

          <li class="terms__block-title" id="content-and-ip-rights">
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

          <li class="terms__block-title" id="risks-acknowledgement">
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

          <li class="terms__block-title" id="gas-fees-and-taxes">
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

          <li class="terms__block-title" id="term-and-termination">
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

          <li class="terms__block-title" id="indemnification-and-disclaimer">
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

          <li class="terms__block-title" id="limitation-of-liability">
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

          <li
            class="terms__block-title"
            id="governing-law-and-dispute-resolution"
          >
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

          <li class="terms__block-title" id="notices">
            {{ $t('terms.block-11-title') }}
            <p
              class="terms__paragraph"
              v-for="i in 2"
              :key="i"
              v-html="$t(`terms.block-11-list-desc-${i}`)"
            />
          </li>

          <li class="terms__block-title" id="miscellaneous-provisions">
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

      <ol class="terms__numeric-list terms__anchors">
        <li>
          <router-link
            :to="{ hash: '#definitions-and-interpretations' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-1-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#access-and-use-the-platform-and-services' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-2-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#use-of-the-platform-and-services' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-3-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#content-and-ip-rights' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-4-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#risks-acknowledgement' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-5-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#gas-fees-and-taxes' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-6-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#term-and-termination' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-7-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#indemnification-and-disclaimer' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-8-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#limitation-of-liability' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-9-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#governing-law-and-dispute-resolution' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-10-title') }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ hash: '#notices' }" class="terms__anchor">
            {{ $t('terms.block-11-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#miscellaneous-provisions' }"
            class="terms__anchor"
          >
            {{ $t('terms.block-12-title') }}
          </router-link>
        </li>
      </ol>
    </div>
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
  padding-left: toRem(48);

  @include respond-to(small) {
    padding-left: toRem(20);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    margin-top: toRem(8);
    position: relative;

    &:before {
      counter-increment: value;
      content: '(' counter(value) ') ';
      position: absolute;
      width: toRem(40);
      left: toRem(-48);
      text-align: right;
    }
  }
}

.terms__upper-alpha-list {
  padding-left: toRem(56);

  @include respond-to(small) {
    padding-left: toRem(16);
  }

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    list-style-type: upper-alpha;
    margin-top: toRem(16);

    &:first-child {
      margin-top: 0;
    }
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
      padding-left: toRem(56);

      @include respond-to(small) {
        padding-left: toRem(20);
      }

      > li {
        position: relative;
      }

      > li:before {
        content: counters(item, '.') ' ';
        position: absolute;
        width: toRem(48);
        left: toRem(-56);
        text-align: right;
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

.terms__content {
  display: grid;
  grid-template-columns: minmax(toRem(200), toRem(891)) minmax(toRem(300), 1fr);
  gap: toRem(20);

  @include respond-to(xmedium) {
    grid-template-columns: 1fr;
  }
}

.terms__anchors {
  background: url('/backgrounds/block-bg.svg') no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: toRem(100);
  padding: toRem(24) toRem(16) toRem(34) toRem(76);

  @include respond-to(small) {
    padding-left: toRem(50);
  }

  /* stylelint-disable no-descending-specificity */
  > li {
    position: relative;
    margin-top: toRem(8);

    &:first-child {
      margin-top: 0;
    }
  }

  > li:before {
    position: absolute;
    width: toRem(48);
    left: toRem(-56);
    text-align: right;
  }
  /* stylelint-enable no-descending-specificity */

  @include respond-to(xmedium) {
    grid-row-start: 1;
    max-width: toRem(429);
    position: relative;
    top: 0;
  }
}
</style>
