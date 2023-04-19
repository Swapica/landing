<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="privacy-policy">
    <h1 class="privacy-policy__main-title">
      {{ $t('privacy-policy.title') }}
    </h1>
    <p class="privacy-policy__paragraph">
      {{ $t('privacy-policy.desc') }}
    </p>
    <p class="privacy-policy__paragraph privacy-policy__effective-desc">
      {{ $t('privacy-policy.effective-desc') }}
    </p>

    <div class="privacy-policy__content">
      <div class="privacy-policy__texts">
        <ol class="privacy-policy__upper-alpha-list privacy-policy__main-list">
          <li
            class="privacy-policy__paragraph"
            v-for="i in 5"
            :key="i"
            v-html="$t(`privacy-policy.list-desc-${i}`)"
          />
        </ol>

        <ol class="privacy-policy__numeric-list">
          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-1-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 4" :key="i">
                <template v-if="i === 1">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-1-list-desc-1') }}</span
                  >
                  <ul>
                    <li
                      class="privacy-policy__paragraph"
                      v-html="
                        $t('privacy-policy.block-1-subblock-1-list-desc-1')
                      "
                    />
                    <li
                      class="privacy-policy__paragraph"
                      v-html="
                        $t('privacy-policy.block-1-subblock-1-list-desc-2')
                      "
                    />
                  </ul>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-1-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-2-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 4" :key="i">
                <template v-if="i === 3">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-2-list-desc-3') }}</span
                  >
                  <ul class="privacy-policy__numeric-list-with-temples">
                    <li
                      v-for="num in 4"
                      :key="num"
                      class="privacy-policy__paragraph"
                      v-html="
                        $t(`privacy-policy.block-2-subblock-3-list-desc-${num}`)
                      "
                    />
                  </ul>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-2-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-3-title') }}

            <p class="privacy-policy__paragraph">
              {{ $t('privacy-policy.block-3-list-desc-1') }}
            </p>
            <ul class="privacy-policy__numeric-list-with-temples">
              <li
                v-for="num in 9"
                :key="num"
                class="privacy-policy__paragraph"
                v-html="
                  $t(`privacy-policy.block-3-subblock-1-list-desc-${num}`)
                "
              />
            </ul>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-4-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 3" :key="i">
                <template v-if="i === 1">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-4-list-desc-1') }}</span
                  >
                  <ul class="privacy-policy__numeric-list-with-temples">
                    <li
                      v-for="num in 6"
                      :key="num"
                      class="privacy-policy__paragraph"
                      v-html="
                        $t(`privacy-policy.block-4-subblock-1-list-desc-${num}`)
                      "
                    />
                  </ul>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-4-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-5-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 3" :key="i">
                <template v-if="i === 2">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-5-list-desc-2') }}</span
                  >
                  <ul class="privacy-policy__numeric-list-with-temples">
                    <li
                      v-for="num in 3"
                      :key="num"
                      class="privacy-policy__paragraph"
                      v-html="
                        $t(`privacy-policy.block-5-subblock-2-list-desc-${num}`)
                      "
                    />
                  </ul>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-5-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-6-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 5" :key="i">
                <template v-if="i === 1">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-6-list-desc-1') }}</span
                  >
                  <table class="privacy-policy__table">
                    <thead class="privacy-policy__table-head">
                      <th>{{ $t('privacy-policy.purpose-title') }}</th>
                      <th>
                        {{ $t('privacy-policy.personal-information-title') }}
                      </th>
                      <th>{{ $t('privacy-policy.legal-basis-title') }}</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 1,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t('privacy-policy.financial-information-lbl')
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 2,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t('privacy-policy.financial-information-lbl')
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.obligations-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 3,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t('privacy-policy.financial-information-lbl')
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 4,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.obligations-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 5,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t('privacy-policy.financial-information-lbl')
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.obligations-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 6,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.consent-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 7,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.consent-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td class="privacy-policy__table-purpose-msg">
                          {{
                            $t('privacy-policy.purpose-msg', {
                              number: 8,
                            })
                          }}
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{
                                $t(
                                  'privacy-policy.correspondence-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{
                                $t(
                                  'privacy-policy.transactions-information-lbl',
                                )
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.user-information-lbl') }}
                            </li>
                          </ul>
                        </td>
                        <td>
                          <ul class="privacy-policy__disc-list">
                            <li>
                              {{ $t('privacy-policy.perfomance-contract-lbl') }}
                            </li>
                            <li>
                              {{
                                $t('privacy-policy.legitimate-interests-lbl')
                              }}
                            </li>
                            <li>
                              {{ $t('privacy-policy.consent-lbl') }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-6-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-7-title') }}
            <ol class="privacy-policy__numeric-list">
              <li
                class="privacy-policy__paragraph"
                v-for="i in 3"
                :key="i"
                v-html="$t(`privacy-policy.block-7-list-desc-${i}`)"
              />
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-8-title') }}
            <ol class="privacy-policy__numeric-list">
              <li class="privacy-policy__paragraph" v-for="i in 3" :key="i">
                <template v-if="i === 1">
                  <span class="privacy-policy__list-item-span">
                    {{ $t('privacy-policy.block-8-list-desc-1') }}</span
                  >
                  <ul class="privacy-policy__numeric-list-with-temples">
                    <li
                      v-for="num in 10"
                      :key="num"
                      class="privacy-policy__paragraph"
                      v-html="
                        $t(`privacy-policy.block-8-subblock-1-list-desc-${num}`)
                      "
                    />
                  </ul>
                </template>
                <template v-else>
                  <span
                    class="privacy-policy__list-item-span"
                    v-html="$t(`privacy-policy.block-8-list-desc-${i}`)"
                  />
                </template>
              </li>
            </ol>
          </li>

          <li class="privacy-policy__block-title">
            {{ $t('privacy-policy.block-9-title') }}

            <p
              class="privacy-policy__paragraph"
              v-html="$t('privacy-policy.block-9-list-desc-1')"
            />
          </li>
        </ol>
      </div>
      <ol class="privacy-policy__numeric-list privacy-policy__anchors">
        <li>
          <router-link
            :to="{ hash: '#definitions-and-interpretations' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-1-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#access-and-use-the-platform-and-services' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-2-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#use-of-the-platform-and-services' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-3-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#content-and-ip-rights' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-4-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#risks-acknowledgement' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-5-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#gas-fees-and-taxes' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-6-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#term-and-termination' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-7-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#indemnification-and-disclaimer' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-8-title') }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ hash: '#limitation-of-liability' }"
            class="privacy-policy__anchor"
          >
            {{ $t('privacy-policy.block-9-title') }}
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>
<style lang="scss">
.privacy-policy__main-title {
  font-size: toRem(48);
  line-height: 1;

  @include respond-to(tablet) {
    font-size: toRem(32);
  }
}

.privacy-policy__paragraph {
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

.privacy-policy__effective-desc {
  margin: toRem(40) 0;

  @include respond-to(tablet) {
    margin: toRem(24) 0;
  }
}

.privacy-policy__block-title {
  /* stylelint-disable-next-line declaration-no-important */
  margin-top: toRem(40) !important;
  font-size: toRem(32);
  color: var(--text-primary-dark);
  margin-bottom: toRem(16);

  @include respond-to(tablet) {
    font-size: toRem(24);
  }
}

.privacy-policy__numeric-list-with-temples {
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

.privacy-policy__upper-alpha-list {
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

.privacy-policy__disc-list {
  padding-left: toRem(16);

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    margin-top: toRem(4);
    list-style-type: disc;
  }
}

.privacy-policy__numeric-list {
  list-style-type: none;
  counter-reset: item;

  /* stylelint-disable-next-line no-descending-specificity */
  > li {
    counter-increment: item;
    margin-top: toRem(16);

    &:before {
      content: counters(item, '.') '. ';
    }

    ol.privacy-policy__numeric-list {
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

.privacy-policy__main-list {
  margin-bottom: toRem(40);
}

.privacy-policy__list-item-span {
  font-size: inherit;
  font-weight: inherit;
}

.privacy-policy__table {
  margin-top: toRem(32);
  width: 100%;
  table-layout: fixed;
  background: url('/backgrounds/block-bg.svg') no-repeat;
  background-size: 100% 100%;
  padding: toRem(16) toRem(16) toRem(26) toRem(26);
  border-collapse: separate;

  @include respond-to(small) {
    table-layout: initial;
  }

  th,
  td {
    padding: toRem(12);
    color: var(--text-primary-main);

    @include respond-to(small) {
      padding: toRem(5);
    }
  }

  thead {
    th {
      font-size: toRem(20);
      line-height: 1.2;
      color: var(--text-primary-dark);

      @include respond-to(small) {
        font-size: toRem(14);
      }
    }
  }

  tbody {
    td {
      font-size: toRem(20);
      line-height: 1.2;
      border-top: toRem(1) solid var(--primary-light);

      @include respond-to(small) {
        font-size: toRem(12);
      }
    }
  }
}

.privacy-policy__content {
  display: grid;
  grid-template-columns: minmax(toRem(200), toRem(891)) minmax(toRem(300), 1fr);
  gap: toRem(20);

  @include respond-to(xmedium) {
    grid-template-columns: 1fr;
  }
}

.privacy-policy__anchors {
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
