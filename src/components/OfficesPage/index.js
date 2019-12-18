import React, { Component } from 'react';
import './style.css';
import Button from '../Button';
import OfficeListContainer from '../OfficeListContainer';
import AddNewOffice from '../AddNewOffice';
import { render } from '@testing-library/react';
import AddNewOfficeContainer from '../AddNewOfficeContainer';
import EditOfficeContainer from '../EditOfficeContainer';

class OfficesPage extends React.Component {

    constructor() {
        super();
        this.state = {
            isAddNewOfficeVisible: false,
            isEditNewOfficeVisible: false,
            editedItemId: ''
        };
    }

    showAddNewOffice = () => { this.setState({ isAddNewOfficeVisible: true }) }
    hideAddNewOffice = () => {
        console.log('hideAddNewOffice');
        this.setState({ isAddNewOfficeVisible: false })
    }


    showEditOfficeAndSetItemId = (itemId) => {
        console.log('itemId', itemId);
        this.setState({
            isEditNewOfficeVisible: true,
            editedItemId: itemId
        })
    }
    hideEditOffice = () => {
        console.log('hideEditOffice');
        this.setState({ isEditNewOfficeVisible: false })
    }

    render() {
        const { isAddNewOfficeVisible, isEditNewOfficeVisible, editedItemId } = this.state;
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
                                ? 'office--visible'
                                : 'office--hidden'}>
                            <AddNewOfficeContainer
                                hideOffice={this.hideAddNewOffice}
                            />
                        </div>
                        <div className={isEditNewOfficeVisible
                            ? 'office--visible'
                            : 'office--hidden'}>
                            <EditOfficeContainer
                                editedItemId={editedItemId}
                                hideOffice={this.hideEditOffice}
                            />
                        </div>

                        <OfficeListContainer
                            showEditOfficeAndSetItemId={this.showEditOfficeAndSetItemId}
                        />
                    </div>
                    <div className='offices-page-footer'>
                        <div className='offices-page-footer__container'>
                            <Button theme='button__back-theme'>Back</Button>
                            <div>
                                <img className='container__img' src="images/plus.png" alt='sidebar logo' />
                                <span>Provide additional comments</span>
                            </div>
                        </div>
                        <div className='offices-page-footer__container'>
                            <div className='btn__container'><Button theme='button__back-theme'>Skip this step</Button></div>
                            <Button theme='button button__edit-theme'>Continue</Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OfficesPage;
