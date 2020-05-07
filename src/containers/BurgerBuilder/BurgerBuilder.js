import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../componets/Burger/Burger';

const BurgerBuilder = () => {
    return (
        <Aux>
          <Burger />
          <div>Build Controls</div>
        </Aux>
    );
}

export default BurgerBuilder;
