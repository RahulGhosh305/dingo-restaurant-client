import React from 'react';
import ContactBody from './ContactBody/ContactBody';
import ContactHeader from './ContactHeader/ContactHeader';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <div>
            <ContactHeader />
            <ContactBody />
            <Footer />
        </div>
    );
};

export default Contact;