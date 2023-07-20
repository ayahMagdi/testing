export const initialState = {
   product: [],
   editedArray: []
};
  
const reducer = (state , action) => {
  console.log(state)
    switch(action.type){
      case 'ADD_PRODUCT':
        return{
          ...state, product:[...state.product , {...action.item}]
        };
      case 'REMOVE_PRODUCT':
        return{
          ...state, product:state.product.filter(e => e.code !== action.item.code)
        };
      case 'EDIT_PRODUCT':
        return{
          ...state,product:state.product.map((e , i) => i !== action.item ? 
             [...state.product , {...action.item}] : initialState.editedArray
           )
        };
        default:
          return state
    };
  }

  export default reducer

