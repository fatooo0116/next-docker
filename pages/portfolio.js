
import Layout from './components/MyLayout.js'
import { Grid, Row, Col  } from 'react-bootstrap';
// import pic1 from '../assets/images/1.jpg';
import fetch from 'isomorphic-unfetch';
import  Link from 'next/link'

import "../assets/scss/styles.scss";


const Portfolio = (props) => (

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

                      {props.shows.map(({show}) => (

                          <Col xs={12} sm={6} key={show.id} >
                                  <figure className="inner-content">
                                      <div className="portfolio-item-img">
                                      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                        <a>
                                        <div  className="tag">Front End</div>
                                          <img src="https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2018/04/blog_post_6_full.jpg" />
                                          <div className="mask">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity">
                                              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                            </svg>
                                        </div>
                                        </a>
                                      </Link>
                                      </div>
                                      <div  className="post-info">
                                          <div className="post-date">06 Apr 2018</div>

                                          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                          <a>
                                            <h4 className="blog-item-title">{show.name}</h4>
                                          </a>
                                          </Link>
                                      </div>
                                  </figure>

                          </Col>
                      ))}

                    </Row>
                  </div>

            </div>
          </section>
    </Layout>
)


Portfolio.getInitialProps = async function(){
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  // console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}



export default Portfolio
