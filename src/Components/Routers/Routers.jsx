import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home.jsx';
import About from '../AboutPage/About.jsx';
import Menu from '../MenuPage/Menu.jsx';
import MenuSingle from '../MenuSinglePage/MenuSingle.jsx';
import Blogs from '../BlogsPage/Blogs.jsx';
import BlogSingle from '../BlogSinglePage/BlogSingle.jsx';
import Reservation from '../ReservationPage/Reservation.jsx';
import Contact from '../ContactPage/Contact.jsx';
import Career from '../CareerPage/Career.jsx';
import NotFound from '../404Page/NotFound.jsx';
import UserLogin from '../LoginSignupPage/UserLogin.jsx';
import UserSignUp from '../LoginSignupPage/UserSignUp.jsx';
import AddCart from '../AddCart/AddCart.jsx';
import UserForm from '../CheckOut/UserForm.jsx';
import DashBoard from '../DashBoardPage/DashBoard.jsx';
import AddFoodItem from '../DashBoardPage/AddFoodItemPage/AddFoodItem.jsx';
import Review from '../DashBoardPage/ReviewsPage/Review.jsx';
import OrderList from '../DashBoardPage/OrderListPage/OrderList';
import AddAdmin from '../DashBoardPage/AddAdminPage/AddAdmin';
import Customers from '../DashBoardPage/Customers/Customers.jsx';
import AllFoodItems from '../DashBoardPage/AllFoodItemPage/AllFoodItems.jsx';
import DashboardInfo from '../DashBoardPage/DashBoardInfoPage/DashboardInfo.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menus" element={<Menu />} />
            <Route path="/menuSingle/:menuSingleID" element={<MenuSingle />} />
            <Route path='/addCart' element={<AddCart />} />
            <Route path='/checkout' element={<UserForm />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogSingle" element={<BlogSingle />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signUp' element={<UserSignUp />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/dashboard/*' element={<DashBoard />} >
            {/* dashboardInfo */}
                <Route path="" element={<DashboardInfo />} />
                <Route path="addFood" element={<AddFoodItem />} />
                <Route path="reviews" element={<Review />} />
                <Route path="orderList" element={<OrderList />} />
                <Route path="addAdmin" element={<AddAdmin />} />
                <Route path="customers" element={<Customers />} />
                <Route path="allFoods" element={<AllFoodItems />} />
            </Route>
        </Routes>
    );
};

export default Routers;