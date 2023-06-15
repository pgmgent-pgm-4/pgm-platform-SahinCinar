import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// React Router v6 imports
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route
} from "react-router-dom";

// Custom compoments
import App from './app';

// Utilities
import {  HomePage, SearchPage, TeamPage, PostDetailsPage, CurriculumPage, BlogPage, ServicesPage, OpleidingPage, PortfolioPage } from './app/pages';
import { AuthProvider, GraphCMSProvider } from './app/context';
import { AdminLayout, PublicLayout, UserLayout } from './app/components/layout';
import Signup from './app/pages/signup.page';

ReactDOM.render(
  <GraphCMSProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" replace={true} />} />
              <Route path="curriculum"  element={<CurriculumPage />} />
              <Route path="search"  element={<SearchPage />} />
              <Route path="blog"  element={<BlogPage />} />
              <Route path="services"  element={<ServicesPage />} />
              <Route path="opleiding"  element={<OpleidingPage />} />
              <Route path="portfolio"  element={<PortfolioPage />} />
              <Route path="team" element={<TeamPage />} />  
              <Route path="posts/:postId" element={<PostDetailsPage />} />
            </Route>            
            <Route path="user" element={<UserLayout />}>
              <Route index element ={<HomePage/>} />
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element ={<HomePage/>} />
            </Route>
            <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
          </Route>
        </Routes>
      </BrowserRouter>   
    </AuthProvider> 
  </GraphCMSProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
