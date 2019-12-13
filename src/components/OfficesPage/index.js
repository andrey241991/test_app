import React from 'react';
import './style.css';
import Button from '../Button';
import OfficeListContainer from '../OfficeListContainer';

const OfficesPage = () => {
    return <section className='offices'>
        <div className='offices-container'>
            <div className='offices-header'>
                <h1 className='offices-header-title'>
                    <span className='offices-header-title__first'>OFFICES</span>
                    <span className='offices-header-title__second'>| COMPANY INFO</span>
                </h1>
                <h3 className='offices-header__sub-title'>Updating your location and contact information helps you appeal to regional investors and service providers.</h3>
            </div>
            <div className='offices-page-main'>
                <Button onClickCallBack={() => alert('HY man')}>Add New Office</Button>
                <OfficeListContainer />
            </div>
            <div className='offices-page-footer'>

            </div>
        </div>
    </section>
}

export default OfficesPage;