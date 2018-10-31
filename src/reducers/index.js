import {
  combineReducers
} from 'redux'

import domain from './domain.js'
import app from './app.js'
import ui from './ui.js'

export default combineReducers({
  app,
  domain,
  ui
});;
