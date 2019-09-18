import styled from 'styled-components';

export const BlockOne = styled.div`
  min-width: 300px;
  background-color: #2f9aff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  color: white;

  p {
    width: 60%;
    text-align: center;
    padding-top: 40px;
  }
`;
export const BlockTwo = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: #2f9aff;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .link {
    border: 1px solid;
  }
  span {
  }
`;
