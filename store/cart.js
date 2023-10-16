
// State Section

var cartItems = localStorage.getItem("cart_storage")
export const state = () => ({
  cartItems: cartItems ? JSON.parse(cartItems) : [],
  unreadMessageCount: 0,
})

// Getters Section

export const getters = {
  getCartItems(state) {
    return state.cartItems
  },
  getTotal: state => {
    return state.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
  },

  unreadMessageCount: state => {
    return state.unreadMessageCount
  },
}

// Mutations Section

export const mutations = {
  addToCart(state, item) {
    state.cartItems.push(item)
  },
  updateExistingItem(state, { index, quantity }) {
    const existingItem = state.cartItems[index]
    console.log(existingItem)
    if (existingItem) {
      existingItem.quantity = Number(existingItem.quantity) + Number(quantity)
    }

    else {
      state.cartItem.push(existingItem)
    }

  },
  removeFromCart(state, item) {
    const index = state.cartItems.indexOf(item)
    if (index > -1) {
      state.cartItems.splice(index, 1)
    }
    localStorage.setItem("cart_storage", JSON.stringify(state.cartItems))
  },

  clearCart(state) {
    state.cartItems = [];
    localStorage.removeItem('cart_storage');
  },

  setUnreadMessageCount(state, count) {
    state.unreadMessageCount = count;
  },
}

// Actions Section

export const actions = {
  addToCart({ state, commit }, item) {
    let index = state.cartItems.findIndex(product => product.id == item.id);
    if (index > -1) {
      commit('updateExistingItem', {
        quantity: item.quantity,
        index
      })
    }
    else {
      commit('addToCart', item)
    }
    localStorage.setItem("cart_storage", JSON.stringify(state.cartItems))
  },

  removeFromCart({ commit }, item) {
    commit('removeFromCart', item)
  },

  updateUnreadMessageCount({ commit }, count) {
    commit('setUnreadMessageCount', count);
  },
}
