import {
  HeaderContainer,
  OptionsContainer,
  Option,
  ScoreContainer,
  ScoreText,
  ScoreValue,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <OptionsContainer>
        <Option>Rock</Option>
        <Option>Paper</Option>
        <Option>Scissors</Option>
      </OptionsContainer>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </HeaderContainer>
  )
}

export default Header
