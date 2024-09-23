import emitter from '@tslc/lowcode-designer-page/utils/emitter'
import eventBus from "@tslc/lowcode-designer-page/utils/event-bus"

export default {
  mixins: [emitter],
  created() {},
  methods: {
    editEventHandler(eventName, eventParams) {
      this.dispatch('SettingPanel', 'editEventHandler', [eventName, [...eventParams]])
    },

  }
}
