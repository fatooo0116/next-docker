import Header from './Header'

import Head from 'next/head'


const Layout = (props) => (

  <div id="page"  className="App">

  <Head key="2">
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <script>  </script>
  </Head>



    <Header />
    <div id="main"  className="site-main">
      <div className="pt-wrapper">
        {props.children}
      </div>
    </div>
  </div>
)

export default Layout
