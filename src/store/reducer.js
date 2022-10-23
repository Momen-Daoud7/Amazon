export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = state.basket;

      const index = newBasket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // remove the item
        newBasket.splice(index, 1);
      } else {
        console.warn("No product found with this id");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
