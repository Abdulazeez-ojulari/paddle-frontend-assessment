import { Component } from "react";

class Navbar extends Component{
    
    render(){
        return(
            <div style={{backgroundColor: this.props.backgroundColor }} className="navbar">
                <a href="/" className="navbar-h3">
                    <img style={{color: this.props.logo }} className="logo" src="/images/hedgehog-logo.png" alt="paddle" />
                </a>
                <div className="navbar-links">
                    <a href="/about" style={{color: this.props.aboutColour }} className="navbar-link">About Us</a>
                    <a href="/blog" style={{color: this.props.blog }} className="navbar-link support">Blog</a>
                    <a href="#" style={{color: this.props.contactColor, backgroundColor: this.props.contactBackColor }} onClick={this.props.toggleContact} className="navbar-link-button support">Contact Us</a>
                </div>
            </div>
        )
    }
}

export default Navbar;