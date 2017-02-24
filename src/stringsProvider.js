import React from 'react';
import {strings} from './metadata';
import { connect } from 'react-redux';

export default function stringsProvider (WrappedComponent) {
  class StringsProvider extends React.Component {
    render () {
      return (
        <WrappedComponent {...this.props} strings={strings}/>
      )
    }
  }
  const mapStateToProps = (state) => {
    return {language: state.language}
  }

  return connect (mapStateToProps)(StringsProvider);
}
