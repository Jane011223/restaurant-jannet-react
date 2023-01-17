import './Bodymaincontent.css';
import React, { useState, useEffect } from "react";
import Sidebar from './Sidebar';
import Mainbody from './Mainbody';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store";
import {Provider} from "react-redux";


function Bodymaincontent() {
  const [searchtext, setSearchtext] = useState("");
  const [clickedindex, setClickedIndex] = useState(0);
  const handleChange = (chdata) => {
    setSearchtext(chdata);
  }
  
  const clickedChange = (chdata) => {
    setClickedIndex(chdata);
    console.log(clickedindex);
  }

  return (
    <Provider store = {store}>
      <div className="body_maincontent">
        <div className='row'>
          <div className='col-lg-3'>
             <Sidebar childToParent = {handleChange} clickchildToParent = {clickedChange}/>
          </div>
          <div className='col-lg-5'>
             <Mainbody searchtext = {searchtext} clickedindex = {clickedindex}/>
          </div>
          <div className='col-lg-4'>
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Bodymaincontent;
