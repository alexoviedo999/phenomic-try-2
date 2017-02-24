import React from 'react';
import {strings} from '../../metadata'
import {setLanguage} from '../../redux/language'
import {getLanguage} from '../../redux/language'
import { connect } from 'react-redux';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: false
    }
    this.props.setLanguage("english");
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  toggleLan() {
    let lan = this.props.lan === "english" ? "español" : "english";
    this.props.setLanguage(lan);
  }

  render() {
    const { open } = this.state
    const openClass = !open ? 'dn': '';
    strings.setLanguage(this.props.lan);
    let currentLanguage = strings.getLanguage();

    return (
      <div className="top-nav fixed left-0 right-0 top-0 bg-blue1 z-999">
        {
          this.state.open &&
          <a onClick={this.toggle} className="white f1 tr db dn-l ph2 pointer">&#x2715;</a>
        }
        {
          !this.state.open &&
          <a onClick={this.toggle} className="white f1 tr db dn-l ph2 pointer">&#9776;</a>
        }
        <div className={`ph4 mw80 center ${openClass} db-l`}>
          <nav className="bg-blue1 vh-100 h-auto-l" style={{'fontSize': 0}}>
            <ul className="list tc pl0 eau-bold flex justify-between flex-column flex-row-l h-75">
              <li className="pv3">
                <button className="nav__opt" onClick={this.toggleLan.bind(this)}>{this.props.lan ? this.props.lan : currentLanguage}</button>

              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#about" className="nav__opt">About</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#venue" className="nav__opt">Location</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#speakers" className="nav__opt">Eye Conditions</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#sponsors" className="nav__opt">Treatments</a>
              </li>
              <li className="pv3">
                <a onClick={this.toggle} href="#scholarships" className="nav__opt">Reviews</a>
              </li>
            </ul>
          </nav>
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

export default connect( mapStateToProps, mapDispatchToProps )( Nav );
