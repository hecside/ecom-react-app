import React from 'react';
import './form-input.style.scss';

const FormInput = ({handleChange, label, ...OtherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...OtherProps}/>
        {
            //makes a label tag if we need too
            //this label will be added the 'shrink form-input-label' tag 
            //when the user types anything for the label so it is styled 
            //by our scss class

            //inside: renders the text name of the label
            label ?
            (<label className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label`}>
                
                {label}
            </label>)
            //otherwise makes no label tag
            :null
        }
    </div>
);

export default FormInput;