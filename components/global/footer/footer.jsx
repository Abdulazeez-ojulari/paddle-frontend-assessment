import { Component } from "react";
// import './footer.css';

class Footer extends Component{

    render(){
        return(
            <div className="footer">
                <div className="footer-social-links">
                    <a style={{color: this.props.active }} href="#">
                        <span className="iconify footer-social-link" data-icon="entypo-social:youtube"></span>
                    </a>
                    <a href="#">
                        <span className="iconify footer-social-link" data-icon="entypo-social:facebook"></span>
                    </a>
                    <a href="#">
                        <span className="iconify footer-social-link"  data-icon="brandico:linkedin-rect"></span>
                    </a>
                    <a href="#">
                        <span className="iconify footer-social-link" data-icon="brandico:instagram-filled"></span>
                    </a>
                    <a href="#">
                        <span className="iconify footer-social-link" data-icon="fa-brands:twitter-square"></span>
                    </a>
                </div>
                <div className="footer-social-links">
                    <p className="footer-p">Terms of service</p>
                    <p className="footer-p">Privacy policy</p>
                </div>
                <p className="footer-p">Copyright 2022 @ Paddle Technoligies. All Rights Reserved.</p>
            </div>
        )
    }
}

export default Footer;