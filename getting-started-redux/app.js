var counter = function (state, action) {
  switch (action.type) {
    case 'INCREMEMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;

  }
}
