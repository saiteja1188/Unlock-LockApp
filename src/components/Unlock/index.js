// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  LockContainer,
  LockImage,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isActive, setIsActive] = useState(false)
  const onClickButton = () => setIsActive(Prev => !Prev)

  const imageUrl = isActive
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const paragraphText = isActive
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'

  const buttonText = isActive ? 'Lock' : 'Unlock'

  return (
    <AppContainer>
      {isActive ? (
        <LockContainer>
          <LockImage src={imageUrl} alt="lock" />
          <Paragraph>{paragraphText}</Paragraph>
          <Button type="button" onClick={onClickButton}>
            {buttonText}
          </Button>
        </LockContainer>
      ) : (
        <LockContainer>
          <LockImage src={imageUrl} alt="lock" />
          <Paragraph>{paragraphText}</Paragraph>
          <Button type="button" onClick={onClickButton}>
            {buttonText}
          </Button>
        </LockContainer>
      )}
    </AppContainer>
  )
}

export default Unlock
