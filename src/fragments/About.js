import React from 'react';

import Suscription from '../components/Suscription'

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex items-center">
          <div className="mw7-l dib-l">
            <h2 className="section__title section__title--about">
              About<br/>
            <span className="eau-book">Advanced Eye Center</span>
            </h2>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>
          <img src={require('../../src/assets/images/eye-clinic.jpg')} alt="Advanced Eye Center" className="pl4-l w-40 dib-l dn"/>
        </div>


        <div className="flex items-center bt bw5 b--white">
          <div className="mw7-l dib-l">
            <h4 className="copy--about">
              Dr. Rodrigo Belalcazar<br/>
            </h4>
            <p className="section__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>
          <img src={require('../../src/assets/images/rodrigo.jpg')} alt="Advanced Eye Center" className="pl4-l w-30 dib-l dn"/>
        </div>
        <h4 className="copy--about">
          Stay up on Advanced Eye Center news.  <br/>
          Join our mailing list.
        </h4>
        <Suscription />
      </div>

    );
  }
}
