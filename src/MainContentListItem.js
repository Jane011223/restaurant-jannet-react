import './MainContentListItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { increment, decrement } from './counter/counterSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
 import AddIcon from '@mui/icons-material/Add';

function MainContentListItem(props) {
  const menu = useSelector((state) => state.counter.menu);
  const dispatch = useDispatch();
  let index2 = props.index2;
  let index1 = props.index1;
  let menucontent = menu[index1].menucontent[index2];
  let searchkey = props.searchkey;
  const cnt = menu[index1].menucontent[index2].count;
  return (
    <li className={menucontent.title.toLowerCase().includes(searchkey) ? "" : "hidden"}>
        <div className='list_item'>
            <div>
                <div className='list_item_text'>
                    <h4 className='font-bold'>{menucontent.title}</h4>
                    <h5 className='text-sm'>{menucontent.description}</h5>
                    <p className='font-bold'>{Number(menucontent.price).toFixed(2)}€</p>
                </div>
                <div className='list_item_addbutton'>
                    {cnt == 0 && (
                        <button type = "button" className='bg-t1 primary-2' onClick = {
                             ()=>dispatch(increment({id1: index1, id2:index2}))
                         }>
                            ADD
                        </button>)
                    }
                    {cnt > 0 && (
                        <div>
                             <button type='button' onClick = {
                                  ()=>dispatch(decrement({id1: index1, id2:index2}))
                              }>
                                 <RemoveIcon /> 
                             </button>
                             <p>{cnt}</p>
                            <button type='button' onClick = {
                                ()=>dispatch(increment({id1: index1, id2:index2}))
                                }>
                                 <AddIcon /> 
                            </button>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    </li>
  );
}

export default MainContentListItem;
