import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Container, Row, Col } from "react-bootstrap";

import PostsStore from "../../stores/Posts";
import { PostCard, Thumbnail } from "./style";
import When from "../../components/When";

type Props = {
  postsStore: PostsStore
};

class Home extends Component<Props> {
  componentDidMount() {
    this.props.postsStore.getPosts();
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
            {this.renderPosts()}
            <p onClick={() => postsStore.addPost()}>click me</p>
          </When>
        </Row>
      </Container>
    );
  }
}

export default inject("postsStore")(observer(Home));
