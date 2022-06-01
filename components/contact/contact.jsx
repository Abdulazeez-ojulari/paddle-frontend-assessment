import { Component } from "react";
import styles from './contact.module.css';

class Contact extends Component{

    render(){
        return(
            <div className={styles.container}>
                <div className={styles.contact_container_col_1}>

                </div>
                <div className={styles.contact_container_col_2}>
                    <div onClick={this.props.toggleContact} className={styles.contact_container_arrow} >
                        <span className={"iconify" + " " + styles.arrow} data-icon="bi:arrow-right"></span>
                    </div>
                    <div className={styles.contact_container_form}>
                        <h3 className={styles.contact_container_form_h3}>
                            Hey we are still in the works,
                            but you can send us a message!
                        </h3>
                        <div className={styles.contact_form_group}>
                            <label htmlFor="firstname" className={styles.contact_form_label}>First Name</label>
                            <input name="firstname" placeholder="First Name..." type="text" className={styles.contact_form_input} />
                        </div>
                        <div className={styles.contact_form_group}>
                            <label htmlFor="lastname" className={styles.contact_form_label}>First Name</label>
                            <input name="lastname" placeholder="Last Name..." type="text" className={styles.contact_form_input} />
                        </div>
                        <div className={styles.contact_form_group}>
                            <label htmlFor="email" className={styles.contact_form_label}>First Name</label>
                            <input name="email" placeholder="Email..." type="email" className={styles.contact_form_input} />
                        </div>
                        <div className={styles.contact_form_group}>
                            <label htmlFor="firstname" className={styles.contact_form_label}>First Name</label>
                            <textarea name="lastname" placeholder="Last Name..." type="text" className={styles.contact_form_textarea} >
                            </textarea>
                        </div>
                        <div className={styles.load_more}>
                            <button>Send Now</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;