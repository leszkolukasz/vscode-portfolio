import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Łukasz Leszko" />
      <meta name="copyright" content="Łukasz Leszko" />
      <meta
        name="description"
        content="Machine Learning and Mathematics student at MIMUW | Junior Software Engineer at RadCode"
      />
      <meta
        name="keywords"
        content="Łukasz Leszko, Łukasz Leszko developer, Łukasz Leszko portfolio, vscode-portfolio"
      />
      
      <meta property="og:title" content="Łukasz Leszko's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack web developer, aspiring ML Engineer."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Łukasz Leszko',
};
