import React from "react";
import Main from "../components/main/Main";
<<<<<<< HEAD
import RenderHeader from "../components/header/RenderHeader";
function main() {
  return (
    <>
      <RenderHeader />
      <Main />
=======
import Header from "../components/header/Header";
import MemoSection from "./../components/memoSection/MemoSection";
import styled from "styled-components";
function main() {
  return (
    <>
      <Header />
      <Layout>
        <MemoSection />
        <Main />
      </Layout>
>>>>>>> 74ea3934d8b3aaeca3a6442d253ed110d762c6f3
    </>
  )
  
}

export default main;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
