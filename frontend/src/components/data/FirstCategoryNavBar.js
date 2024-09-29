import React from 'react';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import windowSize from '../utils/windowSize';

const FirstCategoryNavBar = () => {
  const widthSize = windowSize();

  return <>{widthSize > 1200 ? <MenuDesktop /> : <MenuMobile />}</>;
};

export default FirstCategoryNavBar;
