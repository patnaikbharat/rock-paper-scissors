import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: auto;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  width: 75%;
`

export const CardContainer = styled.div`
  width: 100%;
  border: solid 1px #ffffff;
  border-radius: 7px;
  background-color: transparent;
  padding: 25px;
`

export const ListContainer = styled.div`
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ListItem = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  font-family: 'Bree Serif';
  list-style: none;
  margin-bottom: 5px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Bree Serif';
  margin-bottom: 0px;
  margin-top: 10px;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 45px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 10px;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 70vh;
`

export const RuleButton = styled.button`
  color: #223a5f;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #ffffff;
  height: 35px;
  width: 90px;
  border-radius: 5px;
  border-width: 0px;
  align-self: flex-end;
  cursor: pointer;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`

export const PopupImage = styled.img`
  width: 500px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`
