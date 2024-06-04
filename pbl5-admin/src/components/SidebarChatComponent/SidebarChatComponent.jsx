import "../../pages/ChatPage/style"
import {Navbar, Sidebar } from '../../pages/ChatPage/style'
import SearchChatComponent from '../SearchChatComponent/SearchChatComponent'
import ChatsComponent from '../ChatsComponent/ChatsComponent'


const SidebarChatComponent = () => {
  return (
    <Sidebar>
      <Navbar>
        Hỗ trợ tư vấn
      </Navbar>
      <SearchChatComponent />
      <ChatsComponent />
    </Sidebar>
  )
}

export default SidebarChatComponent
