import React from 'react';
import './style.css';
import Loader from 'react-loader-spinner'

const CustomLoader = ({visible}) => {
    return(
        <div className='loader-wrapper'>
                        <Loader
                            visible={visible}
                            type="Circles"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            // timeout={2500}
                        />
                </div>
    );
}

export default CustomLoader;