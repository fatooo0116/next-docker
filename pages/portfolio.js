
import Layout from './components/MyLayout.js'
import { Grid, Row, Col  } from 'react-bootstrap';
// import pic1 from '../assets/images/1.jpg';

import  Link from 'next/link'

import "../assets/scss/styles.scss";


const Portfolio = () => (

    <Layout>

          <section className="pt-page  mywork">
            <div  className="section-inner">
                  <div className="section-title-block second-style">
                      <h2 className="section-title">Portfolio</h2>
                      <h5 className="section-description">My Work</h5>
                  </div>
                  <div className="section-content  allportfolio">
                    <Row className="filter">
                      <Col sm={12} md={12} lg={12}>
                          <div  className="portfolio">
                            <ul>
                              <li><a href="#" className="active">All</a></li>
                              <li><a href="#" className="">Frontend</a></li>
                              <li><a href="#" className="">Website</a></li>
                              <li><a href="#" className="">CRM</a></li>
                              <li><a href="#" className="">Ecommerce</a></li>
                            </ul>
                          </div>
                      </Col>
                    </Row>


                    <Row>
                      <Col xs={12} sm={4} >
                              <figure className="inner-content">
                                  <div className="portfolio-item-img">
                                  <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                    <Link href="/"><a    >Home</a></Link>
                                  </div>
                              </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                <Link href="/"><a    >Home</a></Link>
                            </div>
                        </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                              <Link href="/"><a    >Home</a></Link>
                            </div>
                        </figure>
                      </Col>

                      <Col xs={12} sm={4} >
                              <figure className="inner-content">
                                  <div className="portfolio-item-img">
                                  <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                      <Link href="/"><a    >Home</a></Link>
                                  </div>
                              </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                              <Link href="/"><a    >Home</a></Link>
                            </div>
                        </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                              <Link href="/"><a >Home</a></Link>
                            </div>
                        </figure>
                      </Col>

                      <Col xs={12} sm={4} >
                              <figure className="inner-content">
                                  <div className="portfolio-item-img">
                                    <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                    <Link  href="/" ><a>Home</a></Link>
                                  </div>
                              </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                              <Link href="/"><a    >Home</a></Link>
                            </div>
                        </figure>
                      </Col>
                      <Col xs={12} sm={4} >
                        <figure className="inner-content">
                            <div className="portfolio-item-img">
                            <img src="https://images.pexels.com/photos/412681/pexels-photo-412681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                                <Link href="/"><a    >Home</a></Link>
                            </div>
                        </figure>
                      </Col>
                    </Row>
                  </div>

            </div>
          </section>
    </Layout>
)

export default Portfolio
