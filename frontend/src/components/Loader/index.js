import React from 'react';
import './loader.css';
import { Hourglass } from 'react-loader-spinner'

export const Loader = (props) => {
  return (
    <>
    {props.visible && <div className='loader'>
        <Hourglass
            visible={props.visible}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            colors={['#306cce', '#72a1ed']}
            />
        <div>Igniting AI Model to generate your Dashboard</div>
    </div>}
  </>
  );
};
