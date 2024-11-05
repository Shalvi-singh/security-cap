
import "./App.css";
import SecurityCaptainForm from './SecurityCaptainForm';
import FAQ from './FAQ';
import React from "react";
import BenefitsSection from "./Components/BenefitsSection";
import Footer from "./Components/Footer";

function App() {
  return (
    
    <>
    <SecurityCaptainForm></SecurityCaptainForm>
    <div className="App">
    <BenefitsSection />
    </div>
    <FAQ></FAQ>
    <div className="App">
      <Footer />
    </div>
    </>
  );
}

export default App;
