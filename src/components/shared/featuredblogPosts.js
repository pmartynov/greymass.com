import React, { Component } from "react"

import { Icon, Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import FeaturedBlogPostsCard from './featuredBlogPosts/card';
import Header from './header';

import featuredBlogPostsStyles from './featuredBlogPosts.module.css';

class FeaturedBlogPosts extends Component {
  render() {
    const {
      data,
      i18n,
      primary,
      t,
      title
    } = this.props;

    const featuredBlogPosts =
      data.allMarkdownRemark.edges
          .filter(({ node }) => node.fields.slug.includes(`${i18n.language}/`));

    return (
      <div className={featuredBlogPostsStyles.container}>
        {primary ? (
          <Header title={t(title)} />
        ) : (
          <h4 className={featuredBlogPostsStyles.headerText}>
            {t(title)}
          </h4>
        )}

        <Grid container stackable centered padded>
          <FeaturedBlogPostsCard
            linkTo={featuredBlogPosts[0].node.fields.slug}
            primary
            text={featuredBlogPosts[0].node.frontmatter.title}
          />
          {featuredBlogPosts.slice(1).map(featuredBlogPost => (
            <FeaturedBlogPostsCard
              linkTo={featuredBlogPost.node.fields.slug}
              text={t(featuredBlogPost.node.frontmatter.title)}
            />
          ))}
        </Grid>
        <div style={{ padding: '60px', paddingBottom: '70px' }}>
          <Link className={featuredBlogPostsStyles.supportUsLink} to={`projects`}>
            {t('blog_posts_link')}
            <Icon name="arrow right" style={{ marginLeft: '5px'}} />
          </Link>
        </div>
      </div>
    )
  }
}

const FeaturedBlogPostsWrapper = translate()(FeaturedBlogPosts);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturedBlogPostsWrapper data={data} {...props} />}
  />
);
