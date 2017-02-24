import React from 'react';
import Suscription from '../components/Suscription'
import stringsProvider from '../stringsProvider'

/* eslint-disable react/prop-types */
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flex items-center">
          <div className="mw7-l dib-l">
            <h2 className="section__title section__title--about">
            <span className="eau-book">Advanced Eye Center</span>
            </h2>
            <p className="section__content">
              {this.props.strings.about_advanced_eye_center_1}
            </p>
            <p className="section__content">
              {this.props.strings.about_advanced_eye_center_2}
            </p>
          </div>
          <img src={require('../../src/assets/images/surgery.jpg')} alt="Advanced Eye Center" className="pl4-l pl3-m pl3-ns w-40 dib-l"/>
        </div>

        <div className="flex items-center bt bw5 b--white">
          <div className="mw7-l dib-l">
            <h2 className="section__title section__title--about">
              About
              <br/>
              <span className="eau-book">Dr. Belalcazar</span>
            </h2>
            <p className="section__content">
              {this.props.strings.about_belalcazar_1}
            </p>
            <p className="section__content">
              {this.props.strings.about_belalcazar_2}
            </p>
            <p className="section__content">
              {this.props.strings.about_belalcazar_3}
            </p>
          </div>
          <img src={require('../../src/assets/images/rodrigo.jpg')} alt="Advanced Eye Center" className="pl4-l pl3-m pl3-ns w-30 dib-l"/>
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

export default stringsProvider(About);
