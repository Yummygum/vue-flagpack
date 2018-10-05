import Vue from 'vue';
import Flag from './Flag.vue';

const Components = {
  Flag,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
