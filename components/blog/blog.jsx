import Image from "next/image";
import { Component } from "react";
import Footer from "../global/footer/footer";
import Navbar from "../global/navbar/navbar";
import styles from './blog.module.css';

class Blog extends Component{
    
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.col_1}>
                    <Navbar logo="black" backgroundColor="white" aboutColour="black" blog="#fe23f7" contactColor="black" contactBackColor="white"></Navbar>
                    <div className={styles.blog_container}>
                        <div className={styles.blog_container_section_1}>
                            <div className={styles.blog_container_section_1_col_1}>
                                <div className={styles.blog_container_section_1_col_1_box}></div>
                                <div className={styles.blog_container_section_1_col_1_text}>
                                    <p className={styles.blog_container_section_1_col_1_text_p}>
                                        <span></span>
                                        Blog
                                    </p>
                                    <h3 className={styles.blog_container_section_1_col_1_text_h3}>
                                        Articles and News
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.blog_container_section_2}>
                            <div className={styles.blog_container_section_2_col_1}>
                                <h3>Latest from the blog</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                            </div>
                            <div className={styles.blog_container_section_2_col_2}>
                                <div className={styles.email_box} >
                                    <input
                                    type="text"
                                    name="email"
                                    className={styles.email_input}
                                    placeholder="Enter your email address..."
                                    />
                                    <span
                                        className={"iconify" + " " + styles.search_icon}
                                        data-icon="ei:search"
                                    ></span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blog_container_section_3}>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image>
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image>
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image>
                                {/* <img /> */}
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image>
                                {/* <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image> */}
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img} ></Image>
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_3_col}>
                                <Image width={500} height={500} src="/images/blog-img.png" alt="blog img" className={styles.blog_container_section_3_col_img}></Image>
                                {/* <img  /> */}
                                <p className={styles.blog_container_section_3_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_3_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_3_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_3_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                        </div>
                        <div className={styles.blog_container_section_4}>
                            <div className={styles.blog_container_section_4_col_1}>
                                <h3>Recent Articles</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className={styles.blog_container_section_5}>
                            <div className={styles.blog_container_section_5_col}>
                                <p className={styles.blog_container_section_5_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_5_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_5_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_5_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_5_col}>
                                <p className={styles.blog_container_section_5_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_5_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_5_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_5_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                            <div className={styles.blog_container_section_5_col}>
                                <p className={styles.blog_container_section_5_col_date}>
                                    September 6, 2021 . Featured Article . Affiliate
                                </p>
                                <h3 className={styles.blog_container_section_5_col_heading}>
                                    12 Popup Use Cases To increase conversations
                                </h3>
                                <p className={styles.blog_container_section_5_col_content}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                                    ever since the 1500s,
                                </p>
                                <p className={styles.blog_container_section_5_col_read_more}>
                                    <span></span>
                                    Read More
                                </p>
                            </div>
                        </div>
                        <div className={styles.load_more}>
                            <button>Load More</button>
                        </div>
                        <div className={styles.blog_container_section_6}>
                            <div className={styles.blog_container_section_6_col_1}>
                                <div className={styles.blog_container_section_6_col_1_text}>
                                    <h3 className={styles.blog_container_h3}>
                                        Want To know more about metrics ?
                                    </h3>
                                    <div className={styles.blog_container_section_6_col_1_p}>
                                        <p>
                                            Learn who we are and what drives use.
                                            
                                        </p>
                                    </div>
                                    <p className={styles.blog_container_section_6_col_1_text_p}>
                                        Contact Us
                                        <span className="iconify footer-social-link" data-icon="bi:arrow-right"></span>
                                    </p>
                                </div>
                                <div className={styles.blog_container_section_6_col_1_box}>
                                    <div className={styles.blog_container_section_6_col_1_box_box}></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <Footer active='black'></Footer>
                </div>
                {/* <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
                <div className={styles.circle4}></div> */}
            </div>
        )
    }
}

export default Blog;