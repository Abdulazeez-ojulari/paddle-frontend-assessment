import { Component } from "react";
import Contact from "../contact/contact";
import Footer from "../global/footer/footer";
import Navbar from "../global/navbar/navbar";
import styles from './comingSoon.module.css';

class ComingSoon extends Component{
    constructor(props) {
        super(props);
        this.state = {
          contact: false,
        };
    }

    toggleContact = () => {
        this.setState({
            contact: !this.state.contact
        })
    }
    
    render(){

        const { contact } = this.state

        return(
            <div className={styles.container}>
                <div style={contact ? {filter: 'blur(3px)', color:"red"} : {}} className={styles.col_1}>
                    <Navbar logo="white" aboutColour="white" blog="white" contactColor="white" contactBackColor="#271ac1" toggleContact={this.toggleContact}></Navbar>
                    <div className={styles.comingsoon_container}>
                        <h3 className={styles.comingsoon_container_h3}>
                            Something awesome is coming soon
                        </h3>
                        <p className={styles.comingsoon_container_p}>
                            Your all-in-one affiliate marketing tracking software
                            track, automate and optimize your campaigns.
                        </p>
                        <div className={styles.comingsoon_time_container}>
                            <div className={styles.comingsoon_time_col}>
                                <h3>7</h3>
                                <p>Days</p>
                            </div>
                            <div className={styles.comingsoon_time_col}>
                                <h3>24</h3>
                                <p>Hours</p>
                            </div>
                            <div className={styles.comingsoon_time_col}>
                                <h3>54</h3>
                                <p>Minutes</p>
                            </div>
                            <div className={styles.comingsoon_time_col}>
                                <h3>11</h3>
                                <p>seconds</p>
                            </div>
                        </div>
                        <div className={styles.comingsoon_form_col_2}>
                            <div className={styles.comingsoon_form_group}>
                                <input name="firstname" placeholder="First Name..." type="text" className={styles.comingsoon_form_input} />
                            </div>
                            <div className={styles.comingsoon_form_group}>
                                <input name="lastname" placeholder="Last Name..." type="text" className={styles.comingsoon_form_input} />
                            </div>
                        </div>
                        <div className={styles.comingsoon_form_col_1}>
                            <div className={styles.email_box} >
                                <input
                                type="text"
                                name="email"
                                className={styles.email_input}
                                placeholder="Enter your email address..."
                                />
                                <button className={styles.submit}>
                                    Join Our Waiting List
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer active='white'></Footer>
                    <div className={styles.circle4}></div>
                </div>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                {contact &&
                <Contact toggleContact={this.toggleContact}></Contact>}
            </div>
        )
    }
}

export default ComingSoon;