
import Layout from './components/MyLayout.js'
import { Grid, Row, Col  } from 'react-bootstrap';
import "../assets/scss/styles.scss";
import Head from 'next/head'

const Resume = () => (
    <Layout>

    <Head key="2">
      <title>Resume | </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script>  </script>
    </Head>

      <section className="pt-page">
        <div  className="section-inner">
              <div className="section-title-block second-style">
                  <h2 className="section-title">Resume</h2>
                  <h5 className="section-description">7 Years of Experience</h5>
              </div>

              <div className="section-content">
                <Row>
                  <Col xs={12} sm={8} >
                    <div className="col-inner">
                      <div className="block-title">
                        <h3>Education</h3>
                      </div>

                      <div className="timeline timeline-second-style bs-30 clearfix">
                                                <div className="timeline-item clearfix">
                                                  <div className="left-part">
                                                    <h5 className="item-period">2008</h5>
                                                    <span className="item-company">University of Studies</span>
                                                  </div>
                                                  <div className="divider"></div>
                                                  <div className="right-part">
                                                    <h4 className="item-title">Fronted Development</h4>
                                                    <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                                                  </div>
                                                </div>

                                                <div className="timeline-item clearfix">
                                                  <div className="left-part">
                                                    <h5 className="item-period">2007</h5>
                                                    <span className="item-company">University of Studies</span>
                                                  </div>
                                                  <div className="divider"></div>
                                                  <div className="right-part">
                                                    <h4 className="item-title">Graphic Design</h4>
                                                    <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                                                  </div>
                                                </div>
                        </div>
                    </div>

                    <div className="col-inner">
                      <div className="block-title">
                        <h3>Experience</h3>
                      </div>

                      <div className="timeline timeline-second-style bs-30 clearfix">
                                                <div className="timeline-item clearfix">
                                                  <div className="left-part">
                                                    <h5 className="item-period">2008</h5>
                                                    <span className="item-company">University of Studies</span>
                                                  </div>
                                                  <div className="divider"></div>
                                                  <div className="right-part">
                                                    <h4 className="item-title">Fronted Development</h4>
                                                    <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                                                  </div>
                                                </div>

                                                <div className="timeline-item clearfix">
                                                  <div className="left-part">
                                                    <h5 className="item-period">2007</h5>
                                                    <span className="item-company">University of Studies</span>
                                                  </div>
                                                  <div className="divider"></div>
                                                  <div className="right-part">
                                                    <h4 className="item-title">Graphic Design</h4>
                                                    <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                                                  </div>
                                                </div>
                        </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={4} >
                    <div className="col-inner">
                      <div className="block-title">
                        <h3>Design Skills</h3>
                      </div>
                      <div className="clearfix">
                            <h4>Web Design</h4>
                            <div className="skill-value">95%</div>
                      </div>
                      <div className="skill-container">
                            <div className="skill-percentage skill-1"></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>




        </div>
      </section>


    </Layout>
)

export default Resume
