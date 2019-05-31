import styled from "styled-components";
import { Row } from "react-bootstrap";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  margin-top: 50px;
`;

export const Label = styled.p`
  width: 100px;
  margin-bottom: 0;
`;

export const FormGroup = styled(Row)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 20px;
  align-self: center;
`;
