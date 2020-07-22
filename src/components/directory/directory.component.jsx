import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss'
//will use class component because we will
//need to store the state

class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render(){
      return(
        <div className='directory-menu'>
        {
            //the variable 'section' can really be
            //anything I choose name wise 

            //instead of passing in section and then
            //using section.title, section.id, etc
            //we will destructure the value and 
            //just pass in the exact value

            //this.state.sections.map(({d, title, imageUrl, size, linkUrl}) => (
              //     |
              //equivalent 
              //     |
              this.state.sections.map(({id, ...otherSectionProps}) => (

                //we are passing in title from our
                //sections array in our state declsared above
                
                //key is needed otherwise there will be a console error
                //error: each child is a list should have a unique "key" prop


                //<----- F Y I ---->
                //title={tittle}
                //left-side: is the variable name found inside MenuItem
                //right-side: data being passed into MenuItem for variable 
                //            title in MenuItem
                //<----- F Y I ---->
                <MenuItem  key={id} {...otherSectionProps} />  
              ))
        }
        
        </div>
      ) 
    }
}


export default Directory;