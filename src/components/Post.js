import React from 'react'
import Data from '../step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json'
import '../css/post.css'

function Post() {
    return (
        <div className='post__container'>
            {console.log(Data)}
            <div className='post__header'>
                <h1>Step by Step Guide to Create 3 Different Types of Loading Screens in React</h1>
            </div>
        </div>
    )
}

export default Post