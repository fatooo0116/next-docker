
import Layout from './components/MyLayout.js'
import { Grid, Row, Col  } from 'react-bootstrap';

import "../assets/scss/styles.scss";

const Contact = () => (
    <Layout>
    <section className="pt-page">
      <div  className="section-inner">
            <div className="section-title-block second-style">
                <h2 className="section-title">Contact</h2>
                <h5 className="section-description">Get in Touch</h5>
            </div>
            <div className="section-content">
              <Row>
                <Col sm={12} md={12} lg={12}>
                        <div className="inner-content">
                            <div className="fill-block">
                                <div  className="map" >Map</div>
                            </div>
                        </div>
                </Col>
              </Row>


              <Row>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                                <div  className="map" >Map</div>
                            </div>
                        </div>
                </Col>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                                <div  className="map" >Map</div>
                            </div>
                        </div>
                </Col>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                                <div  className="map" >Map</div>
                            </div>
                        </div>
                </Col>
              </Row>
              <br/><br/>
              <Row>
                <Col xs={2} xm={2} ></Col>
                <Col xs={8} xm={8} >
                  <div className="block-title">
                      <h3>How Can I Help You?<span></span></h3>
                  </div>

                        <div className="inner-content">
                          <form >
                            form
                          </form>
                        </div>
                </Col>
              </Row>

            </div>




      </div>
    </section>

    </Layout>
)

export default Contact
