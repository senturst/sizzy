// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//images
import LogoSvg from 'img/logo.svg';

//styled-components
import {Toolbar, ToolbarLeft, ToolbarRight, Logo} from './styles';

//components
import UrlBar from 'components/UrlBar';
import HeaderLink from 'components/HeaderLink';

type Props = {
  store: any | store
};

@inject('store')
@observer
class ToolbarComponent extends Component {
  static defaultProps = {
    store: null
  };

  props: Props;

  render() {
    const {store: {app}} = this.props;
    const {isValidUrl} = app;

    return (
      <Toolbar>

        <ToolbarLeft>
          <Logo
            onClick={app.resetToHome}
            src={LogoSvg}
            alt="Sizzy"
            width="70px"
          />
          {isValidUrl && <UrlBar />}
        </ToolbarLeft>

        <ToolbarRight>
          <HeaderLink
            icon="github"
            text="Code"
            link="https://github.com/kitze/sizzy"
          />
          {false &&
            <HeaderLink
              icon="question-circle"
              text="FAQ"
              link="https://github.com/kitze/sizzy"
            />}
          <HeaderLink
            icon="money"
            text="Support"
            link="https://opencollective.com/sizzy"
          />
          <HeaderLink
            icon="book"
            text="Story"
            link="https://medium.com/@kitze/introducing-sizzy-a-tool-for-developing-responsive-websites-crazy-fast-39a8c0061992"
          />
          <HeaderLink
            icon="video-camera"
            text="Live coding"
            link="https://www.youtube.com/channel/UCP7W-OoVKoqS4BtyHu5eKxg"
          />
          <HeaderLink
            icon="chrome"
            text="Extension"
            link="https://chrome.google.com/webstore/detail/sizzy/nfhlbmjiiogoelaflfclodlkncbdiefo"
          />
        </ToolbarRight>

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
