// Header Component
import TypeaheadSearch from "../TypeaheadSearch";
import "./index.css"


const Header = () => {
    return (
      <header>
        <a href="#" className="home-link"><h1>LOGO</h1></a>
        <nav className="header-nav">
          <ul className="nav-items-container">
            <li className="nav-items"><a href="#">HOME</a></li>
            <li className="nav-items"><a href="#">PRODUCTS</a></li>
            <li className="nav-items"><a href="#">ABOUT US</a></li>
            <li className="nav-items"><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
  
        <nav className="header-nav-icons">
          <ul className="nav-items-container-icons">
            <li>
              {/* <form action="#" className="header-input">
                <input type="search" id="search-input" placeholder="Search..." />
                <ul className="search-container" id="search-container">
                  <li className="search-item">Electronics</li>
                  <li className="search-item">Clothing</li>
                  <li className="search-item">Home Appliances</li>
                </ul>
                
              </form> */}
              <TypeaheadSearch/>
            </li>
            <li><a href="#"><ion-icon name="cart-outline" class="nav-item-icon"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="menu-outline" class="nav-item-icon"></ion-icon></a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default Header