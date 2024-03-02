// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  color: #014f7b;
  font-family: 'roboto';
  margin-top: 15px;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: #ffffff;
  opacity: ${props => props.opacity};
  font-weight: bold;
  border-width: 0px;
  margin-bottom: 25px;
`
export const ListItem = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  list-style-type: none;
`
