import React from 'react';

import { Element } from 'react-scroll';

import { LogoUpHorizontal } from '../assets/img/svg/LogoUpHorizontal';

const Logo = () => {
  return (
    <Element name="scrollTop">
      <div id="bgLogo">
        <div>
          <div>{LogoUpHorizontal}</div>
        </div>
      </div>
    </Element>
  );
};

export default Logo;
