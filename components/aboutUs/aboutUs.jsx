import { Component } from "react";
import Footer from "../global/footer/footer";
import Navbar from "../global/navbar/navbar";
import styles from './aboutUs.module.css';

class AboutUs extends Component{
    
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.col_1}>
                    <Navbar></Navbar>
                    <div className={styles.about_container}>
                        <div className={styles.about_container_section_1}>
                            <div className={styles.about_container_section_1_col_1}>
                                <div className={styles.about_container_section_1_col_1_box}></div>
                                <div className={styles.about_container_section_1_col_1_text}>
                                    <p className={styles.about_container_section_1_col_1_text_p}>
                                        <span></span>
                                        About Us
                                    </p>
                                    <h3 className={styles.about_container_section_1_col_1_text_h3}>
                                        Built for SaaS  and E-commerce
                                    </h3>
                                </div>
                            </div>
                            <div className={styles.about_container_section_1_col_2}>
                                <p>
                                    Our tools are easy to set up  and  with a user friendly
                                    dashboard that enables you to set up, launch, automate and
                                    manage multi-affiliate campaigns in 5 minutes.
                                </p>
                            </div>
                        </div>
                        <div className={styles.about_container_section_2}>
                            <h3 className={styles.about_container_h3}>
                                Metricks was developed because just like you,
                                we needed a product that could give us good value.
                            </h3>
                        </div>
                        <div className={styles.about_container_section_3}>
                            <div className={styles.about_container_section_3_col_2}>
                                <p className={styles.about_container_section_3_col_1_text_p}>
                                    <span></span>
                                    Why Us
                                </p>
                                <p>
                                    Our tools are easy to set up  and  with a user friendly
                                    dashboard that enables you to set up, launch, automate and
                                    manage multi-affiliate campaigns in 5 minutes.
                                </p>
                            </div>
                            <div className={styles.about_container_section_3_col_1}>
                                <div className={styles.about_container_section_3_col_1_box}></div>
                                <div className={styles.about_container_section_3_col_1_text}>
                                    <p className={styles.about_container_section_3_col_1_text_p}>
                                        <span></span>
                                        Growing With You
                                    </p>
                                    <div className={styles.about_container_section_3_col_1_p}>
                                        <p>
                                            Our tools are easy to set up  and  with a user friendly
                                            dashboard that enables you to set up, launch, automate and
                                            manage multi-affiliate campaigns in 5 minutes.
                                        </p>
                                        <p>
                                            Our tools are easy to set up  and  with a user friendly
                                            dashboard that enables you to set up, launch, automate and
                                            manage multi-affiliate campaigns in 5 minutes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.about_container_section_4}>
                            <div className={styles.about_container_section_4_col_1}>
                                <div className={styles.about_container_section_4_col_1_text}>
                                    <h3 className={styles.about_container_h3}>
                                        Got a Question?
                                    </h3>
                                    <div className={styles.about_container_section_4_col_1_p}>
                                        <p>
                                            Our tools are easy to set up  and  with a user friendly
                                            
                                        </p>
                                    </div>
                                    <p className={styles.about_container_section_4_col_1_text_p}>
                                        Contact Us
                                        <span className="iconify footer-social-link" data-icon="bi:arrow-right"></span>
                                    </p>
                                </div>
                                <div className={styles.about_container_section_4_col_1_box}></div>
                                
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
                {/* <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div> */}
            </div>
        )
    }
}

export default AboutUs;