import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import loginData from './config.json';

class SignExpanded extends Component {

	constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false,
			userName: '',
			password: '',
			error: ''
		};
	}

	componentDidMount () {
     	this.setState({flexState: !this.state.flexState});  
  	}


	isFinished = () => {
		this.setState({animIsFinished: true,});
	}

	setUserName = (val) => {
		this.setState({userName: val.target.value});
	}

	setPassword = (val) => {
		this.setState({password: val.target.value});
	}

	validate () {
		//TODO - Remove before final submission
		//const isValidUser = Object.keys(loginData.find(data => data.userName === this.userName && data.password === this.password)).length > 1;
		//if(isValidUser) {
			window.open("./landing", "_self");
		//} else {
			//this.setState({error: 'Wrong UserName or Password'});
		//}
}

	render () {
		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
			{({flexVal}) =>
			<div className={this.props.type==='signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
				flexGrow: `${flexVal}`
			}}>
				<Motion style={{ 
					opacity: spring(this.state.flexState ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
				 }} >
						{({opacity, y}) =>
						<form className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}}>
							<h2>{this.props.type === 'signIn' ? 'SIGN IN' : 'SIGN UP'}</h2>
							<Input
								id="login"
								type="text" onChange={this.setUserName}
								placeholder="LOGIN" />
							<Input
								id="password"
								type="password" onChange={this.setPassword}
								placeholder="PASSWORD" />
							<SubmitButton type={this.props.type} onClick={this.validate}></SubmitButton>
							{this.error && <p>{this.error}</p>}
							<a href="url" className='forgotPass'>{this.props.type === 'signIn' ? 'Forgot password?' : ''}</a>
						</form>
						}
				</Motion>
			</div>
		}
			</Motion>
		);
	}

}

SignExpanded.propTypes ={
	type: PropTypes.string	
};

export default SignExpanded;