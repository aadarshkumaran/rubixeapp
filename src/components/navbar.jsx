import '../styles/navbar.css'

const Navbar = () => {
    return ( 
    <div className="nav-bar">
        <div className="logo">
            <h3>Logo</h3>
        </div>
        <div className="menu">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">PRODUCTS</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CAREER</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>
        </div>
    </div> 
    );
}

export default Navbar;