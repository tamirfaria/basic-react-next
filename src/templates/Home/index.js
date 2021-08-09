import React, { Component } from "react";
import "./styles.css";
import { Posts } from "../../components/Posts";
import { loadPostsAndPhotos } from "../../utils/load-post-and-photos";
import { SingleButton } from "../../components/SingleButton";
import { SearchInput } from "../../components/SearchInput";
import { PostsNotFound } from "../../components/PostsNotFound";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };

  loadData = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPostsAndPhotos();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { posts, allPosts, page, postsPerPage } = this.state;
    const nextPage = page + postsPerPage;
    const nextPost = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPost);
    this.setState({ posts, page: nextPage });
  };

  componentDidMount() {
    this.loadData();
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, allPosts, postsPerPage, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.includes(searchValue.toLowerCase());
        })
      : posts;
    return (
      <section className="container">
        <SearchInput onChange={this.handleChange} value={searchValue} />
        {filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <PostsNotFound />
        )}

        {!searchValue && (
          <div className="button-container">
            <SingleButton
              disabled={noMorePosts}
              text="Load more posts"
              onClick={this.loadMorePosts}
            />
          </div>
        )}
      </section>
    );
  }
}

export default Home;
