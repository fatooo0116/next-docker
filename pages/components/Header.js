import Link from 'next/link'


import React, { Component } from 'react';
import { connect } from 'react-redux';

import { menuOpen, menuClose } from '../../store'





class Header extends Component {
  constructor(props){
    super(props);
  }


  mobileToggle = () => {
    const { dispatch } = this.props
    
    if(this.props.mobileMenu){
        dispatch(menuClose());
    }else{
        dispatch(menuOpen());
    }
  }





  render(){



    let mobileMenuClass = "";
    if(this.props.mobileMenu){
      mobileMenuClass = 'header ';
    }else{
      mobileMenuClass = 'header mobile-menu-hide';
    }




    return(
        <div>
              <header id="site_header" className={mobileMenuClass}>
                <div className="header-content clearfix">

                <div  className="my-photo" >
                  <a href="https://lmpixels.com/wp/kerge-wp/">
                    <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2018/04/cesar-rincon-160.jpg" alt="image" />
                  </a>
                </div>

                  <div className="site-title-block">
                    <div className="site-title">Mike<br/> Hsu</div>
                  </div>

                    {/* Navigation */}
                  <div className="site-nav">
                     {/*  Main menu */}
                    <ul id="nav" className="site-main-menu">
                      <li>
                        <Link href="/">
                          <a>About me</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/resume">
                          <a >Resume</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/portfolio">
                          <a >Portfolio</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a >Contact</a>
                        </Link>
                      </li>

                    </ul>
                    {/* /Main menu */}
                  </div>
                  {/* Navigation */}

                  {/* Social Links */}
                  <div className="social-links">
                    <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  {/* Social Links */}

                  <div className="copyrights">© 2018 All rights<br/> reserved.</div>
                  {/*  Copyrights */}
                </div>
              </header>


              <div className="mobile-header mobile-visible">
                <div className="mobile-logo-container">
                    <div className="mobile-header-image">
                        <a href="/">
                        <img src="/static/cesar-rincon-160.jpg" />
                        </a>
                    </div>
                    <div className="mobile-site-title">
                        <a href="https://lmpixels.com/wp/kerge-wp/">Alex Smith</a>
                    </div>
                </div>
                <a className="menu-toggle mobile-visible"  onClick={this.mobileToggle}>
                  <span className="b1"></span>
                  <span className="b2"></span>
                  <span className="b3"></span>
                </a>
            </div>

        </div>
    )
  }
}


function mapStateToProps (state) {
  const { mobileMenu } = state
  return { mobileMenu }
}



export default connect(mapStateToProps)(Header)
