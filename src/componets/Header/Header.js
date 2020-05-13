import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0HUkJ1cduHyRDD5Mjt7o1G9PFNNBsPTLDAB0j-adDAmYJ0aWT&usqp=CAU"/>
      <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu3K395oe6lCgbb9Pi41GNK6EJBkT6G2nNbq90wEQIgMvACprA&usqp=CAU"/>
      <img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj9UM8JS1bVgO-I_aKx8o1oLLBDD4fU7Yi3j4TO1LCFBrZ6fCZ&usqp=CAU"/>
      <div className="in">
        <h3>Person</h3>
        <input name="login" placeholder="login" type="text"/>
        <input name="pass" placeholder="password" type="password" />
      </div>
      
    </div>
  );
};

export default Header;
