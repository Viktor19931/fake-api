import React, { Component } from "react";
import { Formik } from "formik";
import { observer, inject } from "mobx-react";

import PostsStore from "../../stores/Posts";
import { Wrapper, Label, FormGroup, Button } from "./style";
import { Link } from "react-router-dom";

type Props = {
  postsStore: PostsStore
};

class PostPreview extends Component {
  handleSubmit = (data: Object, actions) => {
    this.props.postsStore.addPost(data);
    actions.resetForm({ title: "", content: "", image: "" });
  };
  render() {
    return (
      <Wrapper>
        <Link to="/">
          {" "}
          <Button>Check Posts</Button>
        </Link>
        <Formik
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, handleChange, handleBlur, values }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="title"
                />
              </FormGroup>
              <FormGroup>
                <Label>Content</Label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="content"
                />
              </FormGroup>
              <FormGroup>
                <Label>Image link</Label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="image"
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>
          )}
        />
      </Wrapper>
    );
  }
}

export default inject("postsStore")(observer(PostPreview));
