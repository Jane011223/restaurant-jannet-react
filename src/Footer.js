import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className = "footer_email">
            <div>
                <p>Lagerstraße 23</p>
                <p>82178 Puchheim</p>
                <p>jannatlagerstr@gmail.com</p>
                <p>+49 8961203673</p>
            </div>
        </div>
        <div className = "footer_content">
            <div>
                <div>Online Ordering System</div>
                <p>Powered By</p>
                <img alt="fleksa logo" src="https://restaurant-jannat.de/assets/svg/fleksa-logo.svg" decoding="async" data-nimg="intrinsic"  srcset="https://restaurant-jannat.de/assets/svg/fleksa-logo.svg 1x, https://restaurant-jannat.de/assets/svg/fleksa-logo.svg 2x" />
            </div>
        </div>
        <div className = "footer_icons">
            <div className='footer_icons_group'>
                <div><img src = "https://restaurant-jannat.de/assets/svg/social/twitter.svg"></img></div>
                <div><img src = "https://restaurant-jannat.de/assets/svg/social/facebook.svg"></img></div>
                <div><img src = "https://restaurant-jannat.de/assets/svg/social/instagram.svg"></img></div>
                <div><img src = "https://restaurant-jannat.de/assets/svg/app/google-playstore.svg"></img></div>
                <div><img src = "https://restaurant-jannat.de/assets/svg/app/apple-appstore.svg"></img></div>
                <div><img src = "https://restaurant-jannat.de/assets/svg/app/eatarian.svg"></img></div>
            </div>
            <p>©️2022 Fleksa | Terms & Conditions | Privacy Policy | Imprint</p>
        </div>
    </div>
  );
}

export default Footer;
