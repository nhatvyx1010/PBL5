import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import DefaultComponentUser from './components/DefaultComponentUser/DefaultComponentUser';
import { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const queryClient = new QueryClient(); 

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const user = useSelector(state => state.user);
  // const [sessionActive, setSessionActive] = useState(false);
  useEffect(() => {
    console.log("gettoken: "+user.access_token);
    if (user.access_token) {
      setAuthenticated(true); // Nếu có token, đánh dấu là đã đăng nhập
    }else{
      setAuthenticated(false); // Nếu khong có token, đánh dấu là đã đăng nhập
    }
    // Kiểm tra các điều kiện khác của phiên làm việc ở đây nếu cần thiết
  }, [user.access_token]);

  return (
    <div>
      <QueryClientProvider client={queryClient}> 
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ?  authenticated ? DefaultComponentUser : DefaultComponent : Fragment
              return (
                <Route key={route.path} path={route.path} element={
                  <Layout>
                    <Page />
                  </Layout>
                } 
                />
              )
            })}
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
