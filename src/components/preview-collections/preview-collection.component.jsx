import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

//functional component
const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((items,idx)=> idx < 4) 
                //only allow max of 4 items to displey
                .map(({id, ...otherItemProps})=>(
            <CollectionItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)

export default PreviewCollection;

