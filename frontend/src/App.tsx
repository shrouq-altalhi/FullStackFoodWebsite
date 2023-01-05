import { ChakraProvider, theme } from "@chakra-ui/react";
import ProfileNav from "./navbar/profileNav/ProfileNav";
import HomeMenuNav from "./navbar/HomeMenuNav";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Nav from "./navbar/Navbar";
import ChefRegister from "./components/ChefRegister";
import FoodyRegister from "./components/FoodyRegister";
import Sidebar from "./navbar/Sidebar";
import SidebarV1 from "./navbar/profileNav/SidebarV1";
import SwitchButtonLogin from "./components/SwitchButtonLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Footer from "./components/Footer";
import ProtectedRouter from "./components/ProtectedRouter";
import AddItem from "./components/AddItem";
// import HomeNav from "./navbar/HomeNavbar";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chefregister" element={<ChefRegister />} />
        <Route path="/foodyregister" element={<FoodyRegister />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/item" element={<ItemPage />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/profile" element={<SidebarV1 />} />
        </Route>
        {/* <Test /> */}
        {/* <Nav />  */}
        {/* <Login /> */}
        {/* <ChefRegister /> */}
        {/* <FoodyRegister /> */}
        {/* <Homepage/> */}
        {/* <Sidebar /> */}
        {/* <SidebarV1 /> */}
        {/* <HomeNav /> */}
        {/* <HomeMenuNav/> */}
        {/* <ProfileNav /> */}
        {/* <SwitchButtonLogin/> */}
      </Routes>
      {/* <Footer /> */}
    </ChakraProvider>
  </BrowserRouter>
);
