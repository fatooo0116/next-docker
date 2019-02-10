import React from 'react'

import Layout from './components/MyLayout.js'
import  Link from 'next/link'
import { Grid, Row, Col  } from 'react-bootstrap';

import fetch from 'isomorphic-unfetch'
import "../assets/scss/styles.scss"

const Index = (props) => (
  <Layout>

    <section className="pt-page aboutUs">
        <Grid >
         <Row className="show-grid">
           <Col sm={12} md={6} lg={6}    className="avatar">

            <img  src="https://s2.yimg.com/uu/api/res/1.2/sSVQkq_UsTVoSdorWAs0Ww--~B/Zmk9dWxjcm9wO2N3PTQ5MztkeD0zMDc7Y2g9MjkxO2R5PTgzO3c9MzkyO2g9MzA4O2NyPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/zh-Hant-TW/homerun/mirrormedia.mg/ef0029674523f1b02691978e2ca48d4c" height="210" alt="忙驗票暴瘦8公斤 女科長病逝" id="yui_3_12_0_3_1548313169463_973" />

           <h1>Batman TV Shows</h1>
           <ul>
             {props.shows.map(({show}) => (
               <li key={show.id}>
                 <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                   <a>{show.name}</a>
                 </Link>
               </li>
             ))}
           </ul>

           </Col>
           <Col xs={6} md={4}>

             <div className="inner-content">
              <div className="hp-text-block">

                <h2 className="hp-main-title">Alex Smith</h2>
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
              <Col xs={6} sm={6} md={3} lg={3}>

              </Col>
            </Row>
           </Grid>
         </div>
      </section>



  </Layout>
)



Index.getInitialProps = async function(){
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}


export default Index
