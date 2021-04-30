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
// @material-ui/icons
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout
import ProfileContainer from 'views/Profile/Container';
import LoginContainer from './views/Login/Container';
import UsersContainer from './views/Users/Container';


const dashboardRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: Person,
    component: ProfileContainer,
    layout: "",
    subPath: "/:userId?"
  },

  {
    path: "/users",
    name: "Users",
    icon: Person,
    component: UsersContainer,
    layout: "",
    subPath: ""
  },

  {
    path: "/login",
    name: "Login",
    icon: Person,
    component: LoginContainer,
    layout: "",
    subPath: ""
  }
];

export default dashboardRoutes;
