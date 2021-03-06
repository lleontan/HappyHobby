import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashLink as Link } from 'react-router-hash-link';

import '../../utilities/common.css';
let constants = require('../../utilities/constants');

/*
  This file contains the common navigation banner between different pages.
*/
const BANNER_TITLE = "HappyHobby";
const HOMEPAGE_LINK = {
  text: "Home",
  link: "/"
};
class HeaderView extends Component{
  render() {
    return (
      <div className='NavBanner'>
        <div className=''>
          <Link to={HOMEPAGE_LINK.link}>{HOMEPAGE_LINK.text}</Link>
        </div>
        <div className=''>
          MIDDLE
        </div>
        <div className=''>
          RIGHT
        </div>
      </div>);
  }

}
export default HeaderView;
