import { ChakraProvider, theme } from "@chakra-ui/react";
import ProfileNav from "./navbar/profileNav/ProfileNav";
import HomeMenuNav from "./navbar/HomeMenuNav";
import Homepage from "./components/Homepage";
import Login from "./components/Register/Login";
import Nav from "./navbar/Navbar";
import ChefRegister from "./components/Register/ChefRegister";
import FoodyRegister from "./components/Register/FoodyRegister";
import Sidebar from "./navbar/Sidebar";
import SidebarV1 from "./navbar/profileNav/SidebarV1";
import SwitchButtonLogin from "./components/SwitchButtonLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import Footer from "./components/Footer";
import PageFood from "./components/PageFood";
import ProtectedRouter from "./components/ProtectedRouter";
import AddItem from "./components/Chefpage/AddItem";
import ProfileFoodySide from "./components/ProfileFoodySide";
import Cards from "./components/Cards";
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
          <Route path="/food" element={<PageFood />} />
          <Route path="/profilefoody" element={<ProfileFoodySide />}></Route>
        </Route>
        <Route path="/card" element={<Cards />}></Route>

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
