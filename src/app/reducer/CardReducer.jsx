
const CardReducer = (state , action ) => {
  switch (action.type) {
    case 'ADDTOCARD':
      return [...state, action.payload];
      case 'INCREACE':
        {
           const indexI=state.findIndux(product=> product.id==id)
           state[indexI].quantity+=1;
           return [...state];
        }
        case 'DECREACE':
          {
            const indexD=state.findIndux(product=> product.id==id)
           state[indexD].quantity-=1;
           return [...state];
          }
    default:
      return state;
  }
};

export default CardReducer;
