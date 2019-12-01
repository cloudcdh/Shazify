import React from "react";
import styled from "styled-components";
import GithubCorner from "react-github-corner";
import { Grid } from '../../styled';

const Header = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  
  @media only screen and (max-width: 600px) {
    font-size: 45px;
  }
`;

const Title = styled.p`
  font-size: 25px;
  margin: 0;
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const LoginButton = styled.a`
  color: gray;
  border: none;
  color: #444444;
  margin: 10px auto;
  padding: 15px 50px;
  border-radius: 100px;
  display: inline-block;
  background: linear-gradient(to top, #78ffd6, #a8ff78);

  :hover {
    color: #444444;
    text-decoration: none;
  }
  :focus,:active {
    outline:0;
  }
`;

const Information = styled.p`
  color: white;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 10px;
`;

const Container = styled(Grid)`
  grid-auto-flow: row;
  height: 100vh;
`;


const Home = props => {
  const { history } = props;
  if (localStorage.getItem("accessToken") !== null) history.push("/home");
  return (
    <Container className='gradDynamic'>
      <div>
        <Header>Welcome to Shazify</Header>
        <Title>Search, Choose, Listen.</Title>
        <LoginButton href="http://localhost:8888/login" >
          LOGIN
        </LoginButton>
        <GithubCorner
          href="https://github.com/orifmilod/iSpotify"
          target="_blank"
          rel="noopener noreferrer"
          bannerColor="#000000"
          octoColor="#ffffff"
        />
      </div>
      <Information>
        made by orif milod <br />
        You can only login using Spotify account. <i className="fab fa-spotify" />
      </Information>
    </Container>
  );
};

export default Home;
