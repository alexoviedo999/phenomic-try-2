import React from 'react';

export const Sponsors = () => {
  return (
    <div className="mw80 center">
      <h2 className="section__title section__title--sponsors">Treatments</h2>
      <div className="flex-l items-center-l mb4-l">
        <p className="sponsors__content" style={{ flex: 1}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Let us know!
        </p>
        <div className="open-sans f4 white tc ma0-l bw1 bl--solid-l b--green6 pv4-l" style={{ flex: 1}}>
            <img src={require('../../src/assets/images/eye-lazer.jpg')} alt="Advanced Eye Center" className="pl4-l w-70 dib-l dn"/>
        </div>
      </div>

      {/* }<a href="mailto:hola@Scaleconfco.com?subject=I%20wanna%20sponsor%20ScaleConf%20Colombia!" className="btn btn--sponsors">
        Become a sponsor
      </a> */}
    </div>
  );
}

export default Sponsors;
