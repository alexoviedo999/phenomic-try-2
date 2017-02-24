import { combineReducers, compose } from "redux"
import createStore from "phenomic/lib/redux/createStore"
// eslint-disable-next-line import/no-namespace
import * as phenomicReducers from "phenomic/lib/redux/modules"
import {default as languageReducer} from "./redux/language.js"

const store = createStore(
  combineReducers({...phenomicReducers, language:languageReducer}),
  { ...(typeof window !== "undefined") && window.__INITIAL_STATE__ }
  // compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
)

export default store
