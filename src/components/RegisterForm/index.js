import './index.css'

import { useState, useEffect } from "react"
import { RxCross1 } from "react-icons/rx";
import {Link, useNavigate} from 'react-router-dom'
import {Component} from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

const validator = require('validator');


// class RegisterForm extends Component {
//     state = {
//         name: '',
//         email: '',
//         emailError: '' ,
//         isSubmit: false,
//         timer: 5,
//     }
    
//     onChangeName = (event) => {
//         this.setState({name: event.target.value})
//     }
//     onChangeEmail = (event) => {
//         this.setState({email: event.target.value})
//     }

//     onSubmitForm = (event) => {
        
//         event.preventDefault();
//         this.setState((prev) => ({isSubmit: !prev.isSubmit}))
//         // setTimeout(() => {
//         //     this.setState((pre) => ({timer: pre.timer - 1}))
//         // }, 5000)
//         // setTimeout(() => useNavigate('/'), 5000)
        
//         const Fun = () => {
//             const navigate = useNavigate()
//             setTimeout(() => navigate.push('/'), 5000)
//         }
//         Fun()

//     }
//     render(){
//         const {name, email, isSubmit, timer} = this.state 
//         const isEmailValid =  validator.isEmail(email)
//         const isValid = isEmailValid && name
//         const className = `btn  ${ isValid? "btn-submit" : 'btn-none'}`
//         return(
//             <div className='register-container'>
//                 <nav className='nav-bar'>
//                     <img className='logo' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715003015/jc5w5ydzmaj6tcmm1dhm.png' alt='logo image' />
//                     {!isSubmit ? <Link to='/' className='link'>
//                         <button className='cancel-btn'>
//                         <RxCross1 className='cancel-icon' />
//                         </button>
//                     </Link> : null}
//                 </nav>
//                 <div className='title-container'>
//                     {isSubmit ? <FaCheckCircle className='right-icon' /> : null}
//                     <h3 className='heading-3'>{isSubmit ? "Success Submitted" : "Registration Form"}</h3>
//                     <p className='paragraph-1'>{isSubmit ? 'Congratulations' : "Start your success Journey here!"}</p>
//                     {isSubmit ? <p className='success-para'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p> : null}
//                 </div>
//                 {isSubmit ? null : <form className='form' onSubmit={this.onSubmitForm}>
//                     <input className='input' onChange={this.onChangeName} placeholder='Enter your name' type='text' />
//                     <input className='input' onChange={this.onChangeEmail} placeholder='Enter your email' type='email' />
//                     <button type='submit' disabled={!isValid} className={className}>Submit</button>

//                 </form>}
//                 {isSubmit ? <p className='timer-text'>Redirecting you to Homepage in <span className='count-text'>{timer} Seconds</span></p> : null   }
//             </div>
//         )
//     }
// }
const RegisterForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmit, setSubmit] = useState(false);
    const [timer, setTimer] = useState(5);
    const [errorMesg, setError] = useState("")
    
    const isEmailValid =  validator.isEmail(email)
    const isValid = isEmailValid && name
    const className = `btn  ${ isValid? "btn-submit" : 'btn-none'}`
    const [startTimer, setStartTimer] = useState(false)

    useEffect( () => {
        let timerId;
        if (startTimer && timer > 0) {
            timerId = setTimeout(() => {
              setTimer(timer - 1);
            }, 1000);
        }
        return () => clearTimeout(timerId)
    }, [timer, startTimer])
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
        setError(isEmailValid ? null : "Enter a valid email address")
    }
    
    const onSubmitForm = (event) => {
        
        event.preventDefault();
        setSubmit((prev) => ( !prev.isSubmit))
        setTimer(5)
        setStartTimer(true)
        setTimeout(() => navigate('/'), 5000)
        
        
            
    }
    return(
        <div className='register-container'>
        <nav className='nav-bar'>
            <img className='logo' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715003015/jc5w5ydzmaj6tcmm1dhm.png' alt='logo image' />
            {!isSubmit ? <Link to='/' className='link'>
                <button className='cancel-btn'>
                <RxCross1 className='cancel-icon' />
                </button>
            </Link> : null}
        </nav>
        <div className='title-container'>
            {isSubmit ? <FaCheckCircle className='right-icon' /> : null}
            <h3 className='heading-3'>{isSubmit ? "Success Submitted" : "Registration Form"}</h3>
            <p className='paragraph-1'>{isSubmit ? 'Congratulations' : "Start your success Journey here!"}</p>
            {isSubmit ? <p className='success-para'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p> : null}
        </div>
        {isSubmit ? null : <form className='form' onSubmit={onSubmitForm}>
            <input className='input' onChange={onChangeName} placeholder='Enter your name' type='text' />
            <input className='input' onChange={onChangeEmail} placeholder='Enter your email' type='email' />
            <div className='error-div'>{errorMesg ? <div className='error-box'><MdError className='error-icon' /><p className='error-mesg'>{errorMesg}</p></div> : null}</div>
            <button type='submit' disabled={!isValid} className={className}>Submit</button>

        </form>}
        {isSubmit ? <p className='timer-text'>Redirecting you to Homepage in <span className='count-text'>{timer} Seconds</span></p> : null   }
    </div>
    )

    
}
export default RegisterForm 