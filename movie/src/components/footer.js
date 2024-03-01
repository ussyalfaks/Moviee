import Facebook from '../asset/images/facebook.svg';
import Instagram from '../asset/images/instagram.svg';
import Twitter from '../asset/images/twitter.svg';
import Youtube from '../asset/images/youtube.svg';
import './footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="media-icon">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="twitter" />
        <img src={Youtube} alt="youtube" />
      </div>

      <div className="policy">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      
      <div className="copyright">
        <p> © 2023 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;