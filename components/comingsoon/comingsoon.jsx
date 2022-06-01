import { Component } from "react";
import Footer from "../global/footer/footer";
import Navbar from "../global/navbar/navbar";
import styles from './comingSoon.module.css';

class ComingSoon extends Component{
    
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.col_1}>
                    <Navbar></Navbar>
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
                    <Footer></Footer>
                </div>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div>
            </div>
        )
    }
}

export default ComingSoon;