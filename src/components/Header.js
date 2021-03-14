import React, { useEffect,useState } from 'react'
import logo from '../images/logo.png'
import mobileLogo from '../images/logo-mobile.png'
import '../css/header.css'

function Header(){
    const [windowWidth, setWindowWidth] = useState(0)
    const [breakPointWindow]=useState(790)
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth)
      }
    
    useEffect(() => {
    resizeWindow()
    window.addEventListener("resize", resizeWindow)
    return () => window.removeEventListener("resize", resizeWindow)
    }, []);

    return(
        <header className='header'>
            {/* {console.log('window size at any gevin moment',windowWidth,breakPointWindow)} */}
            {/* <div className='header__container'> */}
                <div className='upper__header'>
                    <img src={windowWidth<=breakPointWindow?mobileLogo:logo} className='hackernoon__logo'/>
                    <div className='upper__header__utils'>
                        <form>
                            <input type='text' placeholder='Search...'/>
                        </form>
                        { windowWidth<=breakPointWindow?null
                           :<p>Start Writing</p>
                        }
                         { windowWidth<=breakPointWindow?null
                           :<p>Log in</p>
                        }
                         { windowWidth<=breakPointWindow?
                         <span className='menu__burger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                           :null
                        }
                    </div>
                </div>
                {windowWidth<=breakPointWindow?null:
                 <div className='lower__header'>
                    <a href='#'>Read</a>
                    <a href='#'>Top Stories</a>
                    <a href='#'>Write</a>
                    <a href='#'>Listen</a>
                    <a href='#'>Learn</a>
                    <a href='#'>Advertise</a>
                    <a href='#'>About</a>
                    <a href='#'>Tech Companies</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Slogging</a>
                </div> }
            {/* </div> */}
        </header>
    )
}

export default Header