import React, { useState, useEffect } from "react";
import testContent from "./test-content";
import ArticlesList from "../components/ArticlesList";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint prefer-destructuring: 0 */

const BlogArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = testContent.find((articleT) => articleT.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/blog-article/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <h1>Article does not exist</h1>;

  const otherArticles = testContent.filter(
    (articleT) => articleT.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default BlogArticlePage;
