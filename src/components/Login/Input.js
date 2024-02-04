import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {MdVisibility} from 'react-icons/md';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		if (immediate && !timeout) func.apply(context, args);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
	};
  }


const Input = (props) => {

	let iconVisibility = null;

	if (props.type === 'password') {
		iconVisibility = (
			<MdVisibility className='iconVisibility'/>
		);
	}

	return (
		<div className="Input">
			<input 
				id={props.name}
				autoComplete="false"
				required
				type={props.type}
				onChange={debounce(props.onChange, 700)}
				placeholder={props.placeholder}
			/>
			{iconVisibility}
		</div>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	placeholer: PropTypes.string
};


export default Input;