import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoApp from "./componets/TodoApp/TodoApp";
import Navbar from "./componets/Navbar/Navbar";
import Header from "./componets/Header/Header";
import Futer from './componets/Futer/Futer';
import Lesson2 from './componets/Lesson2/Lesson2';
import Lesson3 from './componets/Lesson3/Lesson3';
import Lesson4 from './componets/Lesson4/Lesson4';
import Lesson5 from './componets/Lesson5/Lesson5';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/TodoApp" render={() => <TodoApp />} />
            <Route path="/Lesson2" render={() => <Lesson2 />} />
            <Route path="/Lesson3" render={() => <Lesson3 />} />
            <Route path="/Lesson4" render={() => <Lesson4 />} />
            <Route path="/Lesson5" render={() => <Lesson5 />} />
          </Switch>
        </div>
        <Futer />
      </div>
    </BrowserRouter>
  );
};

export default App;
