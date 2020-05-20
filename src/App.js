import React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoApp from "./componets/TodoApp/TodoApp";
import Navbar from "./componets/Navbar/Navbar";
import Header from "./componets/Header/Header";
import Futer from './componets/Futer/Futer';
import Form from './componets/Form/Form';
import Counter from './componets/Counter/Counter';
import Lesson4 from './componets/Lesson4/Lesson4';
import Lesson5 from './componets/Lesson5/Lesson5';
import reducer from './componets/Counter/CounterRedux/Reducer/RootReducer'

const  store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <div className="content">
            <Switch>
              <Route path="/TodoApp" render={() => <TodoApp />} />
              <Route path="/Form" render={() => <Form />} />
              <Route path="/Counter" render={() => <Counter />} />
              <Route path="/Lesson4" render={() => <Lesson4 />} />
              <Route path="/Lesson5" render={() => <Lesson5 />} />
            </Switch>
          </div>
          <Futer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
