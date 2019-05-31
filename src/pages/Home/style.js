import styled from "styled-components";
import { Col } from "react-bootstrap";

export const PostCard = styled(Col)`
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 250px;
  margin-top: 30px;
  padding: 20px;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: all ease-in-out 0.3s;
  }
`;

export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
