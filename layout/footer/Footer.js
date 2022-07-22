/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
   return (
      <div className="footer4 b-t spacer">
         <Container>
            <Row>
               <Col lg="3" md="6" className="m-b-30">
                  <h5 className="m-b-20">Address</h5>
                  <p>Harisiddhi-28, Lalitpur, Satdobato-Godawari Road <br />44700</p>
               </Col>
               <Col lg="3" md="6" className="m-b-30">
                  <h5 className="m-b-20">Phone</h5>
                  <p>
                     Reception : +977 984 9397242 <br />
                     Office : +977 984 9397242
                  </p>
               </Col>
               <Col lg="3" md="6" className="m-b-30">
                  <h5 className="m-b-20">Email</h5>
                  <p>
                     Office :
                     <Link href="#">
                        <a className="link">bnaysm@gmail.com</a>
                     </Link>
                     <br />
                     Site :
                     <Link href="https://www.binaymaharjan7.com">
                        <a className="link">binaymaharjan7.com</a>
                     </Link>
                  </p>
               </Col>
               <Col lg="3" md="6">
                  <h5 className="m-b-20">Social</h5>
                  <div className="round-social light">
                     <Link href="#">
                        <a className="link">
                           <i className="fa fa-facebook"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a className="link">
                           <i className="fa fa-twitter"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a className="link">
                           <i className="fa fa-google-plus"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a className="link">
                           <i className="fa fa-youtube-play"></i>
                        </a>
                     </Link>
                     <Link href="#">
                        <a className="link">
                           <i className="fa fa-instagram"></i>
                        </a>
                     </Link>
                  </div>
               </Col>
            </Row>
            <div className="f4-bottom-bar">
               <Row>
                  <Col md="12">
                     <div className="d-flex font-14">
                        <div className="m-t-10 m-b-10 copyright">
                           All Rights Reserved by{" "}
                           <Link href="https://www.binaymaharjan7.com">
                              <a className="link">binaymaharjan7.com</a>
                           </Link>
                        </div>
                        <div className="links ml-auto m-t-10 m-b-10">
                           <Link href="#">
                              <a className="p-10 p-l-0">Terms of Use</a>
                           </Link>
                           <Link href="#">
                              <a className="p-10">Legal Disclaimer</a>
                           </Link>
                           <Link href="#">
                              <a className="p-10">Privacy Policy</a>
                           </Link>
                        </div>
                     </div>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};
export default Footer;
