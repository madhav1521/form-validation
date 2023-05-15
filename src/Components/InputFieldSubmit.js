import React, { useState } from 'react'

export default function InputFieldSubmit() {
    const [enterName, setEnterName] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [enterNameTouched, setEnterNameTouched] = useState(false);

    const nameChangeHandler = e => {
        setEnterName(e.target.value);

    }
    const submitHandler = e => {
        e.preventDefault();
        setEnterNameTouched(true);
        if (enterName.trim() === '') {
            setIsValid(false);
            return;
        }

    }
    const isValidName = () => {
        if (enterName.length < 3 || enterName.length > 20) {
            setIsValid(false);
            return;
        }
        setIsValid(true);
    }

    const enterTouchedInvalid = !isValid && enterNameTouched
    const invalidInput = enterTouchedInvalid ? 'form invalid' : 'form';

    return (
        <div className='form-controls'>
            <form className={invalidInput} onSubmit={submitHandler}>
                <label htmlFor='name'>Enter Name: </label>
                <input className='input-field' onChange={nameChangeHandler} type='text' id='name' name='name' />
                <button className='submit-btn' type='submit' onClick={isValidName} >Submit</button>
                {enterTouchedInvalid  && <p>It must have words between 3 and 20</p>}
            </form>
        </div>
    )
}
