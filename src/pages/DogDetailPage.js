import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

// Components
import { DogDetailCard } from '../components/DogDetailCard'

// Global color theme
import { mainTheme } from '../lib/GlobalStyle'

// fetchDog function ( reducer)
import { fetchDog } from '../reducers/dogdata'


export const DogDetailPage = () => {
  const dispatch = useDispatch()
  const { dogId } = useParams()


  const dog = useSelector((state) => state.dogdata.dog)
  useEffect(() => {
    dispatch(fetchDog(dogId))
  }, [dispatch, dogId])


  return (

    <SectionWrapper>
      {dog &&
        <DogDetailCard dog={dog} />
      }
    </SectionWrapper>
  )
}



/* ------ STYLING ------ */

// const SectionWrapper = styled.section`
//   background-color: ${mainTheme.lightgray};
//   flex-grow: 1;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   /* border-radius: 50px 50px 50px 50px; */

//   /* Tablet  & mobile */
//   @media (min-width: 0px) and (max-width: 668px) {
//     flex-direction: column;
//     align-items: center;
//     border-radius: 0px 0px 50px 50px;
//   }
//   /* Mobile */
//   @media (max-width: 375px) {
//     border-radius: 0px;
//   }
// `


const SectionWrapper = styled.section`
  background-color: ${mainTheme.lightgray};
  flex-grow: 1;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
 /* Tablet & mobile */
  @media (min-width: 0px) and (max-width: 1145px) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
  /* Mobile */
  @media (max-width: 375px) {
    margin: 50px 0px;
    padding: 10px 10px 30px 10px;
  }`