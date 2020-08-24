export const setValue = state => (prevState, action) => ({
  ...prevState,
  [state]: action.payload,
});
