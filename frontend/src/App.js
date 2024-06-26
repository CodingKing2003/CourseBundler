import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import NotFound from './components/Layout/NotFound/NotFound';
import Subscribe from './components/Payments/Subscribe';
import CoursePage from './components/CoursePage/CoursePage';

function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/course/:id' element={<CoursePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
