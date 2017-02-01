import React, { Component } from 'react'
import Nav from "../Nav"

// let particles
// if (typeof window !== 'undefined') {
//   particles = require('particles.js')
// }

export default class Hero extends Component {

  // TODO:
  // componentDidMount() {
  //   particles && particles.particlesJS.load('particles-js', '/../../../content/assets/particles.json', function() {
  //     // eslint-disable-next-line no-console
  //     console.log('callback - particles.js config loaded');
  //   })
  // }

  render() {
    return (
      <div id="particles-js" className="w-100 gradient h-650">
        <Nav />
        <div className="mw80 w-100 center relative eye-image">
          <header className="w-100 tr">
            <h1 className="home__title home__title--scaleconf">Rodrigo Belalcazar, MD PLLC</h1>
            <h1 className="home__title home__title--colombia">Advanced Eye Center </h1>
            <p className="home__date">
              South Florida
            </p>
            <a className="btn btn--home" href="https://ti.to/colombia-dev/scaleconfco">
              Contact Us
            </a>
          </header>
        </div>
      </div>
    )
  }
}
