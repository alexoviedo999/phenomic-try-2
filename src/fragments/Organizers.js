import React from 'react';

export const Organizers = () => {
  return (
    <div className="title_container--organizers tc">
      <h2 className="section__title section__title--organizers mb4 dib-l tl-l">
        Meet the team
      </h2>
      <div className="mt3-l flex items-center justify-center flex-column flex-row-l">
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/rodrigo-2.jpeg')} alt="" className="br-100 w4 h4 cover"/>
          <p className="organizers__name">
            Dr. Rodrigo Belalcazar
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/eli.jpeg')} alt="" className="br-100 w4 h4 cover"/>
          <p className="organizers__name">
            Eliana Belalcazar
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/staff-1.jpeg')} alt="" className="br-100 w4 h4 cover"/>
          <p className="organizers__name">
            Ms. Staff
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/staff-2.jpeg')} alt="" className="br-100 w4 h4 cover"/>
          <p className="organizers__name">
            Ms. Staff
          </p>
        </div>
        <div className="mb3 tc dib-l mh4-l w4-l">
          <img src={require('../../src/assets/organizers/staff-3.jpeg')} alt="" className="br-100 w4 h4 cover"/>
          <p className="organizers__name">
            Ms. Staff
          </p>
        </div>
      </div>
    </div>
  );
}

export default Organizers;
