import { init, track } from "insights-js";

import { ArticleCard } from "../article-card";
import { SponsorCard } from "../sponsor-card";

import "./index.css";

export const FeaturedArticles = () => {
  init(process.env.REACT_APP_INSIGHTS_ID);

  function trackArticleClicks({ title, destination }) {
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
      <h3 className="featured-articles-heading">Featured content</h3>
      <ul className="reset-list featured-articles-list">
        <li>
          <ArticleCard>
            <div className="article-card-copy">
              <h4>Sustainable Web Design</h4>
              <p>
                The internet may be digital, but it carries a very physical
                cost. From image files to colors to coding languages to servers,
                the choices we make in our web work can eat up electricity and
                spit out carbon—and as the internet grows, so does the cost to
                the environment.
              </p>
            </div>
            <a
              href="https://abookapart.com/products/sustainable-web-design"
              onClick={() =>
                trackArticleClicks({
                  title: "Sustainable Web Design",
                  destination: "https://abookapart.com/",
                })
              }
            >
              Read more
            </a>
          </ArticleCard>
        </li>
        <li>
          <SponsorCard>
            <div className="sponsor-card-copy">
              <h4>Support Henry Zhu</h4>
              <p>
                Maintainer of{" "}
                <a href="https://github.com/babel/babel">Babeljs</a>
              </p>
              <p>
                I care deeply about open source as a whole; not just asking the
                hard questions but{" "}
                <a href="https://www.henryzoo.com/living-out-in-faith">
                  living them out
                </a>
                .
              </p>
            </div>
            <a
              className="sponsor-link"
              href="https://github.com/sponsors/hzoo"
              onClick={() =>
                trackArticleClicks({
                  title: "Support Henry Zhu",
                  destination: "https://github.com",
                })
              }
            >
              Support
            </a>
          </SponsorCard>
        </li>
        <li>
          <ArticleCard>
            <div className="article-card-copy">
              <h4>
                A beginner’s guide to learning to code with GitHub Codespaces
              </h4>
              <p>
                When you’re new to coding, it’s easy to get stuck completing
                endless tutorials. You can apply what you’ve learned (and learn
                even more) through GitHub Codespaces. The best part is you don’t
                need a powerful computer to get started.
              </p>
            </div>
            <a
              href="https://github.blog/2023-02-22-a-beginners-guide-to-learning-to-code-with-github-codespaces/"
              onClick={() =>
                trackArticleClicks({
                  title:
                    "A beginner’s guide to learning to code with GitHub Codespaces",
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
