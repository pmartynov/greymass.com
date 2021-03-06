import React from 'react';
import ReactDOMServer from "react-dom/server"
import { Link } from "gatsby";
import { injectIntl } from 'gatsby-plugin-intl';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  List,
  Message,
  Popup,
  Segment,
} from 'semantic-ui-react';

import Layout from '../components/layout';

import SharedElementsChainLogo from '../components/shared/elements/chainLogo';
import TransitWrapper from '../components/shared/wrappers/transit';

import SEO from '../components/shared/seo';

import anchorLogo from '../images/anchor-blue-icon.svg';
import anchorText from '../images/anchor-dark-text.svg';
import anchorStyles from './anchor.module.css';

class Anchor extends TransitWrapper {
  render() {
    const {
      location,
      intl,
    } = this.props;
    const version = "1.0.3";
    const release = "2020/05/25"
    return (
      <Layout location={location}>
        <SEO
          lang={intl.locale}
          keywords={['anchor', 'wallet', 'eosio', 'mobile', 'desktop', 'eos', 'wax', 'lynx', 'telos', 'greymass']}
          title="Anchor Wallet for Desktop and Mobile"
        />
        <Container>
          <Segment
            basic
            padded="very"
            textAlign="center"
          >
            <Image centered src={anchorLogo} />
            <Image
              src={anchorText}
              style={{
                margin: '2em auto',
                maxWidth: '256px',
              }}
            />
            <Header>{intl.formatMessage({ id: 'anchor_header_one_title' })}</Header>
            <Segment basic>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column textAlign="center" width={8}>
                    <p>{intl.formatMessage({ id: 'anchor_download_desktop' })}</p>
                    <Button
                      as="a"
                      content="Windows"
                      icon="microsoft"
                      href={`https://github.com/greymass/anchor/releases/download/v${version}/win-anchor-wallet-${version}.exe`}
                    />
                    <Button
                      as="a"
                      content="macOS"
                      icon="apple"
                      href={`https://github.com/greymass/anchor/releases/download/v${version}/mac-anchor-wallet-${version}.dmg`}
                    />
                    <Button
                      as="a"
                      content="Linux"
                      icon="linux"
                      href={`https://github.com/greymass/anchor/releases/v${version}`}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column textAlign="center" width={8}>
                    <p>{intl.formatMessage({ id: 'anchor_download_mobile' })}</p>
                    <Button
                      as="a"
                      content="iOS (Beta)"
                      icon="apple"
                      href={`https://testflight.apple.com/join/huZddLBu`}
                    />
                    <Popup
                      content={intl.formatMessage({ id: 'anchor_download_mobile_indev_content' })}
                      header={intl.formatMessage({ id: 'anchor_download_mobile_indev_header' })}
                      position="bottom center"
                      trigger={(
                        <Button
                          basic
                          content="Android"
                          icon="android"
                        />
                      )}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <p style={{ marginTop: '2.5em' }}>
                <a
                  href={`https://github.com/greymass/anchor/releases/${version}`}
                >
                  {intl.formatMessage({ id: 'anchor_updated' })}
                  {' '}
                  {release} ({version})
                </a>
              </p>
            </Segment>
          </Segment>
        </Container>
        <div className={anchorStyles.container}>
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={12}>
                  <Header size="large">
                    Resources
                    <Header.Subheader>
                      While we work to build out more information on this website for Anchor, here are some useful resources.
                    </Header.Subheader>
                  </Header>
                  <Segment size="large">
                    <List size="large" relaxed="very" divided>
                      <List.Item>
                        <List.Header>
                          For users...
                        </List.Header>
                      </List.Item>
                      <List.Item>
                        <a href="https://t.me/anchorwallet">
                          <Icon name="telegram" /> Telegram Group for Anchor
                        </a>
                        {' - '}
                        Support, feedback, and discussion
                      </List.Item>
                      <List.Item>
                        <List.Header>
                          For Developers...
                        </List.Header>
                      </List.Item>
                      <List.Item>
                        <a href="https://t.me/anchorwalletdev">
                          <Icon name="telegram" /> Anchor Wallet Beta
                        </a>
                        {' - '}
                        Group chat for Anchor wallet beta testers.
                      </List.Item>
                      <List.Item>
                        <a href="https://t.me/anchor_link">
                          <Icon name="telegram" /> Anchor Link
                        </a>
                        {' - '}
                        Technical support for Anchor Link website integration.
                      </List.Item>
                      <List.Item>
                        <a href="https://github.com/greymass/anchor">
                          <Icon name="github" /> Desktop Wallet Source (Github)
                        </a>
                        {' - '}
                        The source code for the Anchor desktop wallet
                      </List.Item>
                      <List.Item>
                        <a href="https://github.com/greymass/eosio-signing-request">
                          <Icon name="github" /> EOSIO Signing Request (ESR) Protocol
                        </a>
                        {' - '}
                        Standardized protocol for wallet communication
                      </List.Item>
                      <List.Item>
                        <a href="https://github.com/greymass/anchor-link">
                          <Icon name="github" /> Anchor Link
                        </a>
                        {' - '}
                        Persistent, fast and secure sessions for applications to use Anchor.
                      </List.Item>
                      <List.Item>
                        <a href="https://github.com/greymass/ual-anchor">
                          <Icon name="github" /> Anchor for UAL
                        </a>
                        {' - '}
                        Universal Authentication Library (UAL) plugin for Anchor Link integration.
                      </List.Item>
                      <List.Item>
                        <a href="https://github.com/eosnewyork/eos-transit/tree/master/packages/eos-transit-anchorlink-provider">
                          <Icon name="github" /> Anchor for Transit
                        </a>
                        {' - '}
                        EOS Transit provider for Anchor Link integration.
                      </List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(Anchor);
