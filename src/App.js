import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import { LandingPage } from './pages/LandingPage'
import { DogDetails } from 'pages/DogDetails'

// Components
import { NavBar } from 'components/NavBar'
import { Footer } from './components/Footer'

// Global style
import { GlobalStyle } from './lib/GlobalStyle'

// Reducer
import { dogdata } from './reducers/dogdata'




// Combined reducers
const reducer = combineReducers({
  dogdata: dogdata.reducer,

})

// THE STORE
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dog/id/:dogId" exact>
            <DogDetails />
          </Route>
          <Route path="/dogbreeds">
            <div>
              Dog breeds
            </div>
          </Route>
          <Route path="/signin">
            <div>
              Sign in
            </div>
          </Route>
          <Route path="/signup">
            <div>
              Sign up
            </div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
