import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';
import { increment, decrement} from './counter/counterSlice';

 import RemoveIcon from '@mui/icons-material/Remove';
 import AddIcon from '@mui/icons-material/Add';

function CartItem(props) {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.counter.menu);
  let index1 = props.index1;
  let index2 = props.index2;

  let dish = menus[index1].menucontent[index2];

  return (
    <li className="cart_item">
        <div className = "cart_item_text">
            <p>
                {dish.title}
            </p>
        </div>
        <div className = "cart_item_btns">
            <button type='button' onClick = {
              ()=>dispatch(decrement({id1: index1, id2:index2}))
            }>
               <RemoveIcon /> 
            </button>
            <p>{dish.count}</p>
            <button type='button' onClick = {
              ()=>dispatch(increment({id1: index1, id2:index2}))
            }>
               <AddIcon /> 
            </button>
        </div>
        <p>{Number(dish.price * dish.count).toFixed(2)}€</p>
    </li>
  );
}

export default CartItem;
