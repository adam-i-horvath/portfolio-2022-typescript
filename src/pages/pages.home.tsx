import styled from 'styled-components';

const HomeStyle = styled.div`
  .home {
    height: calc(100vh - 132px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 4vw;
    margin: 20px;
  }
  .name a {
    text-decoration: none;
    color: #000000;
  }
  a:hover {
    text-decoration: underline;
  }
  .text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .text_2 {
    background-color: #000000;
    color: #ffffff;
  }
  .react_image {
    height: 150px;
  }
  @media screen and (max-width: 768px) {
    .home {
      font-size: 6vw;
    }
  }
`;

const Home = () => {
  const react =
    'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png';
  return (
    <>
      <HomeStyle>
        <div className="home">
          <div className="welcome">Hello, my name is</div>
          <div className="name">
            <a href="about">Adam I. Hørvath!</a>👋
          </div>
          <div className="text">
            I am a &nbsp;{' '}
            <p className="text_2"> &nbsp;frontend web developer&nbsp;</p>
            specialised in React.
          </div>
          <img className="react_image" src={react} alt="react" />
        </div>
      </HomeStyle>
    </>
  );
};

export default Home;
