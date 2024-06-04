import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; 

const queryClient = new QueryClient(); 

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}> 
        <Router>
          <Routes>
            {routes.map((route) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
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
