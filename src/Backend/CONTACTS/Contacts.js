import React, {Component} from 'react';
import './Contacts.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
MDBCard,
MDBCol,
MDBView,
MDBRow, MDBTable,MDBContainer, MDBInput, MDBBtn, MDBModalHeader, MDBModalBody, MDBIcon} from 'mdbreact';

class ShopContacts extends Component {

    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    logValue = value => {
        console.log(value);
    };


    render() {
        return (
            <div className='contacts-block'>
                <div className='container w-100'>
                    <h3 className='h3-responsive  pt-3 pt-sm-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>Контакти</h3>
                    <div className='border-0 d-block m-0 pb-3 pb-sm-5'>
                        <div className="text-center h-100 black-text px-0">
                            <p className='h3-responsive text-center font-weight-bolder m-0 py-1 contacts-text'>
                                <span>Для оренди квартири зателефонуйте нам за номерами, вказаними на сайті!</span>
                            </p>
                            <ul className="text-lg-left list-unstyled ml-0 pt-4 pt-sm-5">
                                <li>
                                    <p className="text-center contact-text">
                                        <a href='https://goo.gl/maps/bzk1W5AZCec4QVR89' className='black-ic'>
                                            <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                            місто Одеса, Каманіна 16a, 528 кв.
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-center contact-text">
                                        <a href='#' className='black-ic'>
                                            <MDBIcon icon="clock" className="pr-3"/>
                                            Замовлення: 24h
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p href='#' className="text-center contact-text" >
                                        <a href='tel:+380677587710' className='black-ic'>
                                            <MDBIcon icon="phone" className="pr-3"/>
                                            +38 067 758 77 10
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-center contact-text" >
                                        <a href='tel:+380671088799' className='black-ic'>
                                            <MDBIcon icon="phone" className="pr-3"/>
                                            +38 099 917 13 53
                                        </a>
                                    </p>
                                </li>
                            </ul>
                            <hr className="hr-light my-2 mt-0 mb-0 p-0"/>
                        </div>
                    </div>
                    <div className='pb-3 pb-sm-5 '>
                        <MDBCol className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pb-4'>
                            <div
                                id="map-container"
                                className="rounded z-depth-1-half map-container"
                                style={{ height: "400px" }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.969770113671!2d30.438142415733022!3d50.49752037948187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd75cbff97fd%3A0x8ac0784da6eb1d7d!2z0LLRg9C7LiDQodC10YDQs9GW0Y8g0JTQsNC90YfQtdC90LrQsCwgMzIsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1607354523859!5m2!1suk!2sua"
                                    width='100%'
                                    height="400"
                                    frameBorder="0"
                                    aria-hidden="false" tabIndex="0">
                                </iframe>
                            </div>
                        </MDBCol>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopContacts;
