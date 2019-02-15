import Header from './Header'

import Head from 'next/head'





const Layout = (props) => (

  <div id="page"  className="App">
    <Header />


    <div id="main"  className="site-main">
      <div className="pt-wrapper">
        {props.children}
      </div>
    </div>
  </div>
)


export default (Layout)
