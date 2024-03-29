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
import Admins from '../DashBoardPage/AdminPage/Admins.jsx';
import AllFoodItems from '../DashBoardPage/AllFoodItemPage/AllFoodItems.jsx';
import DashboardInfo from '../DashBoardPage/DashBoardInfoPage/DashboardInfo.jsx';
import ViewItem from '../DashBoardPage/ViewItem/ViewItem.jsx';
import ReservationTable from '../DashBoardPage/ReservationTable/ReservationTable.jsx';
import NewBlogPost from '../DashBoardPage/NewBlogPost/NewBlogPost.jsx';
import CareerMessage from '../DashBoardPage/CareerMessagePage/CareerMessage.jsx';
import ContactMessage from '../DashBoardPage/ContactMessagePage/ContactMessage.jsx';
import ViewContactMessage from '../DashBoardPage/ViewContactMessagePage/ViewContactMessage.jsx';
import ViewCareerMessage from '../DashBoardPage/ViewCareerMessagePage/ViewCareerMessage.jsx';
import NewsLetter from '../DashBoardPage/NewsLetterPage/NewsLetter.jsx';
import UpdateMenu from '../DashBoardPage/UpdateMenuPage/UpdateMenu.jsx';
import SingleFoodOrderView from '../DashBoardPage/OrderListPage/SingleFoodOrderView.jsx';
import CustomerOrder from '../DashBoardPage/CustomerOrderPage/CustomerOrder.jsx';
import CustomerOrderView from '../DashBoardPage/CustomerOrderViewPage/CustomerOrderView.jsx';
// import PrivateRoute from '../LoginSignUpPage/PrivateRoute.jsx';
import PrivateRoute from '../LoginSignupPage/PrivateRoute.jsx';
import ResetPassword from '../DashBoardPage/ResetPassword/ResetPassword.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={ <PrivateRoute> <About /> </PrivateRoute> } />
            <Route path="/menus" element={ <PrivateRoute> <Menu /> </PrivateRoute> } />
            <Route path="/menuSingle/:menuSingleID" element={ <PrivateRoute> <MenuSingle/> </PrivateRoute> } />
            <Route path='/addCart' element={<AddCart/>} />
            <Route path='/checkout' element={<UserForm />} />
            <Route path="/blogs" element={ <PrivateRoute> <Blogs /> </PrivateRoute> } />
            <Route path="/blogSingle/:singleID" element={ <PrivateRoute> <BlogSingle /> </PrivateRoute> } />
            <Route path="/reservation" element={ <PrivateRoute> <Reservation /> </PrivateRoute> } />
            <Route path="/contact" element={ <PrivateRoute> <Contact /> </PrivateRoute> } />
            <Route path="/career" element={ <PrivateRoute> <Career /> </PrivateRoute> } />
            <Route path='/login' element={<UserLogin />} />
            <Route path='/signUp' element={<UserSignUp />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/dashboard/*' element={<DashBoard />} >
            {/* Inner dashboard Routes*/}
                <Route path="" element={<DashboardInfo />} />
                <Route path="addFood" element={<AddFoodItem />} />
                <Route path="reviews" element={<Review />} />
                <Route path="orderList" element={<OrderList />} />
                <Route path="addAdmin" element={<AddAdmin />} />
                <Route path="admins" element={<Admins />} />
                <Route path="allFoods" element={<AllFoodItems />} />
                <Route path="reservationTable" element={<ReservationTable />} />
                <Route path="newBlog" element={<NewBlogPost />} />
                <Route path="careerMessage" element={<CareerMessage />} />
                <Route path="ContactMessage" element={<ContactMessage />} />
                <Route path="newsLetter" element={<NewsLetter />} />
                <Route path="customerOrder" element={<CustomerOrder />} />
                <Route path="resetPassword" element={<ResetPassword />} />
            </Route>
            <Route path="/view/:ID" element={<ViewItem />} />
            <Route path="/updateMenu/:ID" element={<UpdateMenu />} />
            <Route path="/viewContactMessage/:ID" element={<ViewContactMessage />} />
            <Route path="/viewCareerMessage/:ID" element={<ViewCareerMessage />} />
            <Route path="/foodOrderView/:ID" element={<SingleFoodOrderView />} />
            <Route path="/customerOrderViewNavigate/:ID" element={<CustomerOrderView />} />
        </Routes>
    );
};

export default Routers;