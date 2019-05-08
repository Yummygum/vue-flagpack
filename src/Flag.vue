<template>
  <div
    :class="`flag
      size-${size}
      ${dropshadow ? 'dropshadow' : ''}
      ${border ? 'border' : ''}
      ${borderRadius ? 'border-radius' : ''}
      ${gradient}`"
    :style="{borderRadius: customBorderRadius}">
    <img :src="`/public/svg/${size}/${code}.svg`">
  </div>
</template>

<script>
export default {
  name: 'Flag',
  props: {
    size: {
      type: String,
      default: 'l',
    },
    code: {
      type: String,
      required: true,
    },
    dropshadow: {
      type: Boolean,
    },
    border: {
      type: Boolean,
      default: true
    },
    borderRadius: {
      type: Boolean,
      default: true,
    },
    customBorderRadius: {
      type: String,
    },
    gradient: {
      type: String,
      default: 'top-down',
    },
  },
};
</script>

<style scoped lang="scss">
.flag {
  display: inline-block;
  overflow: hidden;
  position: relative;

  &.size {
    &-s {
      width: 16px;
      height: 12px;

      &.dropshadow {
        box-shadow: 0 0 1px 0.5px rgba(0,0,0,0.10);
      }

      &.border-radius {
        border-radius: 1px;
      }
    }

    &-m {
      &.dropshadow {
        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
      }

      &.border-radius {
        border-radius: 1.5px;
      }
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    mix-blend-mode: overlay;
  }

  &.border {
    &::before {
      border: 1px solid rgba(0, 0, 0, .2);
      mix-blend-mode: overlay;
    }
  }

  &.border-radius {
    &::before {
      border-radius: 1px;
    }
  }

  &.top-down {
    &::before {
      background-image: linear-gradient(0deg, rgba(0,0,0,0.30) 2%, rgba(255,255,255,0.70) 100%);
    }
  }

  img {
    display: block;
  }
}
</style>
