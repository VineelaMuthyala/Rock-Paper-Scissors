import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  color: #ffffff;
  padding-left: 125px;
  padding-right: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  height: 50px;
`
export const ChoicesContainer = styled.div`
  width: 500px;
  height: 430px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
`

export const ChoiceButton = styled.button`
  border: 0px;
  background-color: transparent;
  margin-left: 20px;
  margin-rigth: 20px;
`
export const ChoiceImage = styled.img`
  width: 200px;
  height: 200px;
`
export const RulesButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  font-family: 'Bree Serif';
  font-size: 15px;
  margin-top: 20px;

  align-self: flex-end;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  width: 600px;
  height: 430px;
`

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
`
export const EachImageContainer = styled.div``
export const ImageText = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`
export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`

export const PlayAgainButton = styled.button`
  width: 170px;
  height: 50px;
  font-family: 'Bree Serif';
  border-radius: 10px;
  border: 0px;
  font-size: 15px;
  cursor: pointer;
`
export const ResultText = styled.p`
  font-size: 30px;
  font-weight: bold;
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`
export const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const PopupImage = styled.img`
  width: 100%;
  align-self: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  align-self: flex-end;
`
