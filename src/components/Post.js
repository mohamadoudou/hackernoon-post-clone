import React, { useState } from 'react'
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'
import Related from './Related'
import Data from '../step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json'
import '../css/post.css'
import heart from '../images/heart.png'
import heart1 from '../images/heart1.png'
import light from '../images/light.png'
import light1 from '../images/light1.png'
import boat from '../images/boat.png'
import boat1 from '../images/boat1.png'
import money from '../images/money.png'
import money1 from '../images/money1.png'
import star from '../images/star.png'
import bookmark from '../images/bookmark.png'

function Post() {

    const [heartSrc, setHeart] = useState(heart1)
    const [lightSrc, setLigth] = useState(light1)
    const [boatSrc, setBoat] = useState(boat)
    const [moneySrc, setMoney] = useState(money1)

    const time = Data.createdAt * 1000
    let dateObject = new Date(time)
    let date = ("0" + dateObject.getDate()).slice(-2);
    let posDate = ("0" + dateObject.getDate()).slice(-1);
    let year = (dateObject.getFullYear());
    const month = dateObject.toLocaleString('default', { month: 'long' });

    return (
        <div className='post'>
            <div className='post__container'>
                <div className='post__header'>
                    <h1>{Data.title}</h1>
                </div>
                <div className='post__info'>
                    <div className='info__left'>
                        <a href='/#'> {month} {date}{posDate == 1 ? 'st' : posDate == 2 ? 'nd' : 'th'} {year}</a>
                        <span className='post__number__read'><img src={star} alt='small star' /> 567 reads</span>
                        <span><img src={bookmark}  alt='bookmark'/></span>
                    </div>
                    <div className='info__right'>
                        <span className='total__reactions'>{Data.reactions.total}</span>
                        <span className='reaction'>
                            <img src={heartSrc}
                                alt='heart'
                                onMouseOver={e => setHeart(heart)}
                                onMouseOut={e => setHeart(heart1)}
                            />
                        </span>
                        <span className='reaction'>
                            <img src={lightSrc}
                                alt='lightbulb'
                                onMouseOver={e => setLigth(light)}
                                onMouseOut={e => setLigth(light1)}
                            />
                        </span>
                        <span className='reaction'>
                            <img src={boatSrc}
                                alt='boat'
                                onMouseOver={e => setBoat(boat1)}
                                onMouseOut={e => setBoat(boat)}
                            />
                        </span>
                        <span className='reaction'>
                            <img src={moneySrc}
                                alt='money'
                                onMouseOver={e => setMoney(money)}
                                onMouseOut={e => setMoney(money1)}
                            />
                        </span>
                    </div>
                </div>
                <img src={Data.mainImage} alt='post' className='mainImage' />
                <div className='profile__markup__container'>
                    <div className='profile'>
                        <img src={Data.profile.avatar} alt='avatar' className='profile__avatar' />
                        <div>
                            <h4><a href={`https://hackernoon.com/u/${Data.profile.handle}`}>@{Data.profile.handle}</a></h4>
                            <h5>{Data.profile.handle}</h5>
                            <p>
                                {Data.profile.bio}
                            </p>
                            <div className='profile__icons'>
                                <a href={`https://twitter.com/${Data.profile.twitter}`}><FiTwitter className='profile__icon' /></a>
                                <a href={`https://github.com/${Data.profile.github}`}><FiGithub className='profile__icon' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='markup__container'>
                        <div dangerouslySetInnerHTML={{ __html: Data.markup }}></div>
                        <div className='bottom__reactions'>
                            <span className='total__reactions'>{Data.reactions.total}</span>
                            <span className='reaction'>
                                <img src={heartSrc}
                                    alt='heart'
                                    onMouseOver={e => setHeart(heart)}
                                    onMouseOut={e => setHeart(heart1)}
                                />
                            </span>
                            <span className='reaction'>
                                <img src={lightSrc}
                                    alt='lightbulb'
                                    onMouseOver={e => setLigth(light)}
                                    onMouseOut={e => setLigth(light1)}
                                />
                            </span>
                            <span className='reaction'>
                                <img src={boatSrc}
                                    alt='boat'
                                    onMouseOver={e => setBoat(boat1)}
                                    onMouseOut={e => setBoat(boat)}
                                />
                            </span>
                            <span className='reaction'>
                                <img src={moneySrc}
                                    alt='money'
                                    onMouseOver={e => setMoney(money)}
                                    onMouseOut={e => setMoney(money1)}
                                />
                            </span>
                        </div>
                        <div className='bottom__share'>
                            <span>Share this story</span>
                            <a href='/#'><FiLinkedin className='social__icon' /></a>
                            <a href='/#'><FiFacebook className='social__icon' /></a>
                            <a href='/#'><FiTwitter className='social__icon' /></a>
                            <a href='/#'><FiInstagram className='social__icon' /></a>
                        </div>
                        <div className='bottom__prof__sub'>
                            <div className='bottom__profile'>
                                <img src={Data.profile.avatar} alt='avatar' className='profile__avatar' />
                                <div>
                                    <h4><a href={`https://hackernoon.com/u/${Data.profile.handle}`} className="bottom__profile__link">@{Data.profile.handle}</a></h4>
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
                            <a href='/#' key={index}>#{tag}</a>
                        )
                    })}
                </div>
            </div>
            <div className='joinhackernoon'>
                <a href='https://app.hackernoon.com/signup'>Join Haker Noon</a>
                <p>create your free account to unclock your custom reading experience</p>
            </div>
        </div>
    )
}

export default Post