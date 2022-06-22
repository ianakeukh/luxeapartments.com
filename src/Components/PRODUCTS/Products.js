import React from 'react';
import './Products.css'


import {
    MDBRow,
    MDBCol,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    MDBLink, MDBView, MDBMask
} from 'mdbreact';

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import { withRouter } from 'react-router-dom';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';

import Item from './../ITEMS/Item/Item'
import slideImage from "../../Image/90.jpg";
import slideImage2 from "../../Image/90mobile.jpg";
import imageSrc from "../../Image/StandardLogoFiles/OriginalonTransparent.png";


import images1 from '../../Image/app1/app1.jpg'
import images2 from '../../Image/app1/app2.jpg'
import images3 from '../../Image/app1/app3.jpg'
// import images4 from '../../Image/app1/app4.jfif'
// import images5 from '../../Image/app1/app5.jfif'
// import images6 from '../../Image/app1/app6.jfif'

import images10 from '../../Image/app2/app1.jpg'
import images11 from '../../Image/app2/app2.jpg'
import images12 from '../../Image/app2/app3.jpg'
import images13 from '../../Image/app2/app4.jpg'
import images14 from '../../Image/app2/app5.jpg'
import images15 from '../../Image/app2/app6.jpg'

import images20 from '../../Image/app3/app7.jpg'
import images21 from '../../Image/app3/app8.jpg'
import images22 from '../../Image/app3/app9.jpg'
import images23 from '../../Image/app3/app10.jpg'
import images24 from '../../Image/app3/app11.jpg'
import images25 from '../../Image/app3/app12.jpg'

import images30 from '../../Image/app4/app12.jpg'
import images31 from '../../Image/app4/app11.jpg'
import images32 from '../../Image/app4/app13.jpg'
import images33 from '../../Image/app4/app14.jpg'
import images34 from '../../Image/app4/app15.jpg'
import images35 from '../../Image/app4/app16.jpg'

import images40 from '../../Image/app5/app1.jpg'
import images41 from '../../Image/app5/app2.jpg'
import images42 from '../../Image/app5/app3.jpg'
import images43 from '../../Image/app5/app4.jpg'
import images44 from '../../Image/app5/app7.jpg'
import images45 from '../../Image/app5/app6.jpg'

import images50 from '../../Image/app6/app2.jpg'
import images51 from '../../Image/app6/app3.jpg'
import images52 from '../../Image/app6/app5.jpg'
import images53 from '../../Image/app6/app7.jpg'
import images54 from '../../Image/app6/app8.jpg'
import images55 from '../../Image/app6/app9.jpg'

import images60 from '../../Image/app7/app4.jpg'
import images61 from '../../Image/app7/app2.jpg'
import images62 from '../../Image/app7/app3.jpg'
import images63 from '../../Image/app7/app6.jpg'
import images64 from '../../Image/app7/app8.jpg'
import images65 from '../../Image/app7/app9.jpg'

import images70 from '../../Image/app8/app1.jpg'
import images71 from '../../Image/app8/app2.jpg'
import images72 from '../../Image/app8/app3.jpg'
import images73 from '../../Image/app8/app4.jpg'
import images74 from '../../Image/app8/app5.jpg'
import images75 from '../../Image/app8/app6.jpg'

import images80 from '../../Image/app9/app1.jpg'
import images81 from '../../Image/app9/app7.jpg'
import images82 from '../../Image/app9/app3.jpg'
import images83 from '../../Image/app9/app4.jpg'
import images84 from '../../Image/app9/app5.jpg'
import images85 from '../../Image/app9/app6.jpg'





//var cl = console.log

class Products extends React.Component  {

  constructor(props) {
    super(props)

    this.state = {
      collapseID: '',
      value: 0,
      items: {
          default: '1',
      },
      products: [],
      filter: {
        categories: {},
        areas: {}
      }
    }
  }




     //componentDidMount(props) {
         //fetch('http://luxapartments-server.loc/api/products')
             //.then(response => response.json())
             //.then(data => this.setState( {products: data.products}));
    // }

    // isCatActive = (category) => {
     //  if (this.state.filter.categories[category]) return 'active'
     //  else return ''
    // }

    // isAreaActive = (area) => {
    //   if (this.state.filter.areas[area]) return 'active'
    //   else return ''
     //}

     //chooseCategory = (category) => {
      // let filter = {...this.state.filter}
      // if (filter.categories[category]) {
      //   delete filter.categories[category]
      // }else{
      //   filter.categories[category] = 1
      // }
      // this.doAjax(filter)
      // this.setState({filter})
    // }

