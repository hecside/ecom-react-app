import React from 'react';
import './menu-item.style.scss'
//using functional component because
//we dont need our menu-item component 
//to hold a state, at least not right now


//className here are used for CSS
const MenuItem = ({title, imageUrl, size}) => (

    <div className={`${size} menu-item`}> 
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

export default MenuItem;