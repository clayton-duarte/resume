
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'changeTheme':
      return ({...state, theme: { ...state.theme, ...payload } });
    default:
      return state;
  }
};
  
export default reducer;
