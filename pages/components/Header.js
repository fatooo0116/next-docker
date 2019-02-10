import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
          <header id="site_header" className="header mobile-menu-hide">
            <div className="header-content clearfix">

            <div  className="my-photo" >
              <a href="https://lmpixels.com/wp/kerge-wp/">
                <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://lmpixels.com/wp/kerge-wp/wp-content/uploads/2018/04/cesar-rincon-160.jpg" alt="image" />
              </a>
            </div>

              <div className="site-title-block">
                <div className="site-title">Alex Smith</div>
              </div>

                {/* Navigation */}
              <div className="site-nav">
                 {/*  Main menu */}
                <ul id="nav" className="site-main-menu">
                  <li>
                    <Link href="/">
                      <a    >Home</a>
                    </Link>
                    <Link href="/resume">
                      <a >Resume</a>
                    </Link>
                    <Link href="/portfolio">
                      <a >Portfolio</a>
                    </Link>
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

    </div>
)

export default Header
