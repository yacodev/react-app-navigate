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
  RegisterFormikPage,
  DynamicForm,
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
                Formik-Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/abstraction'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik-abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register-Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dynamic-form'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic - form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/formik' element={<FormikBasicPage />} />
          <Route path='/yup' element={<FormikYupPage />} />
          <Route path='/components' element={<FormikComponents />} />
          <Route path='/abstraction' element={<FormikAbstraction />} />
          <Route path='/formik-register' element={<RegisterFormikPage />} />
          <Route path='/dynamic-form' element={<DynamicForm />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
