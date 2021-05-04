/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Suspense } from 'react';
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import PeopleIcon from '@material-ui/icons/People';
// core components/views for Admin layout
const ProfileContainer = React.lazy(() => import('views/Profile/Container'));
const LoginContainer = React.lazy(() => import('./views/Login/Container'));
const UsersContainer = React.lazy(() => import('./views/Users/Container'));


const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};


const dashboardRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: Person,
    component: withSuspense(ProfileContainer),
    layout: "",
    subPath: "/:userId?"
  },

  {
    path: "/users",
    name: "Users",
    icon: PeopleIcon,
    component: withSuspense(UsersContainer),
    layout: "",
    subPath: ""
  },

  {
    path: "/login",
    name: "Login",
    icon: Person,
    component: withSuspense(LoginContainer),
    layout: "",
    subPath: ""
  }
];

export default dashboardRoutes;