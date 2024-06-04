import { OwnerMessage, MessageContent, MessageImage, MessageInfo } from '../../pages/ChatPage/style'

const MessageChatComponent = () => {
  return (
    // <Message>
    //   <MessageInfo>
    //     <MessageImage src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-52.jpg' alt=''></MessageImage>
    //     <span>just now</span>
    //   </MessageInfo>
    //   <MessageContent>
    //     <p>hello</p>
    //     {/* <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg' alt=''></img> */}
    //   </MessageContent>
    // </Message>
    <OwnerMessage>
      <MessageContent>
        <MessageInfo>
          <MessageImage src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-52.jpg' alt='' />
          <span>just now</span>
        </MessageInfo>
        <p>hello</p>
        {/* <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-91.jpg' alt='' /> */}
      </MessageContent>
    </OwnerMessage>

  )
}

export default MessageChatComponent
