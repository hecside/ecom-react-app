import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handlSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange = (event) =>{
        const{value, name} = event.target;

        this.setState({[name]: value})
    }

    render(){

        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handlSubmit} >

                <FormInput name='email' label='Email' type='email' handleChange={this.handleChange} value={this.state.email} required />
                <FormInput name='password' label='Password' type='password' handleChange={this.handleChange} value={this.state.password} required />

                <CustomButton type="submit" value='Submit Form' >Sign in</CustomButton>
                
            </form>
            </div>
        );
    }
}

export default SignIn;