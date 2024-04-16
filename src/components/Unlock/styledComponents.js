// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  height: 100vh;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LockImage = styled.img`
  width: 100px;
  height: 100px;
`
export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-top: 20px;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  padding: 8px 18px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 100px;
`
