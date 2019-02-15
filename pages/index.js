import React from 'react'

import Layout from './components/MyLayout.js'
import  Link from 'next/link'

import { Grid, Row, Col  } from 'react-bootstrap';
import Head from 'next/head'


import { menuOpen, menuClose } from '../store'
import { connect } from 'react-redux';


import "../assets/scss/styles.scss"

const Index = (props) => (

  <Layout>

    <Head key="2">
      <title>About | </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script>  </script>
    </Head>

    <section className="pt-page aboutUs">
        <Grid >
         <Row className="show-grid nameTitle">
           <Col sm={12} md={6} lg={6}    className="avatar">
           </Col>
           <Col xs={12} md={6}>

             <div className="inner-content">
              <div className="hp-text-block">
                <p className="aboutme_title">Web developer</p>
                <h2 className="hp-main-title">Mike Hsu</h2>
                <p>Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.</p><p>Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus erat, sed consectetur nunc nulla ac elit. Suspendisse dictum id dui mollis auctor. Etiam id sapien neque. Cras nec rhoncus sem. Mauris metus ligula, varius vel iaculis at, pulvinar tincidunt magna.</p>
                <div className="hp-buttons">
                  <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                </div>
              </div>
            </div>

           </Col>
          </Row>
        </Grid>

        <div className="custom-page-content">
          <Grid>
             <Row>
               <Col sm={12} md={12} lg={12}>
                <div className="block-title">
                    <h3>What I Do<span></span></h3>
                </div>
               </Col>
             </Row>


           <Row>
              <Col sm={12} md={6} lg={6}>
                <div id="info-list-" className="info-list-w-icon">
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                          <i className="lnr lnr-store"></i>
                      </div>
                      <div className="ci-text">
                          <h4>Ecommerce</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                                                                <i className="lnr lnr-laptop-phone"></i>
                                          </div>
                      <div className="ci-text">
                          <h4>Web Design</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                </div>
              </Col>


              <Col sm={12} md={6} lg={6}>
                <div id="info-list-" className="info-list-w-icon">
                    <div className="info-block-w-icon">
                      <div className="ci-icon">

                      </div>
                      <div className="ci-text">
                          <h4>Ecommerce</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                                                                <i className="lnr lnr-laptop-phone"></i>
                                          </div>
                      <div className="ci-text">
                          <h4>Web Design</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={12} lg={12}>
               <div className="block-title">
                   <h3>Resource<span></span></h3>
               </div>
              </Col>

            </Row>
           </Grid>
         </div>
      </section>
  </Layout>

)



export default connect()(Index)
