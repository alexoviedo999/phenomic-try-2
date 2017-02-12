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
              Advanced Eye Center was opened in 2012 with the goal to offer the people of South Florida, the United States, and the world over, the most innovative treatments to improve your vison.
              <br/>
              <br/>
              We are proud to say we have treated patients using a variety of treatments, including laser techniques, from numerous countries spanning the globe, such as: The United States, Canada, Mexico, Nicaragua, El Salvador, Honduras, Panama, Cuba, Jamaica, The Dominican Republic, Trinidad and Tobago, Aruba, Haiti, Colombia, Venezuela, Brazil, Ecuador, Peru, Bolivia, Chile, Argentina, Uruguay, Spain, France, the United Kingdom, Germany, Switzerland, Italy, Poland, The Ukraine, Japan, Australia, the United Arab Emirates, and South Africa. Our dream was to provide as much healthcare to as many people on Earth, and that dream is now a reality.
              <br/>
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
              A native of Colombia, Dr. Belalcazar received his MD there and completed his residency at the Colombian Institute of Ocular Surgery, affiliated to the Pontifical Xavierian University in Bogotá. He underwent Refractive Surgery training at the world famous Barraquer Institute of America in 1993, The Myopia Ocular Center in Madrid in 1996, and completed a Refractive Laser Surgery Fellowship at Park Avenue Laser Vision in New York with Emil W. Chynn, MD, world renowned Refractive Surgeon, in 2008.
            </p>
            <p className="section__content">
              Dr. Belalcazar has performed thousands of Radial Keratotomy (RK) surgeries, Cataracts and Corneal Transplants at the Surgical Ocular Institute Palermo and was the Director of the Eye Clinic at the University Foundation of San Martin in Colombia. He has performed over 5,000 LASIK, LASEK and EPI-LASEK procedures, and more than 3000 Glaucoma and other Ophthalmology Laser surgeries. Dr. Belalcazar performs Phaco Cataract surgery at the Beraja Medical Institute in Coral Gables, the Larkin Hospital in Miami, the North Miami Surgical Center and the Palm Springs Hospital.
              He has been the recipient of numerous awards and recognitions, including the Colombian Culture & Heritage Award for his professional achievement and service to the national community, and multiple recognitions for Outstanding and Professional Excellence from the State Senate, Council and Assembly of New York.
            </p>
            <p className="section__content">
              Dr. Belalcazar is a naturalized US citizen, has completed a Pediatrics residency at Driscol Children’s Hospital, Texas A. & M., is certified by the Educational Council for Foreign Medical Graduates of Medical Examiners, and is licensed by the Florida, Georgia, New York, and Texas State Medical Boards. He is a Member of The American Academy of Ophthalmology, American  Society of Cataract and Refractive Surgery and The International Society of Refractive Surgery.
              He became the Medical Director of Vision Specialty Care for South Florida in 2010, and in 2012 Dr. Belalcazar opened Advanced Eye Center to serve his patients in South Florida with the most innovated and latest equipment. He is part of several leading researchers in Glaucoma, Diabetic Retinopathy, Refractive surgery and Keratoconus in the country. Dr. Belalcazar’s Advanced Eye Center is one of the first centers in South Florida to offer Collagen Crosslinking for Keratoconus, Corneal Warpage and Ectasia.
              He enjoys Mountain and Rock Climbing, Marathons, Triathlons, Scuba diving, and Skydiving.
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
