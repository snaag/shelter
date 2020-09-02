export const getParams = state => {
  const conditions = state.filter.conditions;
  let params = "";
  for (let field in conditions) {
    for (let value of conditions[field]) {
      params += `${field}=${value}&`;
    }
  }
  return params;
};
