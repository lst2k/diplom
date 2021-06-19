import Head from 'next/head'


const Seo = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,shrink-to-fit=no,initial-scale=1,maximum-scale=1,user-scalable=0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="theme-color" content="#141416" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
    </Head>
  )
}

Seo.defaultProps = {
  title: 'graphic-studio'
}

export default Seo
