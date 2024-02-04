import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {MdArrowForward} from 'react-icons/md';

const SubmitButton = (props) => {
	return (
		<div className={'submitButton'}>
			<button className={props.type==='signIn' ? 'submitSignIn' : 'submitSignUp'} onClick={props.onClick}>Submit <MdArrowForward/></button>
		</div>
	);
} 

SubmitButton.propTypes = {
	type: PropTypes.string
};

export default SubmitButton;