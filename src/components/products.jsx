import React from 'react';
import path5 from './commons/images/Path 5.png';
import { StyledFlex } from './styles/Flex';
import StyledProduct from './styles/StyledProduct';
const products = () => {
    return ( 

      <StyledProduct>
      <StyledFlex>

      <div>
    <p id="p1">We Facilitate what ever you think it's hard</p>

    <div className="cards">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        
    </div>
      </div>


      <div>
      <div id="paragraph">
      <h2><img src={path5} alt='' /> Product one</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      <div id="paragraph">
      <h2><img src={path5} alt='' /> Product Two</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      <div id="paragraph">
      <h2><img src={path5} alt='' /> Product Three</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      </div>

      </StyledFlex>
      </StyledProduct>
     );
}
 
export default products;