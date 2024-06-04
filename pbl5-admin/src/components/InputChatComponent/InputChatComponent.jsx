import { useState } from 'react'
import { InputArea, InputField, SendButton } from '../../pages/ChatPage/style'

const InputChatComponent = () => {
  const [text, setText] = useState('');
  return (
    <InputArea>
      <InputField
        type='text'
        placeholder='Type something...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <SendButton>Send</SendButton>
    </InputArea>
  )
}

export default InputChatComponent
