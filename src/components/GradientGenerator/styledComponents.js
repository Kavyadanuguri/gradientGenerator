// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MainHeading1 = styled.h1`
  color: #ffffff;
  font-family: 'roboto';
  margin-bottom: 50px;
  text-align: center;
`
export const Paragraph1 = styled.p`
  color: #ffffff;
  font-family: 'roboto';
  margin-top: ${props => (props.isValue ? 50 : 0)}px;
  margin-bottom: ${props => (props.isValue ? 10 : 0)}px;
`
export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 290px;
  justify-content: space-between;
`
export const CustomButton = styled.button`
  background-color: #8ae323;
  width: 80px;
  height: 30px;
  border-width: 0px;
  color: #8ae323;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #014f7b;
  font-family: 'roboto';
  font-weight: bold;
  margin-top: 50px;
  border-width: 0px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const CustomInput = styled.input`
  width: 80px;
  height: 30px;
  color: ${props => props.value};
  background-color: ${props => props.value};
  border-width: 0px;
`
