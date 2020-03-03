import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { NavBar } from 'components/NavBar'
import { Footer } from './components/Footer'
import { GlobalStyle } from './lib/GlobalStyle'
import { dograces } from './reducers/dograces'
import styled from 'styled-components/macro'





// COMBINING REDUCERS
const reducer = combineReducers({
  dograces: dograces.reducer,

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
        </Switch>
        <Footer />
      </BrowserRouter>

    </Provider>
  )
}
