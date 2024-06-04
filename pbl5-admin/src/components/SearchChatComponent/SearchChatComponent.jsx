import { Input, Search, SearchForm, UserChat, UserChatImage, UserChatInfo } from '../../pages/ChatPage/style'

const SearchChatComponent = () => {
  return (
    <Search>
        <SearchForm>
            <Input type='text' placeholder='Find a user' />
        </SearchForm>
        <UserChat>
            <UserChatImage src='https://bizweb.dktcdn.net/100/438/408/files/anh-dai-dien-hai-yodyvn84.jpg?v=1706841552709'></UserChatImage>
            <UserChatInfo>
                <span>John</span>
            </UserChatInfo>
        </UserChat>
    </Search>
  )
}

export default SearchChatComponent
