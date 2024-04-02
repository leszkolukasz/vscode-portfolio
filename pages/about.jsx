import styles from "../styles/AboutPage.module.css"

const AboutPage = () => {
  return (
    <>
    <div className={styles.container}>
      <h3>A Little Bit About Me (Work in progres)</h3>

      <p>I am a software engineer specializing in web development. Currently pursuing bachelor's degree in Computer Science and Mathematics at University of Warsaw and working as Junior Software Engineer at Cognizant.</p>

      <p>Computer science and mathematics have always been my passion that has driven me to spend hours upon hours solving complex problems, and discovering new ways to create a better software. In recent years, I have tried many different fields of computer science, yet application of algorithms has always been dearest to my heart. Because of that I have spend whole high school preparing for Polish Olympiad in Informatics and participating in competitive programming contests. This is also where my interest in AI stemmed from. Machine learinng is a combination of both algorithmic knowledge and mathematics, which is why it engrossed me so much and is my main point of interest till today.</p>
    </div>
    <div className={styles.container}>
      <h3>Activities</h3>
      <ul>
        <li>Open Source contributor (Libre Office) <a href="https://gerrit.libreoffice.org/c/core/+/131711">&lt;link&gt;</a></li>
        <li>Competitive programmer <a href="https://codeforces.com/profile/Whistleroosh">&lt;link&gt;</a></li>
      </ul>
    </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
