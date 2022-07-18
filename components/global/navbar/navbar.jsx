import Image from "next/image";
import Link from "next/link";
import { Component } from "react";

class Navbar extends Component{
    
    render(){
        return(
            <div style={{backgroundColor: this.props.backgroundColor }} className="navbar">
                <Link href="/">
                    <a className="navbar-h3">
                        <Image width={64} height={64} style={{color: this.props.logo }} className="logo" src="/favicon.ico" alt="paddle"></Image>
                        {/* <img  /> */}
                    </a>
                </Link>
                <div className="navbar-links">
                    <Link href="/about">
                        <a  style={{color: this.props.aboutColour }} className="navbar-link">About Us</a>
                    </Link>
                    <Link href="/blog">
                        <a  style={{color: this.props.blog }} className="navbar-link support">Blog</a>
                    </Link>
                    <Link href="#">
                        <a  style={{color: this.props.contactColor, backgroundColor: this.props.contactBackColor }} onClick={this.props.toggleContact} className="navbar-link-button support">Contact Us</a>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default Navbar;