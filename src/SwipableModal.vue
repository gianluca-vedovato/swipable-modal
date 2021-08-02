<template>
  <div v-swipe="{ direction: 'y', limit: position}">
    <transition name="swipable">
      <div
        v-show="isOpen"
        v-vh
        class="swipable-modal"
      >
        <div
          class="swipable-modal__bg"
          @click="isOpen = false"
        />
        <div
          class="swipable-modal__content"
          :class="position"
        >
          <div class="swipable-modal__content__main">
            <slot />
          </div>
          <div class="swipable-modal__content__handler">
            <span />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vh from './mixins/vh'
import swipe from './mixins/swipe'

export default {
  mixins: [vh, swipe],
  props: {
    position: {
      type: String,
      default: () => 'top',
      validator: value => ['top', 'bottom']
    }
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    open () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.swipable-modal {
  height: calc(var(--vh) * 100);
  width: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  &__bg {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: auto;
    position: absolute;
  }
  &__content {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    padding: 1.125rem 1rem 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    z-index: 2;
    transition: transform 0.3s ease;
    &.no-transition {
      transition: none;
    }
    &.top {
      top: -100vh;
      padding-top: 100vh;
      border-radius: 0 0 1.5rem 1.5rem;
      .swipable-modal__content__main {
        order: 1;
      }
      .swipable-modal__content__handler {
        order: 2;
      }
    }
    &.bottom {
      bottom: -100vh;
      padding-bottom: 100vh;
      border-radius: 1.5rem 1.5rem 0 0;
      .swipable-modal__content__main {
        order: 2;
      }
      .swipable-modal__content__handler {
        order: 1;
      }
    }
    &__handler {
      width: 100%;
      padding: 1.125rem 0;
      display: flex;
      justify-content: center;
      span {
        position: relative;
        width: 2.875rem;
        height: 5px;
        background-color: #A5A3A3;
        border-radius: 1.5rem;
      }
    }
  }
}

.no-touch {
  .swipable-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    .swipable-modal {
      &__content {
        position: relative;
        width: 600px;
        max-height: 600px;
        overflow-y: auto;
        top: 0;
        padding-top: 0;
        border-radius: 1rem;
        padding: 1.125rem 0;
        &__main {
          padding: 1.125rem 0;
        }
        &__handler {
          display: none;
        }
      }
    }
  }
}

.swipable-enter-active,
.swipable-leave-active {
  transition: all 0.2s ease;
  .swipable-modal__content {
    transition: transform 0.2s ease opacity 0.2s ease;
  }
  .swipable-modal__bg {
    transition: opacity 0.2s ease
  }
}

.swipable-enter,
.swipable-leave-to {
  opacity: 0.99;
  .swipable-modal__content {
    &.top {
      transform: translateY(-100%) !important;
    }
    &.bottom {
      transform: translateY(100%) !important;
    }
  }
  .swipable-modal__bg {
    opacity: 0;
  }
}

.swipable-leave,
.swipable-enter-to {
  opacity: 1;
  .swipable-modal__content {
    &.top {
      transform: translateY(0);
    }
    &.bottom {
      transform: translateY(0);
    }
  }
  .swipable-modal__bg {
    opacity: 1;
  }
}

.no-touch {
  .swipable-enter,
  .swipable-leave-to {
    .swipable-modal__content {
      &.top,
      &.bottom {
        transform: translateY(20px) !important;
        opacity: 0;
      }
    }
  }
  .swipable-leave,
  .swipable-enter-to {
    .swipable-modal__content {
      &.top,
      &.bottom {
        transform: translateY(0) !important;
        opacity: 1;
      }
    }
  }
}
</style>
