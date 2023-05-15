import React, { useState } from 'react'
// import useHook from './useHook';

export default function MultipleInputs(props) {
    
    const [enterName, setEnterName] = useState('');
    const [enterNameTouched, setEnterNameTouched] = useState(false);

    const [enterEmail, setEnterEmail] = useState('');
    const [enterEmailTouched, setEnterEmailTouched] = useState(false);

    const nameIsValid = enterName.trim().length < 3 || enterName.trim().length > 20 && enterName.trim() === '';
    const enterNameTouchedInvalid = nameIsValid && enterNameTouched;

    const emailIsValid = enterEmail.includes('@') ;
    const enterEmailTouchedInvalid = !emailIsValid && enterEmailTouched;

    let totalForms = false;
    if(!nameIsValid &&  emailIsValid) {
        totalForms = true;
    };

    const nameChangeHandler = e => {
        setEnterName(e.target.value);
    }
    const nameBlurHandler = e => {
        e.preventDefault();
        setEnterNameTouched(true);
    }
    const emailChangeHandler = e => {
        setEnterEmail(e.target.value);
    }
    const emailBlurHandler = e => {
        e.preventDefault();
        setEnterEmailTouched(true);
    }
    const submitHandler = e => {
        e.preventDefault();
        setEnterNameTouched(true);
        setEnterEmailTouched(true);
        console.log('clicked')
        if (!nameIsValid && emailIsValid) {
            setEnterName('');
            setEnterNameTouched(false);
            setEnterEmail('');
            setEnterEmailTouched(false);
            return;
        }

    }

    const invalidInputName = enterNameTouchedInvalid ? 'form invalid' : 'form';
    const invalidInputEmail = enterEmailTouchedInvalid ? 'form invalid' : 'form ';

    return (
        <div className='form-controls'>
            <form onSubmit={submitHandler}>
                <div className={invalidInputName} >
                <label htmlFor='name'>Enter Name: </label>
                <input value={enterName} className='input-field' onBlur={nameBlurHandler} onChange={nameChangeHandler} type='text' id='name' name='name' />
                {enterNameTouchedInvalid && <p>It must have words between 3 and 20 and can't be empty</p>}
                </div>
                
                <div className={invalidInputEmail} >
                <label htmlFor='email'>Enter Email: </label>
                <input value={enterEmail} className='input-field' onBlur={emailBlurHandler} onChange={emailChangeHandler} type='email' id='email' name='E-mail' />
                {enterEmailTouchedInvalid && <p>Please enter valid Email</p>}
                </div>
                
                <button disabled={!totalForms} className='submit-btn' type='submit'  >Submit</button>
            </form>
        </div>
    )
}

