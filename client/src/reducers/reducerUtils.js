export const setState = (prevState, action) => ({
  ...prevState,
  ...action.payload,
});
