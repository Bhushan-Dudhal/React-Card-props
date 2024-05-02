import React from 'react';

import './App.css';
import Product from './Product';


class App extends React.Component{
    render() {
      return (
          
      
        
          <div className="container mt-3">
          <div className="row">
            

              <div className="col-md-4">
                <Product
                  img="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
                  name="Apple iPhone 14 Plus (128 GB) - Blue"
                  position="₹70,50000 M.R.P.:₹79,900.00 (12% off)Get it by Monday, 6 May. "
                  // infor="This is prasad information "
                
                
                />
            </div>
            
             <div className="col-md-4">
                <Product
                  img="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
                  name="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm"
                  position="-27% ₹72,990 M.R.P.: ₹99,900.00M.R.P.: ₹99,900"
                  // infor="This is dnyaneshwar information "
                
                
                />
            </div>
            

             <div className="col-md-4">
                <Product
                  img="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
                  name="Apple iPad Pro 11″ (4th Generation):with M2 chip, "
                  position="-6% ₹76,900 .R.P.: ₹81,900.00M.R.P.: ₹81,900"
                  // infor="This is prasad information "
                
                
                />
              </div>
             
              
            

              
            </div>
        </div>
        
        
         
        
            


            
        )
    }
}

export default App;
