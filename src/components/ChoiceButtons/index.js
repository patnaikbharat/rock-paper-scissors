import {
  ChoiceButton,
  Choice,
  PersonFlexContainer,
  PersonContainer,
  Person,
  PersonChoice,
  Result,
  ResultContainer,
  PlayAgainButton,
} from './styledComponent'

const ChoiceButtons = props => {
  const {
    choicesList,
    onClickButton,
    isResultShow,
    selectedArray,
    opponentArray,
    result,
    onClickPlayAgain,
  } = props

  return (
    <>
      {isResultShow ? (
        <ResultContainer>
          <PersonFlexContainer>
            <PersonContainer>
              <Person>YOU</Person>
              <PersonChoice src={selectedArray.imageUrl} alt="your choice" />
            </PersonContainer>
            <PersonContainer>
              <Person>OPPONENT</Person>
              <PersonChoice
                src={opponentArray.imageUrl}
                alt="opponent choice"
              />
            </PersonContainer>
          </PersonFlexContainer>
          <Result>{result}</Result>
          <PlayAgainButton type="button" onClick={() => onClickPlayAgain()}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
      ) : (
        <>
          <ChoiceButton
            type="button"
            data-testid="rockButton"
            onClick={() => onClickButton(choicesList[0])}
          >
            <Choice
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => onClickButton(choicesList[1])}
          >
            <Choice
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="paperButton"
            onClick={() => onClickButton(choicesList[2])}
          >
            <Choice
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </ChoiceButton>
        </>
      )}
    </>
  )
}

export default ChoiceButtons
