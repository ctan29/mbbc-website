import React, { useState, useEffect, useRef } from "react";
import testContent from "./test-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import ArticlesList from "../components/ArticlesList";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint prefer-destructuring: 0 */

const BlogArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = testContent.find((articleElem) => articleElem.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  const loader = useRef();

  useEffect(() => {
    /* add loading here */
    setArticleInfo({ comments: [] });
    loader.current.className = "lds-dual-ring";

    const fetchData = async () => {
      const result = await fetch(`/api/blog-article/${name}`);
      const body = await result.json();

      loader.current.className = "";

      // Check if returned an expected result from db, and not db error or nothing
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
    };
    fetchData();
  }, [name]);

  if (!article) return <h1>Article does not exist</h1>;

  const otherArticles = testContent.filter(
    (articleElem) => articleElem.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <AddCommentForm
        articleName={`/api/blog-article/${name}/add-comment`}
        setArticleInfo={setArticleInfo}
        displayFields={{ name: true, email: true, text: true }}
      />
      <h3>Comments</h3>
      <div className="lds-dual-ring" ref={loader} />
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default BlogArticlePage;
