import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const counterState = useSelector((state) => state.value);
  const toggleState = useSelector((state) => state.showCounter);

  const dispatchAction = useDispatch();

  const increase = () => {
    const action = {
      type: "increase",
    };
    dispatchAction(action);
  };
  const decrease = () => {
    const action = {
      type: "decrease",
    };
    dispatchAction(action);
  };

  const payload = () => {
    const action = {
      type: "payload",
      payload: 2,
    };
    dispatchAction(action);
  };
  const toggleCounter = () => {
    dispatchAction({
      type: "toggleCounter",
    });
  };
  return (
    <div className="App">
      <h1>Hello Redux basics</h1>
      <br />
      {toggleState ? (
        <div className="counter">counter :{counterState}</div>
      ) : (
        "Counter Not True"
      )}
      <br />
      <div>
        <button className="btn" onClick={increase}>
          increase
        </button>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button className="btn" onClick={payload}>
          payload
        </button>
      </div>
      <hr />
      <br />
      <div>
        <button className="btn" onClick={toggleCounter}>
          Hide / Show Counter Number
        </button>
      </div>
    </div>
  );
};

export default App;
