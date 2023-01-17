import './Sidebar.css';
import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import Scrollspy from 'react-scrollspy';

function Sidebar(props) {
  const menu = useSelector((state) => state.counter.menu);
  const [input, setInput] = useState("");
  const [showflag, setShowflag] = useState(false);

  const handleChange = (e) => {
     setInput(e.target.value);
     props.childToParent(e.target.value);
  };

  const handleClick = (index) => {
    console.log("index",index);
    props.clickchildToParent(index);
  }

  const showInputBtn = (event) =>{
    event.stopPropagation();
      setShowflag(true);
  }

  const hideInputBtn = () =>{
    if(showflag == true)
      setShowflag(false);
  }

    window.addEventListener('click', hideInputBtn);

  return (
    <div className="slidebar_container">
        <ul className='slidebar_lists'>
            <li className='sidebar_lists_searchbar'>
                <div>
                    <div>
                         <SearchIcon></SearchIcon> 
                    </div>
                    <input placeholder='search here' value = {input} onChange = {handleChange}></input>
                </div>
            </li>
            <div><SearchIcon onClick = {showInputBtn}></SearchIcon></div>
            {
              showflag && (
               
                <input placeholder='Search here' value = {input} onChange = {handleChange}></input>
           
              )
            }
            <Scrollspy
              items = {[
                "menu0",
                "menu1",
                "menu2",
                "menu3",
                "menu4",
                "menu5",
                "menu6",
                "menu7",
                "menu8",
                "menu9",
                "menu10",
                "menu11",
                "menu12",
                "menu13"
              ]
              }
              offset = {-150}
              currentClassName="is-current"
              className='scrollspy'
              >
            {
                menu.map((item, index)=>{
                    return(
                         <div className='slidebar_list' key={"first-key="+index}>
                            <a class="list-group-item list-group-item-action" type = "button" href = {"#menu" + index} onClick={() => handleClick(index)}>
                                <p>{item.menutitle}</p>
                            </a>
                         </div>
                    )
                })
            }
            </Scrollspy>
        </ul>
    </div>
  );
}

export default Sidebar;
