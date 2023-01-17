import './App.css';
import Header from './Header';
import Bodypicture from './Bodypicture';
import Bodymaincontent from './Bodymaincontent';
import ScrollButton from './ScrollButton';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <div className='app_header'>
        <Header />
      </div>
      
      <div className='app_body'>
            <Bodypicture />

            <Bodymaincontent />

            <ScrollButton />
      </div>

      <div className='app_footer'>
          <Footer />
      </div>
    </div>
  );
}

export default App;
