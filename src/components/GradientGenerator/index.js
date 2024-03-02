import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  MainHeading1,
  Paragraph1,
  Container1,
  GenerateButton,
  CustomInput,
  UnOrderList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    input1: '#8ae323',
    input2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  updateValue = value => {
    this.setState({direction: value})
  }

  getInput1 = event => {
    this.setState({input1: event.target.value})
  }

  getInput2 = event => {
    this.setState({input2: event.target.value})
  }

  getColors = () => {
    const {input1, input2, direction} = this.state
    this.setState({gradientValue: `to ${direction}, ${input1}, ${input2}`})
  }

  render() {
    const {input1, input2, gradientValue, direction} = this.state

    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainHeading1>Generate a CSS Color Gradient</MainHeading1>
        <Paragraph1>Choose Direction</Paragraph1>
        <UnOrderList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              updateValue={this.updateValue}
              direction={direction}
              itemDetails={each}
              key={each.directionId}
            />
          ))}
        </UnOrderList>

        <Paragraph1>Pick the Colors</Paragraph1>
        <Container1>
          <div>
            <Paragraph1 isValue>{input1}</Paragraph1>
            <CustomInput
              value={input1}
              onChange={this.getInput1}
              type="color"
            />
          </div>
          <div>
            <Paragraph1 isValue>{input2}</Paragraph1>
            <CustomInput
              value={input2}
              onChange={this.getInput2}
              type="color"
            />
          </div>
        </Container1>

        <GenerateButton onClick={this.getColors}>Generate</GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
