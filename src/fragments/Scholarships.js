import React from 'react';

const Scholarships = () => {
  return (
    <div className="flex flex-column flex-row-l items-center justify-between">

      <div className="title_container-reviews">
        <h2 className="section__title section__title--scholarships">
          Reviews <br/>
        </h2>
        <ul>
          <li>
            <p className="fl w-80 section__content scholarship__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={require('../../src/assets/images/alex.jpeg')} alt="ScaleConf Colombia Scholarships" className="fl w-20 w-20-l dib-l review__images br-100"/>
          </li>
          <li>
            <p className="fl w-80 section__content scholarship__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src={require('../../src/assets/images/alex.jpeg')} alt="ScaleConf Colombia Scholarships" className="fl w-20 w-20-l dib-l br-100 review__images"/>
          </li>

        </ul>
</div>


    </div>
  );
}

export default Scholarships;
