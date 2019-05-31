import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import PostsStore from "../../stores/Posts";
import { PostCard, Thumbnail, ButtonContainer } from "./style";
import When from "../../components/When";

type Props = {
  postsStore: PostsStore
};

class Home extends Component<Props> {
  componentDidMount() {
    const {postsStore} = this.props
    if (!postsStore.posts.length) postsStore.getPosts();
  }

  renderPost = ({ title, url, id, content }) => {
    return (
      <Col lg={6} key={id}>
        <PostCard>
          <Row>
            <Col>
              <Thumbnail src={url} />
            </Col>
            <Col>
              <p>{title}</p>
              <p>{content}</p>
            </Col>
          </Row>
        </PostCard>
      </Col>
    );
  };

  renderPosts = () => {
    return this.props.postsStore.posts.map(el => {
      return this.renderPost(el);
    });
  };

  render() {
    const { postsStore } = this.props;
    return (
      <Container>
        <Row>
          <When is={!postsStore.posts.length && postsStore.loading}>
            Loading ...
          </When>
          <When is={postsStore.posts.length}>
            <ButtonContainer><Link to="details">Add new Post</Link></ButtonContainer>
            {this.renderPosts()}
          </When>
        </Row>
      </Container>
    );
  }
}

export default inject("postsStore")(observer(Home));
