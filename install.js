import axios from 'axios'

import VFormDesigner from '@tslc/lowcode-designer-page/components/form-designer/index.vue'
import VFormRender from '@tslc/lowcode-designer-page/components/form-render/index.vue'

import Draggable from '@tslc/lowcode-designer-page/../lib/vuedraggable/dist/vuedraggable.umd.js'
import {registerIcon} from '@tslc/lowcode-designer-page/utils/el-icons'
import 'virtual:svg-icons-register'
import '@tslc/lowcode-designer-page/iconfont/iconfont.css'

import ContainerWidgets from '@tslc/lowcode-designer-page/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@tslc/lowcode-designer-page/components/form-render/container-item/index'

import { addDirective } from '@tslc/lowcode-designer-page/utils/directive'
import { installI18n } from '@tslc/lowcode-designer-page/utils/i18n'
import { loadExtension } from '@tslc/lowcode-designer-page/extension/extension-loader'


VFormDesigner.install = function (app) {
  addDirective(app)
  installI18n(app)
  loadExtension(app)

  app.use(ContainerWidgets)
  app.use(ContainerItems)

  registerIcon(app)
  app.component('draggable', Draggable)
  app.component(VFormDesigner.name, VFormDesigner)
}

VFormRender.install = function (app) {
  installI18n(app)
  loadExtension(app)

  app.use(ContainerItems)

  registerIcon(app)
  app.component(VFormRender.name, VFormRender)
}

const components = [
  VFormDesigner,
  VFormRender
]

const install = (app) => {
  addDirective(app)
  installI18n(app)
  loadExtension(app)

  app.use(ContainerWidgets)
  app.use(ContainerItems)

  registerIcon(app)
  app.component('draggable', Draggable)

  components.forEach(component => {
    app.component(component.name, component)
  })

  window.axios = axios
}

if (typeof window !== 'undefined' && window.Vue) { /* script方式引入时赋值axios！！ */
  //window.axios = axios
}

export default {
  install,
  VFormDesigner,
  VFormRender
}
