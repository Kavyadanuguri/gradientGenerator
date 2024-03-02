// Write your code here
import {CustomButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, updateValue, direction} = props
  const {directionId, value, displayText} = itemDetails
  const updateDirection = () => {
    updateValue(value)
  }
  const opacity = direction === value ? '1' : '0.5'

  return (
    <ListItem value={value} key={directionId}>
      <CustomButton opacity={opacity} onClick={updateDirection}>
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
