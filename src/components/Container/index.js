import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #064679, #52d5ee, #23a6d5, #fff);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default Container;
