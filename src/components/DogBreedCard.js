import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faDog } from '@fortawesome/free-solid-svg-icons'

// Paths to assets
import { PATHS } from 'App'

// Global theme
import { mainTheme } from '../lib/GlobalStyle'


export const DogBreedCard = ({ dogBreed }) => {

  return (

    <BreedCard >
      <Image src={PATHS.dog_races.concat(dogBreed.images.url)} />
      <Content>
        <TitleBar>
          <FlexWrapper>
            <Title>{dogBreed.name}</Title>
          </FlexWrapper>
        </TitleBar>
        <TitleBar>
          <GridWrapper>
            <SubTitle>{dogBreed.group.join(', ')} <FontAwesomeIcon icon={faDog} /></SubTitle>
            <SubTitle>{dogBreed.size.join(', ')} <FontAwesomeIcon icon={faRulerCombined} /></SubTitle>
          </GridWrapper>
        </TitleBar>
      </Content>
    </BreedCard >

  )
}


/* ------ STYLING ------ */

const BreedCard = styled.div`
  color: ${mainTheme.blackish};
  /* background: url("/assets/pink-pattern_a.jpg"); */
  /* background-size: auto;
  background-repeat: repeat;
  background-position: center; */
  width:calc(100%-20px);
  border-bottom: solid 3px ${mainTheme.whiteish} ;
  height: 110px;
  display: flex;
  padding-left: 10px;
  &:hover {
    border-bottom: solid 3px ${mainTheme.tertiary};
    filter: brightness(85%);
    background-color:${mainTheme.grayish};
    transition: 0.4s;
  }
`
const Image = styled.img`
  align-self: center;
  justify-self: center;
  height: 90%;
  -webkit-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  -moz-box-shadow: 0px 0px 5px -4px rgba(0,0,0,0.8);
  box-shadow: 0px 5px 5px -4px rgba(0,0,0,0.8);
  border-radius: 50%;
`

const Content = styled.div`
  padding: 10px 20px 5px 20px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const TitleBar = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`

const Title = styled.h1`
  color: ${mainTheme.blackish};
  width: 100%;
  text-align: center;
  margin: 17px 0px;
  font-size: 18px;
`

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify ? props.justify : "space-between"};
`
const GridWrapper = styled.div`
  min-width: 150px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr ;
  grid-auto-rows: auto;
`

const SubTitle = styled.p`
  margin: 3px 0px;
  color: ${mainTheme.blackish};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`
