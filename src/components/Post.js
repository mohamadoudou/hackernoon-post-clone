import React from 'react'
import { FiTwitter, FiGithub,FiLinkedin,FiInstagram,FiFacebook } from 'react-icons/fi'
import Related from './Related'
import Data from '../step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json'
import '../css/post.css'
import heart from '../images/heart.png'
import light from '../images/light.png'
import boat from '../images/boat.png'
import money from '../images/money.png'
import star from '../images/star.png'
import bookmark from '../images/bookmark.png'

function Post() {
    return (
        <div className='post'>
            <div className='post__container'>
                {console.log(Data)}
                <div className='post__header'>
                    <h1>{Data.title}</h1>
                </div>
                <div className='post__info'>
                    <div className='info__left'>
                        <p>february 22nd 2021 </p>
                        <span className='post__number__read'><img src={star} /> 402 reads</span>
                        <span><img src={bookmark} /></span>
                    </div>
                    <div className='info__right'>
                        <span>10</span>
                        <span><img src={heart} /></span>
                        <span><img src={light} /></span>
                        <span><img src={boat} /></span>
                        <span><img src={money} /></span>
                    </div>
                </div>
                <img src={Data.mainImage} className='mainImage' />
                <div className='profile__markup__container'>
                    <div className='profile'>
                        {console.log('profile', Data.profile)}
                        <img src={Data.profile.avatar} className='profile__avatar' />
                        <div>
                            <h4><a href='#'>@{Data.profile.handle}</a></h4>
                            <h5>{Data.profile.handle}</h5>
                            <p>
                                {Data.profile.bio}
                            </p>
                            <div><span><FiTwitter /></span><span><FiGithub /></span></div>
                        </div>
                    </div>
                    <div className='markup__container'>
                        <div dangerouslySetInnerHTML={{ __html: Data.markup }}></div>
                        <div className='bottom__reactions'>
                            <span>10</span>
                            <span><img src={heart} /></span>
                            <span><img src={light} /></span>
                            <span><img src={boat} /></span>
                            <span><img src={money} /></span>
                        </div>
                        <div className='bottom__share'>
                            <span>Share this story</span>
                            <a href='#'><FiLinkedin className='social__icon' /></a>
                            <a href='#'><FiFacebook className='social__icon' /></a>
                            <a href='#'><FiTwitter className='social__icon' /></a>
                            <a href='#'><FiInstagram className='social__icon' /></a>
                        </div>
                        <div className='bottom__prof__sub'>
                            <div className='bottom__profile'>
                                <img src={Data.profile.avatar} className='profile__avatar' />
                                <div>
                                    <h4><a href='#'>@{Data.profile.handle}</a></h4>
                                    <h5>{Data.profile.handle}</h5>
                                </div>
                            </div>
                            <div className='bottom__subscribe'>
                                <h4>{Data.profile.adText}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='related__container'>
                <fieldset><legend><h1>RELATED</h1></legend></fieldset>
            </div>
            <div className='relatedStory'>
                {console.log('relatedss', Data.relatedStories)}
                {Data.relatedStories.map((relatedStory, index) => {
                    return (
                        <Related relatedStory={relatedStory} key={index} />
                    )
                })}
            </div>
            <div className='tags__container'>
                <fieldset><legend><h1>TAGS</h1></legend></fieldset>
                <div className='tag'>
                    {Data.tags.map((tag, index) => {
                        return (
                            <a href='#' key={index}>#{tag}</a>
                        )
                    })}
                </div>
            </div>
            <div className='joinhackernoon'>
                <a href='#'>Join Haker Noon</a>
                <p>create your free account to unclock your custom reading experience</p>
            </div>
        </div>
    )
}

export default Post