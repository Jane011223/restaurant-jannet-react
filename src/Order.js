import './Order.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Order() {
  const menus = useSelector((state) => state.counter.menu);

  return (
  <>
         

</>
  );
}

export default Order;
