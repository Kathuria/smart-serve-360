import React from 'react';
import './App.css';
import {MdArrowBack} from 'react-icons/md';
import {FaCircle} from 'react-icons/fa';

const NavigationPanel = (props) => {

	return (
		<div className='NavigationPanel'>
			<MdArrowBack onClick={() => props.onBack()} className='back'/>
			<div className='dots'>
				<FaCircle className='dotSelected' />
				<FaCircle className='dot' />
				<FaCircle className='dot' />
			</div>
			<div style={{flex: 2}}></div>
		</div>
	);
}



export default NavigationPanel;