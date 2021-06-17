import Head from 'next/head'


const Seo = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
      <meta name="description" content="MedID me is a new generation healthcare service" />
      <meta name="keywords" content="Medical Covid Medicine" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
    </Head>
  )
}

Seo.defaultProps = {
  title: 'graphic-studio'
}

export default Seo
