export const initialState = {
   product: []
};
  
const reducer = (state , action) => {
    console.log(action)
    switch(action.type){
      case 'ADD_PRODUCT':
        return{
          ...state, product:[...state.product , {...action.item}]
        };
      case 'REMOVE_PRODUCT':
        return{
          ...state, product:state.product.filter(e => e.code !== action.item.code)
        };
        default:
          return state
    };
  }

  export default reducer

