import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import OfficeListContainer from '../OfficeListContainer';
import AddNewOffice from '../AddNewOffice';
import { render } from '@testing-library/react';
import AddNewOfficeContainer from '../AddNewOfficeContainer';

class OfficesPage extends React.Component {

    constructor() {
        super();
        this.state = {
            isAddNewOfficeVisible: false
        };
    }

    showAddNewOffice = () => this.setState({ isAddNewOfficeVisible: true })
    hideAddNewOffice = () => this.setState({ isAddNewOfficeVisible: false })

    render() {
        const { isAddNewOfficeVisible } = this.state;
        console.log('render isAddNewOfficeVisible', isAddNewOfficeVisible);
        return (
            <section className='offices'>
                <div className='offices-container'>
                    <div className='offices-header'>
                        <h1 className='offices-header-title'>
                            <span className='offices-header-title__first'>OFFICES</span>
                            <span className='offices-header-title__second'>| COMPANY INFO</span>
                        </h1>
                        <h3 className='offices-header__sub-title'>Updating your location and contact information helps you appeal to regional investors and service providers.</h3>
                    </div>
                    <div className='offices-page-main'>
                        <Button onClickCallBack={this.showAddNewOffice}>Add New Office</Button>
                        <div className={
                            isAddNewOfficeVisible
                                ? 'add-new-office--visible'
                                : 'add-new-office--hidden'}>
                            <AddNewOfficeContainer hideAddNewOffice={this.hideAddNewOffice} />
                        </div>
                        <OfficeListContainer />
                    </div>
                    <div className='offices-page-footer'>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfficesPage;
