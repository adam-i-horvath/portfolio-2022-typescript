import styled from 'styled-components';
import jsonData from '../data/data.about.technologies.json';

const AboutStyle = styled.div`
  text-align: center;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;

  .avatar {
    height: 200px;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid var(--lightgray);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
  h1 {
    text-align: center;
    padding: 20px;
  }
  h2 {
    text-align: justify;
  }
  h3 {
    padding: 20px;
  }
`;

const JSONstyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .tech__img {
    height: 150px;
    width: 150px;
  }
  .tech__items {
    margin: 20px;
    padding: 10px;
  }
`;

const About = () => {
  return (
    <>
      <AboutStyle className="about">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/94993396?v=4"
          alt="me"
        />
        <h1>
          Hi, my name is Adam Horvath, but you can just call me Adam or Adi. 👽
        </h1>
        <h3>About me</h3>
        <h2 className="line_1">
          I am a self-taught web developer. Since my childhood, i love art and
          design. I always try to design stuff with my unique point of view. I
          also love to create things that can be usefull to others. 🤓 I started
          coding since I was in high school. Coding is also an art for me. I
          love it and now I have the opportunity to design along with the
          coding. My vision is to make the world a better place.
        </h2>
        <h3 className="line_2">
          It is time for us to create more good stuff that helps for it to
          become a better place.
        </h3>
        <h3>Languages and Tools</h3>
        <JSONstyle>
          {jsonData.map((jsonDatas) => (
            <div className="tech" key={jsonDatas.id}>
              <div className="tech__items">
                <img
                  className="tech__img"
                  src={jsonDatas.image_url}
                  alt="technologies"
                />
                <p>{jsonDatas.technologies}</p>
              </div>
            </div>
          ))}
        </JSONstyle>
      </AboutStyle>
    </>
  );
};

export default About;
