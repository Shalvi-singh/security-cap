
import './App.css';
import SecurityCaptainForm from './Components/SecurityCaptainForm';
import React from "react";
import Footer from "./Components/Footer";
import {useEffect} from 'react';
import Main from './Components/main';
import SecurityCaptainRole from './Components/role';
import FAQ from './Components/FAQ.js';
import BenefitsSection from './Components/BenefitsSection.js';

function App() {
  const steps = [
    "Complete SecDev Certification",
    "Submit Your Application",
    "Attend The Interview",
    "Document Approval & Agreement Signing",
    "Onboarding / Training"
  ];
  const cardData = [
    { title: 'people', description: 'Exceeded My Expectations!', image: 'people.png' },
    { title: 'people1', description: 'Practical and Engaging', image: 'people1.png' },
    { title: 'people2', description: 'Great value for Money', image: 'people2.png' },
    { title: 'people3', description: 'Helpful support system', image: 'people3.png' },
    { title: 'people4', description: 'Industry-expert Instructors', image: 'people4.png' },
  ];
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <>
    <Main/>
    <div className="app">
      <h3 className="app-title">How to Become a Security Captain?</h3>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-content">
              {step.split(" ").slice(0, 2).join(" ")} <br />
              {step.split(" ").slice(2).join(" ")}
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
      <SecurityCaptainRole/>
      <BenefitsSection/>
      <h3 className="app-titles">Testimonials</h3>
      <div className="card-container">
        <div className="moving-cards">
        {cardData.map((card, index) => (
          <div key={index} className="cardTest">
            <img src={card.image} alt={card.title} className="card-image"/>
            <div className="card-content">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <SecurityCaptainForm></SecurityCaptainForm>
    <FAQ></FAQ>
      <Footer />
    </div>
    </>
  );
}

export default App;