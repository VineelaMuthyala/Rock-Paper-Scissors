import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  MainHeading,
  ChoicesContainer,
  ChoiceButton,
  ChoiceImage,
  RulesButton,
  ResultContainer,
  ImagesContainer,
  EachImageContainer,
  ImageText,
  PlayAgainContainer,
  PlayAgainButton,
  ResultText,
  PopupContainer,
  PopupBody,
  PopupImage,
  CloseButton,
} from './styledComponents'
import Header from '../Header'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },

  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    activeChoice: '',
    pageView: true,
    score: 0,
    randomIndex: 3,
    gameResult: '',
  }

  choiceButtonClicked = event => {
    const index = Math.floor(Math.random() * choicesList.length)
    this.setState(
      {activeChoice: event.target.alt, pageView: false, randomIndex: index},
      this.upDateTheScore,
    )
  }

  upDateTheScore = () => {
    const {activeChoice, score, randomIndex} = this.state
    console.log('update score', score)
    const activeImage = choicesList.filter(
      eachItem => eachItem.id === activeChoice,
    )
    const activeId = activeImage[0].id
    const randomId = choicesList[randomIndex].id

    if (
      (activeId === 'ROCK' && randomId === 'SCISSORS') ||
      (activeId === 'SCISSORS' && randomId === 'PAPER') ||
      (activeId === 'PAPER' && randomId === 'ROCK')
    ) {
      this.setState(
        prevState => ({score: prevState.score + 1}),
        this.setState({gameResult: 'YOU WON'}),
      )
    } else if (activeId === randomId) {
      this.setState({score})
      this.setState({gameResult: 'IT IS DRAW'})
    } else {
      this.setState(prevState => ({score: prevState.score - 1}))
      this.setState({gameResult: 'YOU LOSE'})
    }
  }

  renderplayAgain = () => {
    this.setState({pageView: true})
  }

  renderPlayingView = () => (
    <>
      <ChoicesContainer>
        {choicesList.map(eachItem => (
          <ChoiceButton
            type="button"
            data-testid={`${eachItem.id.toLowerCase()}Button`}
            key={eachItem.id}
            onClick={this.choiceButtonClicked}
          >
            <ChoiceImage src={eachItem.imageUrl} alt={eachItem.id} />
          </ChoiceButton>
        ))}
      </ChoicesContainer>
    </>
  )

  renderGameResult = () => {
    const {activeChoice, randomIndex, gameResult} = this.state
    const activeImage = choicesList.filter(
      eachItem => eachItem.id === activeChoice,
    )

    return (
      <ResultContainer>
        <ImagesContainer>
          <EachImageContainer>
            <ImageText htmlFor="you">YOU</ImageText>
            <ChoiceImage
              src={activeImage[0].imageUrl}
              alt="your choice"
              id="you"
              value="your choice"
            />
          </EachImageContainer>
          <EachImageContainer>
            <ImageText htmlFor="opponent">OPPONENT</ImageText>
            <ChoiceImage
              src={choicesList[randomIndex].imageUrl}
              alt="opponent choice"
              id="opponent"
              value="opponent choice"
            />
          </EachImageContainer>
        </ImagesContainer>
        <PlayAgainContainer>
          <ResultText>{gameResult}</ResultText>
          <PlayAgainButton type="button" onClick={this.renderplayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </PlayAgainContainer>
      </ResultContainer>
    )
  }

  render() {
    const {pageView, score} = this.state

    return (
      <MainContainer>
        <MainHeading>Rock Paper Scissors</MainHeading>
        <Header choicesList={choicesList} score={score} />
        {pageView ? this.renderPlayingView() : this.renderGameResult()}
        <PopupContainer>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopupBody>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupBody>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
