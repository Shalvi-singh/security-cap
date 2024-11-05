import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "What if I haven't completed the SecDev certification yet?",
        answer: "You can still apply and mention that you are currently working on it.",
    },
    {
        question: "What kind of projects will I be working on?",
        answer: "You will be involved in cybersecurity-related projects that require your expertise.",
    },
    {
        question: "How do I earn as a Security Captain?",
        answer: "Earnings depend on the projects and hours you contribute.",
    },
    {
        question: "Will I receive client support from SafeYourWeb?",
        answer: "Yes, SafeYourWeb provides support for all client interactions and queries.",
    },
    {
        question: "What happens after I apply?",
        answer: "Our team will review your application and get back to you shortly.",
    }
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
<<<<<<< HEAD:src/FAQ.js
=======
        <>
        <div className='FAQ'>
>>>>>>> 04bd03c759d6229dd8ca264a14d75b2bfb98e8d9:src/Components/FAQ.js
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                        {faq.question}
                        <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
                    </div>
                    <div 
                        className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                    >
                        {faq.answer}
                    </div>
                </div>
                
            ))}
        </div>
<<<<<<< HEAD:src/FAQ.js
=======
        <div className='faq-image'> <img src="faq-image.jpeg" alt="image-loading"></img></div>
        </div>
        </>
>>>>>>> 04bd03c759d6229dd8ca264a14d75b2bfb98e8d9:src/Components/FAQ.js
    );
}

export default FAQ;


// import React, { useState } from 'react';
// import './FAQ.css';

// const faqs = [
//     {
//         question: "What if I haven't completed the SecDev certification yet?",
//         answer: "You can still apply and mention that you are currently working on it.",
//     },
//     {
//         question: "What kind of projects will I be working on?",
//         answer: "You will be involved in cybersecurity-related projects that require your expertise.",
//     },
//     {
//         question: "How do I earn as a Security Captain?",
//         answer: "Earnings depend on the projects and hours you contribute.",
//     },
//     {
//         question: "Will I receive client support from SafeYourWeb?",
//         answer: "Yes, SafeYourWeb provides support for all client interactions and queries.",
//     },
//     {
//         question: "What happens after I apply?",
//         answer: "Our team will review your application and get back to you shortly.",
//     }
// ];

// function FAQ() {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleFAQ = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <>
//         <div className="faq-container">
//             <h1>Frequently asked questions</h1>
            
//             {faqs.map((faq, index) => (
//                 <div 
//                     key={index} 
//                     className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
//                     onClick={() => toggleFAQ(index)}
//                 >
//                     <div className="faq-question">
//                         {faq.question}
//                         <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
//                     </div>
//                     {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
//                 </div>
//             ))}
//         </div>
//         </>
//     );
// }

// export default FAQ;