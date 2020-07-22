import React from 'react';
import './menu-item.style.scss'
import { withRouter } from 'react-router-dom';
//using functional component because
//we dont need our menu-item component 
//to hold a state, at least not right now


//className here are used for CSS


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (

    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}> 
                                                                    
        <div className='background-image'
            style={{

            //using string interpolated -> ${}
            //allows to dynamically create styles in our components
            backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

//by wrapping MenuItem withRouter we
//have access to history
export default withRouter(MenuItem);