import "../../pages/ChatPage/style"
import { Chat, ChatInfo} from '../../pages/ChatPage/style'
import Messages from "../../components/MessagesChatComponent/MessagesChatComponent"
import Input from "../../components/InputChatComponent/InputChatComponent"

const ChatComponent = () => {
  return (
    <Chat>
      <ChatInfo>
        <span style={{fontSize: '25px'}}>John</span>
      </ChatInfo>
      <Messages />
      <Input />
    </Chat>
  )
}

export default ChatComponent
