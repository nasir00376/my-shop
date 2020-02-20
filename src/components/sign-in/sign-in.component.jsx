import React from 'react';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email'
            label='Email'
            name='email'
            value={email}
            required
            handleChange={this.handleChange}/>

          <FormInput 
            type='password' 
            label='Password'
            name='password'
            value={password}
            required
            handleChange={this.handleChange}/>

          <CustomButton type='submit'>
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;