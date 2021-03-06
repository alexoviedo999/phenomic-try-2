import React, {PropTypes} from 'react';
import Icon from '../components/Icon'
import enhanceCollection from "phenomic/lib/enhance-collection"

export default class Speakers extends React.Component {
  static contextTypes = {
    collection: PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      collection,
    } = this.context

    let speakers = enhanceCollection(collection, {
      filter: { speaker: 'yes' }
    });

    return (
      <div className="tc mw80 center tl-l">
        <h2 className="section__title section__title--speakers">
          Eye Conditions
        </h2>
        <p className="copy--speakers">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex flex-wrap justify-center">
          {
            speakers.map((speaker, i) => {
              return (
                <div className="speaker__container mb5 w5-l tc" key={`${speaker.name}-${i}`}>
                  <img src={require(`../../src/assets/speakers/${speaker.photo}`)} alt={speaker.name} className="br-100"/>
                  <p className="speaker__name">{speaker.name}</p>
                  <p className="speaker__desc">{speaker.description}</p>
                  { speaker.twitter &&
                    <a href={speaker.twitter} className="green4 dib h-15 w-15 br-100 pa2 bg-white mr2">
                      <Icon icon="twitter"></Icon>
                    </a>
                  }
                  { speaker.url &&
                    <a href={speaker.url} className="green4 dib h-15 w-15 br-100 pa2 bg-white ml2">
                      <Icon icon="link"></Icon>
                    </a>
                  }
                </div>
              )
            })
          }
        </div>
      </div>);
  }
}

Speakers.propTypes = {
};
