export { default as Thefooter } from '../../components/Thefooter.vue'
export { default as AdminNav } from '../../components/adminNav.vue'
export { default as CheckoutItem } from '../../components/checkoutItem.vue'
export { default as Headerbtn } from '../../components/headerbtn.vue'
export { default as LabTest } from '../../components/labTest.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as Testimonials } from '../../components/testimonials.vue'
export { default as TheProduct } from '../../components/theProduct.vue'
export { default as TopHeader } from '../../components/top-header.vue'
export { default as TopSvg } from '../../components/top-svg.vue'
export { default as User } from '../../components/user.vue'
export { default as Users } from '../../components/users.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
