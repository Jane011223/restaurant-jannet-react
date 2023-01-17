import './Mainbody.css';
import MainContentListItems from './MainContentListItems';
import { useSelector } from 'react-redux';
function Mainbody(props) {
  const menu = useSelector((state) => state.counter.menu);
 
  const clickedindex = props.clickedindex;
  return (
    <div className="maincontent">
        <ul className='maincontent_lists'>
          {
            menu.map((item, index) => {
              return(
                <MainContentListItems key = {"second-key = "+ index}  index = {index} searchkey = {props.searchtext} clickedindex = {clickedindex}/>
              )
            }
            )
          }
            
        </ul>

        <div className = "maincontent_menu">
          <p>Prices include VAT (excluding additional shipping costs that may apply).</p>
          <p>If you have allergies or other dietary restrictions, please contact our team. We will provide food-specific information upon request.</p>
        </div>

    </div>
  );
}

export default Mainbody;
