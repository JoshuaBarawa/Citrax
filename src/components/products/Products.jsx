import React from 'react';
import path5 from '.././commons/images/Path5.png';
import './products.css';

const Products = () => {
    return ( 

   <div className='products-page'>
     
   <div className='product-left'>
    <p id="product-intro">We Facilitate what ever you think it's hard</p>
    <div className="cards">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>

   </div>


   <div className='product-right'>
      <div id="paragraph">
      <h2 className='product-title'><img className="list-icon" src={path5} alt=''/> Product one</h2>
      <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      <div id="paragraph">
      <h2 className='product-title'><img className="list-icon" src={path5} alt=''/> Product Two</h2>
      <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      <div id="paragraph">
      <h2 className='product-title'><img className="list-icon" src={path5} alt=''/> Product Three</h2>
      <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
         Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
         Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
      </div>

      </div>


   </div>
     );
}
 
export default Products;