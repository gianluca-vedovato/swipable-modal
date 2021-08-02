export default {
  directives: {
    swipe: {
      inserted (el, binding, vnode) {
        /* Check if touch device */
        if (!('ontouchstart' in window) && !(navigator.MaxTouchPoints > 0) && !(navigator.msMaxTouchPoints > 0)) el.classList.add('no-touch')

        /* Initialize variables */
        const content = el.querySelector('.swipable-modal__content')
        const data = binding.value || { direction: 'y', limit: 'top' }
        let canSwipe = false
        let startSwipe, stopSwipe
        startSwipe = stopSwipe = undefined

        /* Initialize swiping functions (defining deltas for close modal and reinitialize modal) */
        const closeModal = data.limit === 'top' ? (start, end) => start - end > 30 : (start, end) => end - start > 30
        const resetModal = (swiped) => swiped > 120

        /* Vertical scroll */
        if (data.direction === 'y') {
          /* While swiping */
          const swipe = (y) => {
            if (!canSwipe) return
            content.style.transform = `translateY(${y - startSwipe}px)`
            if (resetModal(y - startSwipe)) {
              content.classList.remove('no-transition')
              content.style.transform = 'translateY(0px)'
            }
          }

          /* On swipe start */
          const start = (e) => {
            e.stopPropagation()
            // e.preventDefault()
            canSwipe = true
            startSwipe = e.y || e.touches[0].clientY
            content.classList.add('no-transition')
            // content.addEventListener('mousemove', (event) => swipe(event.y))
            content.addEventListener('touchmove', (event) => swipe(event.touches[0].clientY))
          }

          /* On swipe end */
          const stop = (e) => {
            e.stopPropagation()
            // e.preventDefault()
            canSwipe = false
            stopSwipe = e.y || e.changedTouches[0].clientY
            if (closeModal(startSwipe, stopSwipe)) vnode.context.isOpen = false
            content.classList.remove('no-transition')
            content.style.transform = 'translateY(0)'
          }

          /* Reinitialize modal */
          const cancel = () => {
            canSwipe = false
            content.style.transform = 'translateY(0)'
          }

          /* Event listeners */
          content.addEventListener('touchstart', (e) => {
            start(e)
          })
          content.addEventListener('touchend', (e) => {
            stop(e)
          })
          content.addEventListener('touchcancel', cancel)

          /* Desktop listeners */

          // handler.addEventListener('mousedown', (e) => {
          //   start(e)
          // })
          // handler.addEventListener('mouseup', (e) => {
          //   stop(e)
          // })

          /* If swipe out of page */
          document.addEventListener('mouseleave', cancel)
        }
      },
      componentUpdated (el, bind, vnode) {
        if (vnode.context.isOpen) document.querySelector('html').style.overflow = 'hidden'
        if (!vnode.context.isOpen) document.querySelector('html').style.overflow = 'auto'
      }
    }
  }
}
