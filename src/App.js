import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Resources from "./components/Resources";
import HumsafarTrustPage from "./components/HumsafarTrustPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <Resources />
      <HumsafarTrustPage/>
      <AboutPage />
      <ContactPage />
      <SignUpPage />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
