import styled from "styled-components";
import { Col } from "react-bootstrap";

export const PostCard = styled(Col)`
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 250px;
  margin-top: 30px;
  padding: 20px;
`;

export const Thumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
