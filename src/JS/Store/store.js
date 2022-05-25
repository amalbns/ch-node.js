import {configureStore} from  '@reduxjs/toolkit'
import rootReducer from '../reducers'




const store = configureStore (rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

export default store