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
`;

export const Form = styled.form`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 80%;
    border: 1px solid #eee;
    padding: 15px;
    background-color: #eee;
    color: #818181;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 80px;
    height: 40px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 25px;
    transition: 0.3s;
  }

  input:checked + label {
    background: #2f9aff;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 130px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
}))`
  width: 50%;
  height: 45px;
  margin-top: 35px;
  border-radius: 25px;
  background-color: #2f9aff;
  border: 1px solid #2f9aff;
  color: #eee;
  font-weight: bold;
`;
