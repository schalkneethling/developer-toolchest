import { init, track } from "insights-js";

import { ArticleCard } from "../article-card";

import "./index.css";

export const FeaturedArticles = () => {
  init(process.env.REACT_APP_INSIGHTS_ID);

  function trackArticleClicks({ title, destination }) {
    console.log("Tracking article click", title, destination);
    track({
      event: "click",
      id: "featured-article",
      parameters: {
        destination,
        title,
      },
    });
  }

  return (
    <aside className="featured-articles">
      <h3 className="featured-articles-heading">Featured articles</h3>
      <ul className="reset-list featured-articles-list">
        <li>
          <ArticleCard>
            <div className="article-card-copy">
              <h4>font-palette</h4>
              <p>
                The <code>font-palette</code> CSS property allows specifying one
                of the many palettes contained in a font that a user agent
                should use for the font. Users can also override the values in a
                palette or create a new palette by using the{" "}
                <code>@font-palette-values</code> at-rule.
              </p>
            </div>
            <a
              href="https://developer.mozilla.org/docs/Web/CSS/font-palette"
              onClick={() =>
                trackArticleClicks({
                  title: "font-palette",
                  destination: "https://developer.mozilla.org/",
                })
              }
            >
              Read more
            </a>
          </ArticleCard>
        </li>
        <li>
          <ArticleCard>
            <div className="article-card-copy">
              <h4>
                How Playwright Can Help You Write Better Tests by Separating
                Test and Production Data
              </h4>
              <p>
                While we implement the changes, we want to ensure we do not
                regress now or in the future. We also want to use Playwright in
                a test-driven manner. We immediately faced the challenge of
                separating the production data from the test data.
              </p>
            </div>
            <a
              href="https://schalkneethling.com/posts/how-playwright-can-help-you-write-better-tests"
              onClick={() =>
                trackArticleClicks({
                  title:
                    "How Playwright Can Help You Write Better Tests by Separating Test and Production Data",
                  destination: "https://schalkneethling.com",
                })
              }
            >
              Read more
            </a>
          </ArticleCard>
        </li>
        <li>
          <ArticleCard>
            <div className="article-card-copy">
              <h4>
                Creating an accessible search experience with the QueryBuilder
                component
              </h4>
              <p>
                GitHub is the home for all developers, including those with
                disabilities. We don’t want to stop at making GitHub accessible;
                we want to empower other developers to make a similar pattern
                accessible, which is why we’ll be open sourcing this component!
              </p>
            </div>
            <a
              href="https://github.blog/2022-12-13-creating-an-accessible-search-experience-with-the-querybuilder-component/"
              onClick={() =>
                trackArticleClicks({
                  title:
                    "Creating an accessible search experience with the QueryBuilder component",
                  destination: "https://github.blog/",
                })
              }
            >
              Read more
            </a>
          </ArticleCard>
        </li>
      </ul>
    </aside>
  );
};
