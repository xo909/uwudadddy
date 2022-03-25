import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;



export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
      </Hero>
      <div class="center">
        <h2>Hello! this is the creator of lila, and i wanted to say this is kinda of a protest agaist schools using NetRef mostly and that it's an invasion of privacy.</h2>
        <h1>___________________________________________________________</h1>
        <h2>NetRef can't see HTML files, so it wont be logged on the NetRef panel which is pretty nice</h2>
        <h1>___________________________________________________________</h1>
        <h2>Please suggest games! Join the discord :) </h2><a href='https://discord.gg/VRYUughAGq'>Here!</a>
      </div>

    </>
  );
}
