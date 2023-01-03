import './App.css';
import cs_logo from './cs_logo.png'
import WebRoutes from './routes/WebRoutes';
import WebLinks from './routes/WebLinks';
import { BrowserRouter, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='header'>
        <img src={cs_logo} alt="CyberSquare logo" width="300" />
        {/* Navbar */}
        <WebLinks/>
      </div>
      <div className="auth-wrapper">
          <div className="auth-inner">
      <WebRoutes/>
      </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
