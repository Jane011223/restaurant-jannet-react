import './Header.css';

function Header() {
  return (
    <div className="app_header_container">
       <div className='app_header_left'>
           <img alt="fleksa logo" src="https://www.restaurant-jannat.de/_next/image?url=https%3A%2F%2Fd1nfw7b4288zmf.cloudfront.net%2Fshop%2Fimg%2Flogo%2Fjannat%2Faf99eec52656a7a8.png&w=64&q=75" />
       </div>   

       <div className='app_header_right'>
            <ul className='app_header_right_list'>
                <li><h2>HOME</h2></li>
                <li><h2>MENU</h2></li>
                <li><h2>RESERVATION</h2></li>
                <li><h2>GALLERY</h2></li>
                <li><h2>CONTACT</h2></li>
                <li><h2>SIGN IN</h2></li>
                <img alt="language switch icon" src="https://www.restaurant-jannat.de/assets/svg/flag-german.svg" />
            </ul>
       </div>
    </div>
  );
}

export default Header;
