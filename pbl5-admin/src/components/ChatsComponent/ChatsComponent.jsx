import { Chat, UserChat, UserChatImage, UserChatInfo } from '../../pages/ChatPage/style'

const ChatsComponent = () => {
  return (
    <Chat>
      <UserChat>
          <UserChatImage src='https://bizweb.dktcdn.net/100/438/408/files/anh-dai-dien-hai-yodyvn84.jpg?v=1706841552709'></UserChatImage>
          <UserChatInfo>
              <span>John</span>
              <p>Hello</p>
          </UserChatInfo>
      </UserChat>
      <UserChat>
          <UserChatImage src='https://bizweb.dktcdn.net/100/438/408/files/anh-dai-dien-hai-yodyvn84.jpg?v=1706841552709'></UserChatImage>
          <UserChatInfo>
              <span>John</span>
              <p>Hello</p>
          </UserChatInfo>
      </UserChat>
      <UserChat>
          <UserChatImage src='https://bizweb.dktcdn.net/100/438/408/files/anh-dai-dien-hai-yodyvn84.jpg?v=1706841552709'></UserChatImage>
          <UserChatInfo>
              <span>John</span>
              <p>Hello</p>
          </UserChatInfo>
      </UserChat>
    </Chat>
  )
}

export default ChatsComponent
