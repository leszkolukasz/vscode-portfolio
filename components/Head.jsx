import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
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
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Łukasz Leszko',
};
