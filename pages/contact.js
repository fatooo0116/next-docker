
import Layout from './components/MyLayout.js'
import { Grid, Row, Col  } from 'react-bootstrap';
import Head from 'next/head'
import "../assets/scss/styles.scss";

const Contact = () => (
    <Layout>

    <Head key="3">
      <title>My page title222</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script>  </script>
    </Head>

    <section className="pt-page">
      <div  className="section-inner">
            <div className="section-title-block second-style">
                <h2 className="section-title">Contact</h2>
                <h5 className="section-description">Get in Touch</h5>
            </div>
            <div className="section-content">

            <br/><br/>

            <Row>
              <Col xs={12} xm={12}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.043597411209!2d121.53593497596418!3d25.065033625589756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abfd561f2621%3A0x5f3c6c32dda5e257!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDovrLlronooZcgJiDlu7rlnIvljJfot6_kuInmrrU!5e0!3m2!1szh-TW!2stw!4v1549941286309" width="100%" height="200" frameBorder="0"  allowFullScreen></iframe>
              </Col>
            </Row>

            <br/>

              <Row>
              <Col xs={12} sm={3} >
                      <div className="inner-content">
                          <div className="fill-block">
                            <div className="lm-info-block gray-default">
                                <i className="lnr lnr-phone-handset"></i>
                                          <h4><a href="tel:+886932198085">+886932198085</a></h4>
                              </div>
                          </div>
                      </div>
              </Col>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                              <div className="lm-info-block gray-default">
                                  <i className="lnr lnr-map-marker"></i>
                                            <h4>Taiwan Taipei</h4>
                                </div>
                            </div>
                        </div>
                </Col>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                              <div className="lm-info-block gray-default">
                                  <i className="lnr lnr-envelope"></i>
                                            <h4><a href="mailto:service@wdr.tw">service@wdr.tw</a></h4>
                                </div>
                            </div>
                        </div>
                </Col>
                <Col xs={12} sm={3} >
                        <div className="inner-content">
                            <div className="fill-block">
                              <div className="lm-info-block gray-default">
                                  <i className="lnr lnr-checkmark-circle"></i>
                                            <h4>Freelance Available</h4>
                                </div>
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
