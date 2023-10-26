import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsTop from "../components/ContactUsTop";
import '../css/ContactUs.css';

function ContactUs() {
  return (
  <div className="body1">
      <Header />
      <ContactUsTop />
      <ContactUsForm />
      <Footer />
    </div>
  );
}

export default ContactUs;
