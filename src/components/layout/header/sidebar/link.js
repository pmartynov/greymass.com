import React, { Component } from 'react';

import { Link } from 'gatsby';

import linkStyles from './link.module.css'

class LayoutHeaderSidebarLink extends Component {
  state = {};

  render() {
    const { navbarItem } = this.props;
    const { displayDropdown } = this.state;

    return (
      <div className={linkStyles.container}>
        {navbarItem.dropdown ? (
          <>
            <button
              className={linkStyles.linkText}
              onClick={() => this.setState(state => {
                return { displayDropdown: !state.displayDropdown }
              })}
            >
              {navbarItem.content}
            </button>
            <div className={linkStyles.dropdown}>
              {displayDropdown && navbarItem.dropdown}
            </div>
          </>
        ) : (
          <Link className={linkStyles.linkText} to={navbarItem.as}>
            {navbarItem.content}
          </Link>
        )}
      </div>
    )
  }
}

export default LayoutHeaderSidebarLink;
