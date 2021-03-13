import React from 'react'
import logoMobile from '../images/logo-mobile.png'
import '../css/related.css'


function PostHeader({relatedStory}){
    return(
        <div className='post__header'>
            <a href='#'><mark>{relatedStory.text?relatedStory.text:relatedStory.title}</mark></a>
        </div>
    )
}

function PostFooter({relatedStory}){
    if(relatedStory.profile){
        const time=relatedStory.publishedAt*1000
        let dateObject=new Date(time)
        let date = ("0" + dateObject.getDate()).slice(-2);
        let year = ("0" + (dateObject.getYear())).slice(-2);
        let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
        return(
            <div className='post__footer'>
                <div className='post__footer__left'>
                    <img src={relatedStory.profile.avatar} alt='avatar image' className='post__footer__img'/>
                    <div>
                        <a href='#'>@{relatedStory.profile.handle}</a>
                        <p>{relatedStory.profile.displayName}</p>
                    </div>
                </div>
                <div className='post__footer__right'>
                    {relatedStory.estimatedTime?
                    <p>{relatedStory.estimatedTime}min</p>
                :<p style={{visibility:'hidden'}}>min</p>}
                    <p>{`${month}/${date}/${year}`}</p>
                </div>
            </div>
        )
    }else{
        return(
            <div className='post__footer'></div>
        )
    }
}
function Related({relatedStory}){
    return(
        <div className='related__post__container'>
            <PostHeader relatedStory={relatedStory?relatedStory:null}/>
            <div className='post__body' style={{
                 background: `url(${relatedStory.profile?relatedStory.mainImage:relatedStory.image})`,
                 backgroundSize: 'cover',
                 
            }}>
                {relatedStory.reactionsCount>0?
            <p className='reactions'>{relatedStory.reactionsCount} reactions </p>:null
        }
                <span className='post__body__hashtag'>#reactjs</span>
            </div>
            <PostFooter relatedStory={relatedStory?relatedStory:null}/>
        </div>
    )
}


export default Related