import { Component } from "react";

class Navbar extends Component{
    
    render(){
        return(
            <div className="navbar">
                <a href="/" className="navbar-h3">
                    <img className="logo" src="/images/hedgehog-logo.png" alt="paddle" />
                </a>
                <div className="navbar-links">
                    <a href="/about" className="navbar-link">About Us</a>
                    <a href="/blog" className="navbar-link support">Blog</a>
                    <a href="#" onClick={this.props.toggleContact} className="navbar-link-button support">Contact Us</a>
                </div>
            </div>
        )
    }
}

export default Navbar;