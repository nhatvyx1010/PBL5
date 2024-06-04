import { HomeContainer, Container } from "./style";
import SidebarChatComponent from "../../components/SidebarChatComponent/SidebarChatComponent";
import ChatComponent from "../../components/ChatComponent/ChatComponent";
// import ChatsComponent from "../../components/ChatsComponent/ChatsComponent";

const ChatPage = () => {
    return (
        <HomeContainer>
            <Container>
                <SidebarChatComponent />
                <ChatComponent />
            </Container>
        </HomeContainer>
    );
};

export default ChatPage;
