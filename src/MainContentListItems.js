import './MainContentListItems.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContentListItem from './MainContentListItem';
import { useSelector } from 'react-redux';

function MainContentListItems(props) {
  const menu = useSelector((state) => state.counter.menu);
  let index1 = props.index;
  let clickedindex = props.clickedindex;
  let dish = menu[index1];
  let menucontent = dish.menucontent;
  
  let searchkey = props.searchkey;
  let flag = false;
  menucontent.map((item, index) => {
    if(item.title.toLowerCase().includes(searchkey))
      flag = true;
  })
  return (
    <li id = {"menu" + index1} className = {index1 === clickedindex ? "clicked-menu" : "dish-list"}>
        <div className = {flag ? "list_item_header" : "hidden"}>
            <h2>
                {dish.menutitle}
            </h2>
            <p></p>
        </div>
        <ul className='list_item_list'>
          {
            menucontent.map((item, index) => {
              return(
                <MainContentListItem
                  key = {"Third_key = "+ index} index1 = {index1} index2 = {index} searchkey = {searchkey}/>
              )
            }
            )
          }
        </ul>
        
    </li>
  );
}

export default MainContentListItems;
