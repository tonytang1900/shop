import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  console.log(Toast);
  const ToastConstructor = Vue.extend(Toast)
  const toast = new ToastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj
