import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='react logo' />
          <ul>
            <li>
              <NavLink
                to='/lazy1'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy2'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/lazy3'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/Lazy1' element={<LazyPage1 />} />
          <Route path='/Lazy2' element={<LazyPage2 />} />
          <Route path='/Lazy3' element={<LazyPage3 />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
