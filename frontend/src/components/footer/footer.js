import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import './footer.css'

const Footer = () => {
    return (
        <footer>
           <div className="footer-wrap">
               <Container>
                   <Row>
                       <Col lg={4}>
                           <div className="footer__item">
                               <h2 className="footer__title">About us</h2>
                               <img src="./images/logo_t.png" alt="" className="footer__logo"/>
                               <p className="footer__desc">For a mouthwatering meal you’re sure to love, Cafe Alif in
                                   Chicago is the place to be.
                                   Wifi is on the house at Cafe Alif,
                                   so you can stay connected on your mobile device.</p>
                               <div className="social">
                                   <a href="https://facebook.com/" className="fab fa-facebook-f"></a>
                                   <a href="https://twitter.com/" className="fab fa-twitter"></a>
                               </div>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className="footer__item">
                               <h2 className="footer__title">like us on facebook</h2>
                           </div>
                       </Col>
                       <Col lg={4}>
                           <div className="footer__item">
                               <h2 className="footer__title"> contact info</h2>
                               <ul className="footer__contacts-list">
                                   <li><i className="fas fa-map-marker-alt"/>2539 W Devon Ave, Chicago, IL 60659</li>
                                   <li><i className="fas fa-phone"/>(872) 241-9100</li>
                                   <li><i className="far fa-envelope"/>info@cafealif.com</li>
                                   <li><i className="fas fa-globe"/>cafealif.com</li>
                               </ul>
                           </div>
                       </Col>
                   </Row>
               </Container>
           </div>
            <div className="footer-bar">
                <Container>
                    <p>© CafeAlif. Site Developed by Reincarnationlab.com</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;

