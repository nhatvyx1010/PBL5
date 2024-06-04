import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border: 1px solid #84D9BA;
  border-radius: 10px;
  width: 65%;
  height: 80%;
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Sidebar = styled.div`
  flex: 1;
  background-color: #3e3c61;
  position: relative;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
  font-size: 25px;
`;

export const Logo = styled.div`
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserImage = styled.img`
  background-color: #ddddf7;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserButton = styled.button`
  background-color: #5d5b8d;
  color: #ddddf7;
  font-size: 10px;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 10px;
  }
`;

export const Search = styled.div`
  border-bottom: 1px solid gray;
`;

export const SearchForm = styled.div`
  padding: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  &::placeholder {
    color: lightgray;
  }
`;

export const UserChat = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #2f2d52;
  }
`;

export const UserChatImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserChatInfo = styled.div`
  span {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: lightgray;
  }
`;

export const Chat = styled.div`
  flex: 2;
`;

export const ChatInfo = styled.div`
  height: 50px;
  background-color: #5d5b8d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: lightgray;
`;


export const ChatIcons = styled.div`
  display: flex;
  gap: 10px;
`;
export const ImageIcons = styled.div`
  height: 100px;
  cursor: pointer;
`
export const Messages = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 160px);
  overflow: scroll;
`;

export const Message = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;
`;

// export const MessageInfo = styled.div`
//   display: flex;
//   flex-direction: row; /* Sắp xếp các phần tử theo hàng ngang */
//   align-items: center; /* Căn chỉnh các phần tử theo chiều dọc */
//   color: gray;
//   font-weight: 300;
//   justify-content: flex-end;
// `;

export const MessageImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  ${'' /* margin-left: 10px; */}
`;

export const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${'' /* flex: 1; */}
  p {
    background-color: white;
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
  }
  img {
    width: 50%;
  }
`;

export const OwnerMessage = styled.div`
  flex-direction: row-reverse;
  ${MessageContent} {
    align-items: flex-end;
    p {
      background-color: #8da4f1;
      color: white;
      border-radius: 10px 0px 10px 10px;
    }
  }
`;

export const InputArea = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputField = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  color: black;
  outline: none;
  &::placeholder {
    color: lightgray;
  }
`;

export const SendButton = styled.button`
  border: none;
  padding: 10px 15px;
  color: white;
  background-color: #8da4f1;
  cursor: pointer;
`;
