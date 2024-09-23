import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@tslc/lowcode-designer-page/styles/index.scss'
import '@tslc/lowcode-designer-page/iconfont/iconfont.css'
import Draggable from '@tslc/lowcode-designer-page/../lib/vuedraggable/dist/vuedraggable.umd.js'
import {registerIcon} from '@tslc/lowcode-designer-page/utils/el-icons'
import 'virtual:svg-icons-register'

import ContainerWidgets from '@tslc/lowcode-designer-page/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@tslc/lowcode-designer-page/components/form-render/container-item/index'

import { addDirective } from '@tslc/lowcode-designer-page/utils/directive'
import { installI18n } from '@tslc/lowcode-designer-page/utils/i18n'
import { loadExtension } from '@tslc/lowcode-designer-page/extension/extension-loader'

if (typeof window !== 'undefined') {
  window.axios = axios
}

const vfApp = createApp(App)

vfApp.use(ElementPlus)
registerIcon(vfApp)
vfApp.component('draggable', Draggable)
addDirective(vfApp)
installI18n(vfApp)

vfApp.use(ContainerWidgets)
vfApp.use(ContainerItems)
loadExtension(vfApp)

vfApp.mount('#app')
