import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Define a reducer for the clock
function clockReducer(state = { time: new Date() }, action) {
  switch (action.type) {
    case "UPDATE_TIME":
      return { time: new Date() };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(clockReducer);

// Define a React component that displays the current time
class Clock extends React.Component {
  // Dispatch the "UPDATE_TIME" action every second
  componentDidMount() {
    setInterval(() => {
      store.dispatch({ type: "UPDATE_TIME" });
    }, 1000);
  }

  render() {
    return (
      <p>
        <style>
          {`
            .clock {
              font-family: sans-serif;
              font-size: 48px;
              font-weight: bold;
              text-align: center;
              border: 1px solid black;
              margin-bottom: 20px;
              margin-left: 80px;
              margin-right: 80px;
              margin-top: 70px;
            }
          `}
        </style>
        <div className="clock">{this.props.time.toLocaleTimeString()}</div>
      </p>
    );
  }
}

// Map the Redux state to the Clock component's props
const mapStateToProps = state => ({
  time: state.time
});

// Connect the Clock component to the Redux store
const ConnectedClock = connect(mapStateToProps)(Clock);

// Define the root component of the app
function App() {
  return (
    <Provider store={store}>
      <ConnectedClock />
    </Provider>
  );
}

export default App;

