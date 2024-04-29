import Popup from 'reactjs-popup'
import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ResponsiveContainer,
  CardContainer,
  ListContainer,
  ListItem,
  ScoreContainer,
  ScoreText,
  Score,
  ChoiceContainer,
  RuleButton,
  ModalContainer,
  PopupImage,
  CloseButton,
  PopupContainer,
} from './styledComponent'
import ChoiceButtons from '../ChoiceButtons'

class GameView extends Component {
  state = {
    score: 0,
    isResultShow: false,
    selectedArray: [],
    opponentArray: [],
    result: '',
  }

  getResultFunc = (array, opponentChoice) => {
    if (array.id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (array.id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onClickButton = array => {
    const {score} = this.state
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomNumber]
    const getResult = this.getResultFunc(array, opponentChoice)
    let newScore = score
    if (getResult === 'YOU WON') {
      newScore = score + 1
    } else if (getResult === 'YOU LOSE') {
      newScore = score - 1
    }

    this.setState({
      isResultShow: true,
      selectedArray: array,
      opponentArray: opponentChoice,
      result: getResult,
      score: newScore,
    })
  }

  onClickPlayAgain = () => {
    this.setState({
      isResultShow: false,
    })
  }

  render() {
    const {score, isResultShow, selectedArray, opponentArray, result} =
      this.state
    const {choicesList} = this.props

    return (
      <MainContainer>
        <ResponsiveContainer>
          <CardContainer>
            <ListContainer>
              <ListItem>
                ROCK <br /> PAPER <br /> SCISSORS
              </ListItem>
              <ScoreContainer>
                <ScoreText>Score</ScoreText>
                <Score>{score}</Score>
              </ScoreContainer>
            </ListContainer>
          </CardContainer>
          <ChoiceContainer>
            <ChoiceButtons
              choicesList={choicesList}
              score={score}
              isResultShow={isResultShow}
              selectedArray={selectedArray}
              opponentArray={opponentArray}
              result={result}
              onClickButton={this.onClickButton}
              onClickPlayAgain={this.onClickPlayAgain}
            />
          </ChoiceContainer>
          <PopupContainer>
            <Popup modal trigger={<RuleButton type="button">RULES</RuleButton>}>
              {close => (
                <ModalContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine size={25} color="#ffffff" />
                  </CloseButton>
                  <PopupImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default GameView
