import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding-left: 25px;
  height: 150px;
  width: 1000px;
`

export const OptionsContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
`

export const Option = styled.li`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Bree Serif';
`

export const ScoreContainer = styled.div`
  width: 170px;
  background-color: #ffffff;
  color: #223a5f;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreText = styled.p`
  font-size: 35px;
  margin: 0px;
  font-family: 'Bree Serif';
`

export const ScoreValue = styled(ScoreText)`
  font-size: 50px;
  font-family: 'Roboto';
  font-weight: bold;
`
