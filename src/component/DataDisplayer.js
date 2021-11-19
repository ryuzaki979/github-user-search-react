import React from "react";

import Company from '../assets/icon-company.svg'
import Location from '../assets/icon-location.svg'
import Twitter from '../assets/icon-twitter.svg'
import Website from '../assets/icon-website.svg'
import noResult from '../assets/illustration-empty.svg'
const DataDisplayer = ({userData,hasError,isLoading})=>{
    let {
        avatar_url,
        name,
        login,
        bio,
        following,
        followers,
        public_repos,
        location,
        company,
        twitter_username,
        html_url,
        blog,
        created_at
    } = userData
    let twitter_url = `https://twitter.com/${twitter_username}`
    const date = new Date(created_at)
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    ;
    console.log(date)
    return <>
        <main className="container card displayer">
            {
                userData ? <>
                    <div className="flex user">
                    
                    <article className="user__content">
                        <div className="user__about flex">
                                <img src={avatar_url} alt="" className="user__avatar" />
                                <div class="user__about-info">
                                    {name &&  <h1 className="user__name">
                                        {name}
                                    </h1>}
                                    <a href={html_url} className="user__link">
                                        @{login}
                                    </a>
                                    <div className="user__creation text">
                            
                                    Joined at  {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
                                
                                    </div>
                                </div>
                        </div>
                        
                        <div className="user__info">
                            <p className="text user__bio">
                                        {bio ? bio : 'This profile has no Bio'}
                                    </p> 
                            <div className="card user__stats text flex">
                                    <div className="user__stats-info">
                                        Repos
                                        <p className="user__stats-number">
                                            {public_repos}
                                        </p>
                                    </div>
                                    <div className="user__stats-info">
                                        Followers
                                        <p className="user__stats-number">
                                            {followers}
                                        </p>
                                    </div>
                                    <div className="user__stats-info">
                                        Following
                                        <p className="user__stats-number">
                                            {following}
                                        </p>
                                    </div>
                            </div>
                            <div className="user__connections text">
                                <div class="flex">
                                    <img src={Location} alt="" />
                                    <span>
                                        {location ? location : "Not Provided"}
                                    </span>
                                </div>
                                <div class="flex">
                                    <img src={Twitter} alt="" />
                                    {twitter_username ? <a href ={twitter_url}></a>: "Not Provided"}
                                </div>
                                <div class="flex">
                                    <img src={Website} alt="" />
                                    {blog ? <a href ={blog}>
                                        {blog}
                                    </a>: "Not Provided"}
                                </div>
                                <div class="flex">
                                    <img src={Company} alt="" />
                                    {company ? <p>{company}</p> : "Not Provided"}
                                </div>
                            </div>
                        </div>
                    </article>
                    </div>
                </> : hasError ?
                        <div className="error">
                            <span>
                                Oops!!!
                            </span>

                            <div>
                                There is no result found
                                    <br/>
                                please try again
                            </div>
                        </div>
                    :isLoading &&
                    <div className="loading">
                        <span className="errorImg">
                            <img src={noResult} alt="no result found"/>
                        </span>
                        <p>Searching ...</p>
                    </div>

            }
        </main>
    </>
}

export default DataDisplayer