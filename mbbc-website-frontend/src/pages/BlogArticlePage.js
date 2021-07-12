import React, { useState, useEffect, useRef } from "react";
import articleContent from "./blog-article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import ArticlesList from "../components/ArticlesList";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint prefer-destructuring: 0 */

const BlogArticlePage = ({ match }) => {
  const name = match.params.name;

  // Would be better if it was a db query, instead of loading in all content
  const article = articleContent.find(
    (articleElem) => articleElem.name === name
  );

  if (!article) return <h1>Article does not exist</h1>;

  const otherArticles = articleContent.filter(
    (articleElem) => articleElem.name !== name
  );

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  const loader = useRef();

  useEffect(() => {
    /* add loading here */
    setArticleInfo({ comments: [] });
    loader.current.className = "lds-dual-ring comment-loader";

    const fetchData = async () => {
      const result = await fetch(`/api/blog-article/${name}`);
      const body = await result.json();

      // Check if returned an expected result from db, and not a db error or nothing
      if (
        body != null &&
        Object.prototype.hasOwnProperty.call(body, "comments")
      ) {
        setArticleInfo(body);
      } else {
        setArticleInfo({
          comments: [{ username: "Unable to retrieve comments", name: "" }],
        });
      }

      /* 
        Strange error: Unhandled Rejection (TypeError): Cannot set property 'className' of null
        Shows up when clicking too fast between blog articles
      */
      loader.current.className = "";
    };
    fetchData();
  }, [name]);

  return (
    <>
      <h1 className="article-title">{article.title}</h1>
      <p className="article-details">
        By {article.author} | {article.date}
      </p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h2>Add a comment</h2>
      <AddCommentForm
        postRoute={`/api/blog-article/${name}/add-comment`}
        setArticleInfo={setArticleInfo}
        displayFields={{ name: true, email: false, text: true }}
        buttonText="Comment"
        confirmText="Your comment has been published"
      />
      <h2>Comments</h2>
      <div className="lds-dual-ring comment-loader" ref={loader} />
      <CommentsList comments={articleInfo.comments} />
      <h2>Other Articles</h2>
      <div className="article-list">
        <ArticlesList articles={otherArticles} />
      </div>
    </>
  );
};

export default BlogArticlePage;
