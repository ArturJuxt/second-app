import React from "react";
import "./CounterRedux.css";
 // import rootReducer from "./Reducer/RootReducer";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import CounterReduxForm from "./CounterReduxForm/CounterReduxForm";

const CounterRedux = () => {
   // const store = createStore(rootReducer);

  return (
    <div className="counter_redux">
        <CounterReduxForm />
    </div>
  );
};

export default CounterRedux;

// import React from "react";
// import "./CounterRedux.css";
// import ReactDOM from 'react-dom';
// import { creatStore } from 'redux';
// import { Provider, connect } from 'react-redux';

// const CounterRedux = ({ count, inc, dec }) => {
//   return (
//     <div className="counter_redux">
//       <h2>CounterRedux</h2>
//       <button className="class_btn" onClick={inc}>
//         -
//       </button>
//       <span className="class_span">{count}</span>
//       <button className="class_btn" onClick={dec}>
//         +
//       </button>
//     </div>
//   );
// };

// const INC = "INC";
// const DEC = "DEC";

// const inc = () => ({ type: INC });
// const dec = () => ({ type: DEC });

// const reducer = (state = { count: 0 }, action) => {
//   switch (action.type) {
//     case INC:
//       return { count: state.count + 1 };
//     case DEC:
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const store = creatStore(reducer);

// const mapStateToProps = (state) => ({ count: state.count });
// const mapDispatchToProps = (dispatch) => ({
//   inc: () => dispatch(inc()),
//   dec: () => dispatch(dec())
// })

// const NewCounterRedux = connect(mapStateToProps, mapDispatchToProps)(CounterRedux)

// <Provider store={store}>
//    <NewCounterRedux />
// </Provider>

// export default CounterRedux;
