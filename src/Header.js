
import './Header.css';

function Header() {
  return (
    <div className="Header" >
        <div className='flex-1 logo'>Logo</div>
        <div className="d-flex j-space-around flex-3 nav-item-ctn">
          <div className='active'>Home</div>
          <div>About</div>
          <div>Resources</div>
          <div>Contact Us</div>
        </div>
        
    </div>
  );
}

export default Header;