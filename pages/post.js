import {withRouter} from 'next/router'
import Layout from './components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

import "../assets/scss/styles.scss";

/*
const Content = withRouter((props) =>(
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))
*/


const Post = withRouter((props) => (
  <Layout>
    <section className="pt-page ">
      <div className="section-inner">
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
      </div>
    </section>
  </Layout>
))



Post.getInitialProps = async function (context) {

  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

  const show = await res.json()
  console.log(`Fetched show: ${show.name}`)

  return {
    show
  }
}




export default Post
