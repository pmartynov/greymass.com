import React, { Component } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import getStartedStyles from "./getStarted.module.css";
import getStarted from "./getStarted";

class Banners extends Component {
  render() {
    const { intl } = this.props;
    return (
      <div className={getStartedStyles.banners}>
        <div className={getStartedStyles.helpBanner}>
          <div className={getStartedStyles.helpBannerBack}>
            <h2 className={getStartedStyles.bannerHeader}>
              {intl.formatMessage({ id: "anchor_help_banner_header" })}
            </h2>
            <div className={getStartedStyles.helpBannerSubheadings}>
              <span className={getStartedStyles.subheading}>
                {intl.formatMessage({ id: "anchor_help_banner_subheading" })}
              </span>

              <span className={getStartedStyles.subheading}>
                {intl.formatMessage({ id: "anchor_help_banner_visit" })}
              </span>
            </div>
            <button>
              {intl.formatMessage({ id: "anchor_help_banner_forums" })}
            </button>
          </div>
        </div>
        <div className={getStartedStyles.voteBanner}>
          <div className={getStartedStyles.voteBannerBack}>
            <h2 className={getStartedStyles.bannerHeader}>
              {intl.formatMessage({ id: "anchor_vote_banner_header" })}
            </h2>
            <span className={getStartedStyles.subheading}>
              {intl.formatMessage({ id: "anchor_vote_banner_subheading" })}
            </span>
            <button>
              {intl.formatMessage({ id: "anchor_vote_banner_vote_us" })}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Banners);