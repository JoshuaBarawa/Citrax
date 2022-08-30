import React from 'react';
import dashboard from '.././commons/images/dashboard.png';
import './products.css';

const Products = () => {
   return (

      <div className='products-page'>


         <div className="product-item">
            <div>
               <h2 className='product-title'>Product one</h2>
               <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
                  Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
                  Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
            </div>
            <img className="product-logo" src={dashboard} alt='' />
         </div>



         <div className="product-item">
            <img className="product-logo" src={dashboard} alt='' />
            <div>
               <h2 className='product-title'>Product Two</h2>
               <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
                  Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
                  Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
            </div>
         </div>


         <div className="product-item">
            <div>
               <h2 className='product-title'>Product Three</h2>
               <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis elit non fermentum egestas.
                  Quisque ut mauris nec risus imperdiet porttitor id eu leo. Nunc porta orci a condimentum sollicitudin.
                  Pellentesque tincidunt porttitor erat, in posuere arcu tincidunt eu.</p>
            </div>
            <img className="product-logo" src={dashboard} alt='' />
         </div>

      </div>
   );
}

export default Products;