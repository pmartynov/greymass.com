import React, { Component } from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography";

import Layout from '../components/layout';

class Index extends Component {
  render() {
    const { data } = this.props;

    return (
      <Layout>
        { language => (
          <div>
            <h4>Posts</h4>
            {data
              .allMarkdownRemark.edges
              .filter( ({ node }) => node.fields.slug.includes(`${language}/`))
              .map(({ node }) => (
              <div key={node.id}>
              <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
              <h3
              css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
              {node.frontmatter.title}{" "}
              <span
              css={css`
                    color: #bbb;
                  `}
              >
              — {node.frontmatter.date}
              </span>
              </h3>
              <p>{node.excerpt}</p>
              </Link>
              </div>
              ))}
          </div>
        )}
      </Layout>
    )
  }
}

export default Index;


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
