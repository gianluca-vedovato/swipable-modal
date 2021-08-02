import SwipableModal from './SwipableModal.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('SwipableModal', SwipableModal)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

SwipableModal.install = install

export default SwipableModal
