import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
// import Notification from '../pages/Notification';
// import CapQuyen from '../pages/authorize';


const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              {/* <Route path="/notification" element={<Notification></Notification>}></Route> */}
              {/* <Route path="/CapQuyen" element={<CapQuyen></CapQuyen>}></Route> */}

            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;