import React from 'react'
import Map from '../components/Map';

export default class Venue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mw80 center">
        <div className="ph0-l pt0-l">
          <h2 className="section__title section__title--venue">Location</h2>
          <div className="content__container">
            <p className="section__content venue__content w-two-thirds-l dib-l mh0-l ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr className="venue__divide--horizontal-line"/>
            <div className="w-third-l dib-l bw1 bl--solid-l venue__address">
              <p className="white ttu eau-book mb1 f3 mv3-l">Address</p>
              <p className="venue__content venue__content__address">
                <span className="ttu">1840 W 49th St #601</span>
                <br />
                Hialeah, FL 33012
              </p>
              {/*
              <a href="http://www.rutanmedellin.org/" className="btn btn--venue">
                Website
              </a>
              */}
            </div>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}
