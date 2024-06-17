import React from 'react';
import { Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import About from '../pages/about';
import Form from '../pages/form';
import User from '../pages/user';
// import Notification from '../pages/Notification';
import CapQuyen from '../pages/authorize';
import PhoneNumberComponent from '../pages/numberPhone';
import Option_user from '../pages/Option';
import FollowOAa from '../pages/followOA';



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
              <Route path="/CapQuyen" element={<CapQuyen></CapQuyen>}></Route>
              <Route path="/PhoneNumberComponent" element={<PhoneNumberComponent></PhoneNumberComponent>}></Route>
              <Route path="/Option_user" element={<Option_user></Option_user>}></Route>
              <Route path="/fl" element={<FollowOAa></FollowOAa>}></Route>


            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;