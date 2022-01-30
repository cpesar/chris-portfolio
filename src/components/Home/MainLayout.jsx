import styled from "styled-components";

import Mountains from "../../assets/Images/Mountains.jpeg";

const Background = styled.div`
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: fixed;
  background-image: url(${Mountains});
  /* padding: 1.7rem 3.8rem 0 3.8rem; */
`;

const MainLayout = () => {
  return (
    <>
      <Background />
    </>
  );
};

export default MainLayout;
