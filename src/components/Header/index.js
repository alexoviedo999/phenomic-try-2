import React, { Component } from 'react'
import { connect } from 'react-redux';
import Nav from "../Nav"
import {strings} from '../../metadata'
import {setLanguage} from '../../redux/language'

class Hero extends Component {
  toggleLan() {
    let lan = this.props.lan === "english" ? "español" : "english";
    this.props.setLanguage(lan);
  }

  render() {
    return (
      <div id="particles-js" className="w-100 gradient h-650">
        <Nav />
        <div className="mw80 w-100 center relative eye-image">
          <header className="w-100 tr pa2 pa3-m pa4-l tc tr-m tr-l">
            <div className="fr cf pa2 pa3-m pa4-l mr40 mr4-m mr4-l hero-wrap">
              <h1 className="home__title home__title--scaleconf mt0">Rodrigo Belalcazar, MD PLLC</h1>
              <h1 className="home__title home__title--colombia">Advanced Eye Center </h1>
              <p className="home__date">
                South Florida
              </p>
              <a className="btn btn--home" href="https://ti.to/colombia-dev/scaleconfco">
                Contact Us
              </a>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lan: state.language
});

const mapDispatchToProps = dispatch => {
  return ({
    setLanguage: lan => dispatch(setLanguage(lan))
  });
}

export default connect( mapStateToProps, mapDispatchToProps )( Hero );
