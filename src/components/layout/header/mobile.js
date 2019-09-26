import React, { Component } from 'react';

import { translate } from 'react-i18next';

import { Icon, Sidebar, Menu } from 'semantic-ui-react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import mobileHeaderStyles from './mobile.module.css';
import sharedHeaderStyles from './shared.module.css';

class HeaderMobile extends Component {
  state = { visible: false };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, data, navbarItems, t } = this.props;

    const { visible } = this.state;

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          items={navbarItems}
          vertical
          visible={visible}
        >
          {navbarItems.map(navbarItem => (
            <Menu.Item>
              <Link className={mobileHeaderStyles.linkText} to={navbarItem.as}>
                {navbarItem.content}
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item>
            <Link to={`support_us`}>
              <div className={sharedHeaderStyles.supportUsButton}>
                <h3 style={sharedHeaderStyles.supportUsText}>
                  {t('support_us')}
                </h3>
              </div>
            </Link>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={this.handlePusher}
          className={mobileHeaderStyles.sidebarPusher}
        >
          <Menu>
            <Menu.Item>
              <Link to={`/`}>
                <div className={sharedHeaderStyles.imageContainer}>
                  <Img
                    fluid={data.fileName.childImageSharp.fluid}
                    alt="logo"
                  />
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              className={mobileHeaderStyles.sidebarButton}
              position='right'
              onClick={this.handleToggle}
            >
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default translate('layout')(HeaderMobile);
