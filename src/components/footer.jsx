import '../styles/footer.css'

const Footer = () => {
    return ( 
    <div className="footer">
        <div className="footer-links">
            <div className="about-us"><h4>ABOUT US</h4>
            <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </div>
            <div className="menus">
                <h4>MENUS</h4>
                <div className="menu-list">
                <ul>
                    <li><a href="#">Menus</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
                </div>
            </div>
            <div className="learn-more">
                <h4>LEARN MORE</h4>
                <div className="more-list">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                </div>
            </div>
            <div className="address">
                <div className="location"><h4>ADDRESS</h4>
                <p>
                Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
                </p>
                <p>
                <b>Phone:</b> 0804-717-8999
                </p>
                <p>
                <b>Email:</b> hi@rubixe.com
                </p>
                </div>
                <div className="social-media">
                    <h4>SOCIAL MEDIA</h4>
                    <div className="social-icons">
                    <div className="facebook"><a href="#"><img src="https://aadarshkumaran.github.io/rubixeapp/images/icons8-facebook.svg" alt="" /></a></div>
                    <div className="linkedin"><a href=""><img src="https://aadarshkumaran.github.io/rubixeapp/images/icons8-linkedin-circled.svg" alt="" /></a></div>
                    </div>
                </div> 
            </div>
        </div>
        <div className="company">
        © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved
        </div>
    </div> 
    );
}

export default Footer;