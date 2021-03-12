import React from 'react'
import {FiTwitter,FiGithub} from 'react-icons/fi'
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
        <div className='post__container'>
            {console.log(Data)}
            <div className='post__header'>
                <h1>{Data.title}</h1>
            </div>
            <div className='post__info'>
                <div className='info__left'>
                    <p>february 22nd 2021 </p>
                    <span className='post__number__read'><img src={star}/> 402 reads</span>
                    <span><img src={bookmark}/></span>
                </div>
                <div className='info__right'>
                    <span>10</span>
                    <span><img src={heart}/></span>
                    <span><img src={light}/></span>
                    <span><img src={boat}/></span>
                    <span><img src={money}/></span>
                </div>
                <img src={Data.mainImage} className='mainImage'/>
                <div>
                    <div className='profile'>
                        {console.log('profile',Data.profile)}
                        <img src={Data.profile.avatar} className='profile__avatar'/>
                        <div>
                        <h4>@{Data.profile.handle}</h4>
                        <h5>{Data.profile.handle}</h5>
                        <p>
                            {Data.profile.bio}
                        </p>
                        <div><span><FiTwitter/></span><span><FiGithub/></span></div>
                        </div>
                    </div>
                    <div>
                        {/* <div dangerouslySetInnerHTML={{__html:Data.markup}}></div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post