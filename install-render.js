import axios from 'axios'

import VFormRender from '@tslc/lowcode-designer-page/components/form-render/index.vue'
import ContainerItems from '@tslc/lowcode-designer-page/components/form-render/container-item/index'

import {registerIcon} from '@tslc/lowcode-designer-page/utils/el-icons'
import 'virtual:svg-icons-register'
import '@tslc/lowcode-designer-page/iconfont/iconfont.css'

import { installI18n } from '@tslc/lowcode-designer-page/utils/i18n'
import { loadExtension } from '@tslc/lowcode-designer-page/extension/extension-loader'

VFormRender.install = function (app) {
  installI18n(app)
  loadExtension(app)

  app.use(ContainerItems)
  registerIcon(app)
  app.component(VFormRender.name, VFormRender)
}

const components = [
  VFormRender
]

const install = (app) => {
  installI18n(app)
  loadExtension(app)

  app.use(ContainerItems)
  registerIcon(app)
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
  VFormRender
}
