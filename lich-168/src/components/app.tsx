import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';

import User from '../pages/user';
import BottomNavigationPage from "../pages/navigation"
import Calendar from "../pages/calendar_month"
import detail_month from "../pages/detail_month"
const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<Calendar></Calendar>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </AnimationRoutes>
            <BottomNavigationPage />
          </ZMPRouter>

        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;