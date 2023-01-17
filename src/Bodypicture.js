import './Bodypicture.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bodypicture() {
  return (
    <div className="body_picture">
        <img src = "https://www.restaurant-jannat.de/_next/image?url=https%3A%2F%2Fd1nfw7b4288zmf.cloudfront.net%2Fv1-buck%2Fimg%2Frestaurant_backgrounds%2Feeb40cb438eb2d4bd7b218.jpg&w=1920&q=75"/>
       
        <div className='body_picture_background'>
              <div className='body_picture_background_title'>
                <div className = "container p-3 mx-auto">
                  <h1 className = "font-semibold">
                    Restaurant Jannat
                  </h1>
                  <p className = "pb-4">
                    Indian restaurant in Puchheim
                  </p>
                  <div className='body_picture_background_title_button_group'>
                      <button>
                          <span className="icon-pickup-filled text-black"></span>
                          <p>PICKUP</p>
                      </button>
                      <button>
                          <span className="icon-pickup-filled text-black"></span>
                          <p>In about 30 minutes</p>
                      </button>
                  </div>
                  <div className='body_picture_background_title_button_group'>
                      <button>
                          <span className="icon-pickup-filled text-black"></span>
                          <p>ORDER TOGETHER</p>
                      </button>
                  </div>
                </div>
              </div>
        </div>
    </div>
  );
}

export default Bodypicture;
