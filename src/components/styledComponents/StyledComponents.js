import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
`;

export const GeneralButton = styled.button`
  background: #0099ff;
  background-image: -webkit-linear-gradient(top, #0099ff, #1b3545);
  background-image: -moz-linear-gradient(top, #0099ff, #1b3545);
  background-image: -ms-linear-gradient(top, #0099ff, #1b3545);
  background-image: -o-linear-gradient(top, #0099ff, #1b3545);
  background-image: linear-gradient(to bottom, #0099ff, #1b3545);
  -webkit-border-radius: 12;
  -moz-border-radius: 12;
  border-radius: 12px;
  -webkit-box-shadow: 3px 3px 3px #000000;
  -moz-box-shadow: 3px 3px 3px #000000;
  box-shadow: 3px 3px 3px #000000;
  font-family: cursive;
  color: #000000;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
  border: solid #0f0f0f 1px;
  text-decoration: none;
  margin-top: 12px;
`;

export const LoginHeader = styled.header`
  font-family: cursive;
  margin: 30px;
`;

export const LoginInput = styled.input`
background: white;
box-shadow: 0 0 2em #e6e9f9;
padding: 10px;
margin-top: 20px;
display: flex;
border-radius: 20px;
color #000000;
`;

export const FormContainer = styled.header`
  -webkit-box-shadow: 0px 0px 68px 0px rgb(57, 44, 57);
  padding: 20px;
  border-radius: 20px;
`;

export const MenuProductTd = styled.td`
  font-size: 20px;
  font-family: cursive;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;
  background: #aaaa99;
  width: 500px;
  border-radius: 10px;
  margin-top: 6px;
  border: 1px solid rgb(249, 214, 251);
`;

export const TdInside = styled.td`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 750px;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 70px;
  text-shadow: 4px 4px rgb(0, 0, 0);
  color: rgb(0, 101, 179);
  font-family: cursive;
`;

export const Forms = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const LoginForms = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
