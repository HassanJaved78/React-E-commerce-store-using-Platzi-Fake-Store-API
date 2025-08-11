// Selectors are functions that access specific parts of the Redux state. They help you:
// 1- Keep your component code clean
// 2- Avoid logic duplication
// 3- Improve performance (memoization possible)

// src/features/cart/cartSelectors.js

// HERE state OBJECT IS PASSED FROM THE USESELECTOR HOOK

// Get all items in the cart
export const selectCartItems = (state) => state.cart

// Get total number of items (sum of quantities)
export const selectCartTotalQuantity = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0)

// Get total price of items in cart
export const selectCartTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + item.quantity * item.price, 0)


// -- to use them 

// import { useSelector } from 'react-redux'
// import { selectCartTotalPrice } from '../features/cart/cartSelectors'
// const total = useSelector(selectCartTotalPrice)


// -- useSelector() is a hook that:
// 1- Subscribes your component to the Redux store.
// 2- Passes the current state to your selector function (selectCartTotalPrice(state)).
// 3- Re-renders your component only if the selected data changes.