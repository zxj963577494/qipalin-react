import { combineReducers } from 'redux'
import { articlesReducer, stickyArticlesReducer } from './articles'
import { jokesReducer } from './jokes'
import { picturesReducer } from './pictures'
import { detailReducer } from './detail'
import { commentsReducer } from './comments'
import tabbarsReducer from './tabbars'
import navbarReducer from './navbar'

const rootReducer = combineReducers({
  articles: articlesReducer,
  jokes: jokesReducer,
  pictures: picturesReducer,
  comments: commentsReducer,
  detail: detailReducer,
  sticky: stickyArticlesReducer,
  tabbars: tabbarsReducer,
  navbar: navbarReducer
})

export default rootReducer
