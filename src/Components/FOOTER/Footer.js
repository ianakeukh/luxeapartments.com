import React from 'react';
import {Component} from 'react';
import './Footer.css'
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import {MDBBtn, MDBCol, MDBRow, MDBInput, MDBNavLink } from "mdbreact";


import imageSrc from '../../Image/StandardLogoFiles/OriginalonTransparent.png'


class Footer extends React.Component  {

    render() {
        return (
           <div>
               <div className='w-100 container-footer'>
                   <div className='container justify-content-center m-auto h-100 w-100'>
                       <div className='d-inline-flex w-100 h-100'>
                           <MDBRow className='flex-wrap w-100'>
                               <MDBCol className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 px-0 pl-xl-3 pl-lg-3 pl-md-3 pl-sm-3 pl-4  px-lg-0'>
                                   <div className='footer-logo'>
                                        <img className='w-100 pt-5 pb-4' src={imageSrc} />
                                   </div>
                                   <p className='font-weight-normal white-text footer-slogan'>Наш ресурс існує, щоб задовільнити Ваші потреби житла та відпочинку у місті Одеса. Бажаємо гарного перебування!</p>
                               </MDBCol>
                               <MDBCol className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pt-2 pt-sm-5 pl-0 pl-sm-0 pl-md-4 pl-lg-5 pl-xl-5  pr-0'>
                                   <h4 className='footer-info white-ic pl-4 pl-sm-5 py-3'>НАВІГАЦІЯ</h4>
                                   <NavLink to='/'>
                                       <p className='pl-4 pl-sm-5 py-1 m-0'><a href='#' className='footer-info white-text'>Головна</a></p>
                                   </NavLink>
                                   <NavLink to='/about'>
                                       <p className='pl-4 pl-sm-5 py-1 m-0'><a href='#' className='footer-info white-text'>Про компанію</a></p>
                                   </NavLink>
                                   <NavLink to='/contacts'>
                                       <p className='pl-4 pl-sm-5 py-1 m-0'><a href='#' className='footer-info white-text'>Контакти</a></p>
                                   </NavLink>
                               </MDBCol>
                               <MDBCol className='d-none d-sm-block col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pt-4 py-sm-5 pr-0 px-0 pl-lg-0 pl-md-3 pl-sm-3 pb-0'>
                                   <h4 className='footer-info white-ic py-3 pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'>КАТЕГОРІЇ</h4>
                                   <MDBNavLink to="/category/Studio apartments" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a className='footer-info white-ic'>Студіо</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/One-room apartments" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a className='footer-info white-ic'>Однокімнатні квартири</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/Two-room apartments" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a href="/category/Two-room apartments" className='footer-info white-ic'>Двокімнатні квартири</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/Three room apartments" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a href='#' className='footer-info white-ic'>Трикімнатні квартири</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/Center area" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a href='#' className='footer-info white-ic'>Квартири в центрі</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/Arkadia" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a href='#' className='footer-info white-ic'>Квартири в Аркадії</a></p></MDBNavLink>
                                   <MDBNavLink to="/category/Nemo" className='p-0 m-0'><p className='pl-4 pl-xl-5 pl-lg-5 pl-md-0 pl-sm-0'><a href='#' className='footer-info white-ic'>Кімнати у будинку</a></p></MDBNavLink>
                               </MDBCol>
                               <MDBCol className='col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 pt-2 pb-3 py-sm-5 pl-0 pl-lg-0 pl-md-4 px-0'>
                                   <h4 className='footer-info white-ic pl-4 pl-sm-5 pl-md-5 pl-lg-4 py-3 pb-2'>CONTACTS</h4>
                                   <p className='white-ic pl-4 pl-sm-5 pl-md-5 pl-lg-4'><a href='tel:+380671088799' className="white-ic footer-info"><i className="fas fa-phone pr-2 white-ic footer-info"></i>+38 (099) 917 13 53</a></p>
                                   <p className='white-ic pl-4 pl-sm-5 pl-lg-4'><a href='tel:+380677587710' className="white-ic footer-info"><i className="fas fa-phone pr-2 white-ic footer-info"></i>+38 (067) 758 77 10</a></p>
                                   <p className='white-ic pl-4 pl-sm-5 pl-lg-4'><i className='far fa-envelope pr-2 white-ic'></i>
                                       <a className='white-ic footer-info'>
                                           luxeapartments25@gmail.com
                                       </a>
                                   </p>
                                   <p className='white-ic pl-4 pl-sm-5 pl-lg-4'><i className="fas fa-pen pr-2"></i>
                                       <Link to='/writetous' className='white-ic footer-info'>
                                           Контактна форма
                                       </Link>
                                   </p>
                               </MDBCol>
                           </MDBRow>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Footer;