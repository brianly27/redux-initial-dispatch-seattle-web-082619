let state;

function changeState(state, action = { type: "@@INIT" }) {
  switch (action.type) {
    case "@@INIT":
      return { count: 0 };
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render() {
  document.body.textContent = state.count;
}

action = { type: "@@INIT" };

dispatch();
