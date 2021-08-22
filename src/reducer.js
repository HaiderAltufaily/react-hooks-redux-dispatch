function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };
let action = { type: "counter/increment" };

function dispatch(action) {
  state = changeState(state, action);
  render();
  return state;
}

function render() {
  document.body.textContent = state.count;
}

dispatch(action);
dispatch(action);
dispatch(action);
