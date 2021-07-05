import React from "react";
import { Link } from "react-router-dom";

/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
/* eslint react/no-array-index-key: 0 */
/* eslint prefer-destructuring: 0 */

const ArticlesList = ({ articles }) => (
  <>
    <ul>
      {articles.map((article, key) => (
        <Link
          key={key}
          to={`/blog-article/${article.name}`}
          className="article-link"
        >
          <li>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
          </li>
        </Link>
      ))}
    </ul>
  </>
);

export default ArticlesList;
