import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './styles/index.scss';
import Layout from './components/Layout/MainLayout';

function App() {
  return (
    <div className="App App_w">
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;