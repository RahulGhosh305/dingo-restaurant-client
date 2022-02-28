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
import UserLogin from '../LoginSignUpPage/UserLogin.jsx';
import UserSignUp from '../LoginSignUpPage/UserSignUp.jsx';
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
import ViewItem from '../DashBoardPage/ViewItem/ViewItem.jsx';
import ReservationTable from '../DashBoardPage/ReservationTable/ReservationTable.jsx';
import NewBlogPost from '../DashBoardPage/NewBlogPost/NewBlogPost.jsx';
import CareerMessage from '../DashBoardPage/CareerMessagePage/CareerMessage.jsx';
import ContactMessage from '../DashBoardPage/ContactMessagePage/ContactMessage.jsx';
import ViewContactMessage from '../DashBoardPage/ViewContactMessagePage/ViewContactMessage.jsx';
import ViewCareerMessage from '../DashBoardPage/ViewCareerMessagePage/ViewCareerMessage.jsx';
import NewsLetter from '../DashBoardPage/NewsLetterPage/NewsLetter.jsx';
import UpdateMenu from '../DashBoardPage/UpdateMenuPage/UpdateMenu.jsx';
// import PrivateRoute from '../LoginSignUpPage/PrivateRoute.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={ <PrivateRoute> <About /> </PrivateRoute> } /> */}
            <Route path="/about" element={ <About /> } />
            <Route path="/menus" element={ <Menu />  } />
            <Route path="/menuSingle/:menuSingleID" element={ <MenuSingle/> } />
            <Route path='/addCart' element={<AddCart/>} />
            <Route path='/checkout' element={<UserForm />} />
            <Route path="/blogs" element={ <Blogs /> } />
            <Route path="/blogSingle/:singleID" element={<BlogSingle />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
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
                <Route path="customers" element={<Customers />} />
                <Route path="allFoods" element={<AllFoodItems />} />
                <Route path="reservationTable" element={<ReservationTable />} />
                <Route path="newBlog" element={<NewBlogPost />} />
                <Route path="careerMessage" element={<CareerMessage />} />
                <Route path="ContactMessage" element={<ContactMessage />} />
                <Route path="newsLetter" element={<NewsLetter />} />
            </Route>
            <Route path="/view/:ID" element={<ViewItem />} />
            <Route path="/updateMenu/:ID" element={<UpdateMenu />} />
            <Route path="/viewContactMessage/:ID" element={<ViewContactMessage />} />
            <Route path="/viewCareerMessage/:ID" element={<ViewCareerMessage />} />
        </Routes>
    );
};

export default Routers;