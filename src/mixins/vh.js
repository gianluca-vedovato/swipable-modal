export default {
  directives: {
    vh: {
      inserted (el, binding, vnode) {
        vnode.context._vhListener = window.addEventListener(
          'resize',
          delayCall.bind(undefined, setProperty.bind(undefined, el)),
          { passive: true }
        )

        delayCall(setProperty.bind(undefined, el))
      },
      unbind (el, binding, vnode) {
        if (vnode.context._vhListener) window.removeEventListener('resize', vnode.context._vhListener)
      }
    }
  }
}

const setProperty = (el) => {
  const vh = window.innerHeight * 0.01
  el.style.setProperty('--vh', `${vh}px`)
}

const delayCall = fn =>
  window.requestIdleCallback
    ? window.requestIdleCallback(fn, { timeout: 1000 })
    : fn()
