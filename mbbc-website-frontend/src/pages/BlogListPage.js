import React from "react";
import articleContent from "./blog-article-content";
import ArticlesList from "../components/ArticlesList";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint prefer-destructuring: 0 */

const BlogListPage = ({ match }) => {
  const name = match.params.name;

  return (
    <>
      <h1>Articles</h1>
      <div className="article-list">
        <ArticlesList articles={articleContent} />
      </div>
    </>
  );
};

export default BlogListPage;