    // chooseArea = (area) => {
      // let filter = {...this.state.filter}
     //  if (filter.areas[area]) {
      //   delete filter.areas[area]
      // }else{
      //   filter.areas[area] = 1
      // }
      // this.doAjax(filter)
       //this.setState({filter})
    // }

   //  doAjax = (filter) => {
    //   cl(filter)
    //     let url
     //    if (Object.keys(filter).length !== 0) {
     //        url = 'http://luxapartments-server.loc/api/filter?filter='+encodeURIComponent(JSON.stringify(filter))
     //    }else{
     //        url = 'http://luxapartments-server.loc/api/products'
     //    }
      //   fetch(url)
      //       .then(response => response.json())
       //      .then(data => this.setState( {products: data.products}));
//}

    // componentDidUpdate(prevProps) {
      //   cl(prevProps.match.params.category)
      //   cl(this.props.match.params.category)
      //   if (window.location.pathname.indexOf('/category') === 0) {
      //       if (prevProps.match.params.category !== this.props.match.params.category) {
       //          this.chooseCategory(this.props.match.params.category)
        //     }
      //   }
   //  }
         render() {
             return (
                 <div>
                     <div className='products w-100'>
                         <div className='container px-sm-2 px-md-2 px-lg-1 px-xl-1 w-100'>
                             <h3 className='h3-responsive  pt-3 pt-sm-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>
                                 Апартаменти
                             </h3>
                             <MDBRow className='d-flex w-responsive w-100 pb-2 m-auto justify-content-center'>
                                 {/*<MDBCol className='col-12 px-0 px-sm-1 m-0 w-100'>*/}
                                 {/*    <div>*/}
                                 {/*        <div*/}
                                 {/*            className='d-inline-flex d-sm-inline-flex prod-filtration-rooms my-1 w-100'>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button*/}
                                 {/*                        onClick={this.chooseCategory.bind(null, 'Studio apartments')}*/}
                                 {/*                        className={'mb-1 w-100 p-0 py-2 ' + this.isCatActive('Studio apartments')}>Studio*/}
                                 {/*                        apartments*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button*/}
                                 {/*                        onClick={this.chooseCategory.bind(null, 'One-room apartments')}*/}
                                 {/*                        className={'mb-1 w-100 p-0 py-2 ' + this.isCatActive('One-room apartments')}>One-room*/}
                                 {/*                        apartments*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button*/}
                                 {/*                        onClick={this.chooseCategory.bind(null, 'Two-room apartments')}*/}
                                 {/*                        className={'mb-1 w-100 p-0 py-2 ' + this.isCatActive('Two-room apartments')}>Two-room*/}
                                 {/*                        apartments*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button*/}
                                 {/*                        onClick={this.chooseCategory.bind(null, 'Three room apartments')}*/}
                                 {/*                        className={'mb-1 w-100 p-0 py-2 ' + this.isCatActive('Three room apartments')}>Three*/}
                                 {/*                        room apartments*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*        </div>*/}
                                 {/*        <div*/}
                                 {/*            className='d-inline-flex d-sm-inline-flex prod-filtration-rooms my-1 w-100'>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button onClick={this.chooseArea.bind(null, 'Center area')}*/}
                                 {/*                            className={'mb-1 w-100 p-0 py-2 ' + this.isAreaActive('Center area')}>Center*/}
                                 {/*                        area*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button onClick={this.chooseArea.bind(null, 'Arkadia')}*/}
                                 {/*                            className={'mb-1 w-100 p-0 py-2 ' + this.isAreaActive('Arkadia')}>Arkadia*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button onClick={this.chooseArea.bind(null, 'Nemo')}*/}
                                 {/*                            className={'mb-1 w-100 p-0 py-2 ' + this.isAreaActive('Nemo')}>Nemo*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*            <div className='col-3 px-1'>*/}
                                 {/*                <MDBLink className='p-0'>*/}
                                 {/*                    <button onClick={this.chooseArea.bind(null, 'Other area')}*/}
                                 {/*                            className={'mb-1 w-100 p-0 py-2 ' + this.isAreaActive('Other area')}>Other*/}
                                 {/*                        area*/}
                                 {/*                    </button>*/}
                                 {/*                </MDBLink>*/}
                                 {/*            </div>*/}
                                 {/*        </div>*/}
                                 {/*    </div>*/}
                                 {/*</MDBCol>*/}
                                 <MDBCol className='px-0 px-sm-0 py-sm-2'>
                                     <div className='w-75 justify-content-center m-auto'>
                                         <h4 className='text-center main-text pb-3'>
                                             Вишукане житло саме для Вас на будь-який смак. Знайдемо для Вас найкращий
                                             варіант.
                                         </h4>
                                     </div>
                                     <div>
                                         <MDBRow className='p-0 m-0 my-sm-5 my-2 ml-0 border-0'>
                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images80} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images81} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images82} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images83} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images84} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images85} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Однокімнатна квартира із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Однокімнатна квартира </p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>110 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Розкішна квартира в Аркадії,в 6 перлині. В квартирі
                                                             2 спальні, спальня дуб+ шкіряний диван, велика студія 50кв, ванна кімната.
                                                             Знаходиться на 3 поверсі, морська сторона. Присутня тепла підлога, мебель - Італія. Вишукана ванна кімната із мраморним обрамленням.
                                                             Присутнє все необхідне для життя. Вид із вікна на красивий дворик.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>2200 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                             <MDBCol className='col-12 col-lg-6  w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images1} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images2} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images3} alt='...'/>
                                                         </MDBCarouselItem>
                                                         {/*<MDBCarouselItem>*/}
                                                         {/*    <MDBCarouselElement src={images4} alt='...'/>*/}
                                                         {/*</MDBCarouselItem>*/}
                                                         {/*<MDBCarouselItem>*/}
                                                         {/*    <MDBCarouselElement src={images5} alt='...'/>*/}
                                                         {/*</MDBCarouselItem>*/}
                                                         {/*<MDBCarouselItem>*/}
                                                         {/*    <MDBCarouselElement src={images6} alt='...'/>*/}
                                                         {/*</MDBCarouselItem>*/}
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="card-title font-weight-bold py-1 m-0 text-name">Квартира
                                                             в Аркадії із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             <span className="font-weight-bold">Тип: </span>Однокімнатна
                                                             квартира із окремою кімнатою</p>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             <span className="font-weight-bold">Метраж: </span>42 м2</p>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             Красива однокімнатна квартира із видом на море і
                                                             панорамними вікнами. Однокімнатна квартира із окремою
                                                             кімнатою
                                                             та великою кухнею, де зосереджений розкладний диван і
                                                             кухня. Красива та комфортна сумісна ванна кімната. В
                                                             квартирі є все необхідне для проживання:
                                                             шафа-купе, стіл, плита, пилосос, духовка, посуд, праска та
                                                             інше. Дивовижні відтінки роблять ваш відпочинок
                                                             відмінним.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1000 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                             <MDBCol className='col-12 col-lg-6  w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images10} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images11} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images12} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images13} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images14} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images15} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="card-title font-weight-bold py-1 m-0 text-name">Квартира
                                                             біля Аркадії із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             <span className="font-weight-bold">Тип: </span>Однокімнатна
                                                             квартира із окремою кімнатою</p>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             <span className="font-weight-bold">Метраж: </span>41 м2</p>
                                                         <p className="card-text black-text py-1 m-0 text-information">
                                                             Комфортна квартира на 20-му поверсі із видом боковим на море із євроремонтом.
                                                             В квартирі є Smart TV , Wi-Fi, кондиціонер, пральна машинка, мікрохвильова піч, фен, праска, електро чайник, дошка для глажки, сушилка, столові прибори, посуд, кастрюля, сковорідка.
                                                             Квартирі із окремою кімнатою та двоспальним ліжком та диван на дві персони на кухні.
                                                             Неподалік також є Тц Gagarin plaza, супермаркети, аптеки, рестораны, аквапарк.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1000 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images20} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images21} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images22} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images23} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images24} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images25} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Квартира в
                                                             Аркадії із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Однокімнатна
                                                             квартира із окремою кімнатою</p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>55 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Однокімнатна квартира в Аркадії із видом на море і
                                                             панорамними вікнами. Для розміщення 4х осіб. В квартирі
                                                             присутній диван та ліжко. Квартира зроблена із євроремонтом
                                                             та в новому будинку.
                                                             В квартирі є усе неохідне для проживання та здається як
                                                             подобово, так і на довгий період. Апартаменти зроблені зі
                                                             смаком та із приємними відтінками.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1200 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>


                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                         <MDBCarouselElement src={images30} alt='...'/>
                                                     </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images31} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images32} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images33} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images34} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images35} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Квартира студія
                                                             в Аркадії із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Студійна квартира</p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>40 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Красивая студийная видоваю квартира на 19 этаже в 36 Жемчужине на улице Генуэзская.
                                                             В квартире есть все для комфортного проживания. Из окна очень красивый вид и прекрасная
                                                             охраняемая территория. Рядом есть все необходимое для проживания: магазин, Аркадия, торговые центры,
                                                             аптеки, маркеты. Квартира сдается как на целый год, так и посуточно.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1000 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images40} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images41} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images42} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images43} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images44} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images45} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Однокімнатна квартира в центрі Одеси.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Однокімнатна квартира </p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>32 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Однокімнатна квартира на вулиці Гоголя 19 у історичному центрі Одеси.
                                                             Квартира знаходиться у красивому будинку, із мраморними сходами 2/3 етажного будинку.
                                                             Загальна площа складає 32 м, кімната 25 метри.
                                                             У квартирі два великі вікна, високі потолки, двухспальне ліжко, плазма, побутова техніка.
                                                             Поблизу знаходяться приморський бульвар, Дерибасівська вулиця, Оперный театр, Екатерининская площадь
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>800 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>


                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images50} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images51} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images52} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images53} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images54} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images55} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Однокімнатна квартира в центрі Одеси.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Однокімнатна квартира </p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>58 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Квартира у Восьмій Перлині біля моря на Французский бульварі, в Аркадії на 1-й лінії моря,
                                                             красивий вид на море. Сучасний дизайн із окремою кімнатою та панорамними вікнами та дверима, кухня-студія  с двуспальним розкладним диваном,
                                                             вікна із виходом на балком. Квартира підходить для 4-5 людей, в квартирі є 2 кондиціонери, телевізор. Є можливість арендувати парковку.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>900 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images60} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images61} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images62} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images63} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images64} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images65} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Однокімнатна квартира із видом на море.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Однокімнатна квартира </p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>60 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Комфортна квартира в 6 Перлині в Аркадії, на Гагарінському платі 5б.
                                                             Площа квартири 60 кв.м, на 10 поверсі. Прекрасна кухня студія та спальня із дверима та великими вікнами,
                                                             та велика ванна кімната. Дві гардеробні кімнати. Дорогий ремонт та вся сучасна техніка.
                                                             В квартирі свій лічильник тепла. Квартира сонячна та дуже тепла взимку із панорамними вікнами та видом на місто,
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1200 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>


                                             <MDBCol className='col-12 col-lg-6 w-100 pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                 <MDBCarousel showIndicators fade className='courousel-image'>
                                                     <MDBCarouselInner>
                                                         <MDBCarouselItem className='active'>
                                                             <MDBCarouselElement src={images70} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images71} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images72} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images73} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images74} alt='...'/>
                                                         </MDBCarouselItem>
                                                         <MDBCarouselItem>
                                                             <MDBCarouselElement src={images75} alt='...'/>
                                                         </MDBCarouselItem>
                                                     </MDBCarouselInner>
                                                 </MDBCarousel>
                                                 <div className="card-text h-100">
                                                     <div className='px-0 px-sm-3 py-3 card-inside'>
                                                         <h5 className="text-name card-title font-weight-bold py-1 m-0">Смарт квартира в Аркадії.</h5>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Тип: </span>Смарт квартира</p>
                                                         <p className="card-text black-text py-1 m-0"><span
                                                             className="font-weight-bold">Метраж: </span>30 м2</p>
                                                         <p className="card-text black-text py-1 m-0">
                                                             Квартира на Гагаринське Плато, новий житловий двухповерховий комплекс Скай.
                                                             У дворі Аркадийського дворца,у сердці Аркадії .
                                                             Смарт квартира 30кв м , на землі , із терасою та виходом із квартири прямо в соснову алею,
                                                             яка веде до красивих сходів до Ітаки.
                                                             Прямий вид на море та усієї Аркадии как на долоні, за 2 хвилини море.
                                                         </p>
                                                     </div>
                                                     <div className='px-sm-3 py-0 py-md-3 card-inside-one'>
                                                         <p><span className="font-weight-bold">Ціна за добу: </span>1200 грн</p>
                                                     </div>
                                                 </div>
                                             </MDBCol>
                                         </MDBRow>
                                     </div>
                                 </MDBCol>
                             </MDBRow>
                         </div>
                     </div>
                 </div>
             )
         }
     }


export default withRouter(Products);