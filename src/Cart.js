import './Cart.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Offcanvas } from 'bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';

function Cart() {
  const menus = useSelector((state) => state.counter.menu);
  let sum =0;
  let all_cnt = 0;

  return (
  <>
    <div className="cart">
        <h3>Your cart</h3>
        <div>
            <ul>
              {
                menus.map((menu, index1) => {
                  return menu.menucontent.map((item, index2) => {
                    const cnt = item.count;
                    sum += cnt * item.price;
                    all_cnt += cnt;
                    return(
                      cnt> 0 && (
                        <CartItem index1 = {index1} index2 = {index2}/>
                      )
                    );
                  });
                }
              )}
              
            </ul>
        </div>

        {
          sum > 0 && (
            <div className='cart_total'>
              <div className='cart_total_value'>
                <p className='font-bold'>Total</p>
                <p className='font-bold'>{Number(sum).toFixed(2)} €</p>
              </div>
              <div className='cart_total_button'>
                  <button type = "button">Checkout</button>
              </div>
            </div>
          )
        }

        {
          sum == 0 && (
            <div className='cart_empty'>
              <div className = 'cart_picture'>
                <img src = "https://restaurant-jannat.de/assets/svg/cart-empty.svg"></img>
              </div>
              <p>Please select at least one product to place an order</p>
            </div>
          )
        }
        
        <div className='cart_paytools'>
            
        </div>

    </div>

      {
        all_cnt > 0 && (
          <div className='maincontent_orderbtn' data-bs-toggle = "offcanvas" data-bs-target="#demo">
            <div className = 'orderbtn_icons'>
              <ShoppingBagIcon />
              <p>{Number(all_cnt)}</p>
            </div>
    
            <div className='orderbtn_text'>
              <p>View order</p>
              <span>{Number(sum).toFixed(2)} €</span>
            </div>
  
          </div>
        )
      }
      
      <div className="offcanvas offcanvas-bottom" id = "demo">
        <div className='demo_header'>
         <h3>Your Order</h3>
         <div data-bs-dismiss="offcanvas"><ClearIcon /></div>
        </div>
       
        <div  className='demo_body'>
          <div>
              <ul>
                {
                  menus.map((menu, index1) => {
                    return menu.menucontent.map((item, index2) => {
                      const cnt = item.count;
                      return(
                        cnt> 0 && (
                          <CartItem index1 = {index1} index2 = {index2}/>
                        )
                      );
                    });
                  }
                )}
                
              </ul>
          </div>
        </div>

        <div className='maincontent_orderbtn'>
            <div className = 'orderbtn_icons'>
              <ShoppingBagIcon />
              <p>{Number(all_cnt)}</p>
            </div>
    
            <div className='orderbtn_text'>
              <p>Go to checkout</p>
              <span>{Number(sum).toFixed(2)} €</span>
            </div>
  
        </div>

    </div> 

</>
  );
}

export default Cart;
