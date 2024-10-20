import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import {
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
} from '../03-forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='react logo' />
          <ul>
            <li>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/abstraction'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                formik-abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/formik' element={<FormikBasicPage />} />
          <Route path='/yup' element={<FormikYupPage />} />
          <Route path='/components' element={<FormikComponents />} />
          <Route path='/abstraction' element={<FormikAbstraction />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
