import axios from "axios";
import { Component } from "react";
import styles from '../../components/github/gitHub.module.css';

class GitHub extends Component{

    constructor(props) {
        super(props);
        this.state = {
          faveScrollWidth: 0,
          repos: [...this.props.repos.items],
          page: 1,
        };
      }
    
      componentDidMount() {
        //   this.setState({
        //       repos: this.props.repos.items
        //   })
      }

    getdays(date){
        let date_1 = new Date(date);
        let date_2 = new Date();
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    prev = () =>{
        let page = this.state.page;
        if(page > 1){
            page = page - 1;
            axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page='+page)
            .then(response => {
                this.setState({
                    page: page,
                    repos: response.data.items
                })
            });
            
        }
    }

    next = () => {
        let page = this.state.page;
        page = page + 1;
        axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page='+page).then(response => {
            this.setState({
                page: page,
                repos: response.data.items
            })
        });
    }

    render(){

        const { repos } = this.state;

        const reposDetail = repos.map((repo) => {
        return (
            <div className={styles.github_repo}>
                <div className={styles.github_repo_col_1}>
                    <img src={repo.owner.avatar_url} className={styles.github_repo_avatar} />
                </div>
                <div className={styles.github_repo_col_2}>
                    <h3 className={styles.github_repo_name}>{repo.name}</h3>
                    <p className={styles.github_repo_description}>{repo.description}</p>
                    <div className={styles.github_repo_more}>
                        <p className={styles.github_repo_stars}>Stars: {repo.stargazers_count}</p>
                        <p className={styles.github_repo_issues}>Issues: {repo.open_issues}</p>
                        <p className={styles.github_repo_time}>Submitted {this.getdays(repo.owner.login)} days ago by {repo.name}</p>
                    </div>
                </div>
            </div>
        );
        });

        return(
            <div className={styles.container}>
                <div className={styles.col}>
                    <div className={styles.github_header}>
                        <h6>Trending Repos</h6>
                        <div>
                            <div className={styles.github_header_arrow}>
                                <p onClick={this.prev} className={styles.github_header_icon}>
                                    <span className={"iconify" + " " + styles.arrow} data-icon="akar-icons:arrow-left-thick"></span>
                                </p>
                                <p onClick={this.next} className={styles.github_header_icon}>
                                    <span className={"iconify" + " " + styles.arrow} data-icon="akar-icons:arrow-right-thick"></span>
                                </p>
                                <p className={styles.github_header_icon}>
                                    <span className={"iconify" + " " + styles.arrow} data-icon="bi:x"></span>
                                </p>
                                <a href="/" className={styles.github_header_icon}>
                                    <span className={"iconify" + " " + styles.arrow} data-icon="carbon:home"></span>
                                </a>
                            </div>
                            <div className={styles.github_header_arrow_search_box}>

                            </div>
                            <div className={styles.github_header_arrow_search_input}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.github_body_container}>
                        <div className={styles.github_repos}>
                            {reposDetail}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export async function getStaticProps(){

    let response = await axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc');
  
    return {
      props: {
          repos: response.data
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1800, // In seconds
    }
  }

export default GitHub;