let constants = require('../utilities/constants');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './common.css';

/*
  This file contains the common navigation banner between different pages.
*/
const BANNER_TITLE = "HappyHobby";
const HOMEPAGE_LINK = {
  text: "Home",
  link: "/"
};
class HeaderView {
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
module.exports.HeaderView = HeaderView;
