import React from 'react';
import './card.css';
// import certificate from '../../public/certificate.png'

const PathCard=()=> {
  return (
    <div className='card'>
        <h2>
            Your Journey to Becoming a Security Captain Starts Here
        </h2>
        <div class="gradient-line"></div>
        <br></br>
        <h3 className='steps'>Before applying to become a Security Captain, you must fulfill the following
        requirements:</h3>
        <div className='list-img'>
        <ul className='glowing-check-list'>
            <li>Transform Your Career with<span className='green'> SecDev </span>Certification.<br></br>
            <span className='small'>
            Complete SecDev Certification with SafeYourWeb's 100% OFF coupon.
            ( <a className="apply-link" href='#'> Click Here to apply</a> )
            </span>
            </li>
            <li>Pass a rigorous interview proces.</li>
            <li>Submit approved documents and sign our partnership agreement.</li>
            <li>Complete our specialized client acquisition and project management training.</li>
        </ul>
        <img className='certificate' src="./certificate.png"></img>
        </div>
        </div>
  )
}

export default PathCard;