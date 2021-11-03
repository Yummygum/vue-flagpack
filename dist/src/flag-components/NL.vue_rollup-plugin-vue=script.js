'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var script = {
  name: 'NL',
  methods: {
    getUrl(size) {
      if (size === 's') {
        return require('./../../flags/s/NL.svg')
      }

      if (size === 'm') {
        return require('./../../flags/m/NL.svg')
      }

      if (size === 'l') {
        return require('./../../flags/l/NL.svg')
      }
    }
  },
  props: {
    size: {
      type: String,
      default: 'm',
      validator: value => (
        ['s', 'm', 'l'].indexOf(value.toLowerCase()) !== -1
      ),
    },
    hasDropShadow: {
      type: Boolean,
      default: false,
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    hasBorderRadius: {
      type: Boolean,
      default: true,
    },
    gradient: {
      type: String,
      validator: value => (
        ['top-down', 'real-linear', 'real-circular'].indexOf(value) !== -1
      ),
    },
    className: {
      type: String
    }
  },
};

exports.default = script;
