import React, { useState } from 'react'

export default function InputFocusKeystroke() {
    const [enterName, setEnterName] = useState('');
    const [enterNameTouched, setEnterNameTouched] = useState(false);

    const isValid = enterName.trim().length < 3 || enterName.trim().length > 20 && enterName.trim() === '';
    const enterTouchedInvalid = isValid && enterNameTouched

    const nameChangeHandler = e => {
        setEnterName(e.target.value);
    }
    const onBlurHandler = e => {
        e.preventDefault();
        setEnterNameTouched(true);
    }
    const submitHandler = e => {
        e.preventDefault();
        setEnterNameTouched(true);
        console.log('clicked')
        if (!isValid) {
            setEnterName('');
            setEnterNameTouched(false);
            return;
        }

    }

    const invalidInput = enterTouchedInvalid ? 'form invalid' : 'form';

    return (
        <div className='form-controls'>
            <form className={invalidInput} onSubmit={submitHandler}>
                <label htmlFor='name'>Enter Name: </label>
                <input value={enterName} className='input-field' onBlur={onBlurHandler} onChange={nameChangeHandler} type='text' id='name' name='name' />
                <button className='submit-btn' type='submit'  >Submit</button>
                {enterTouchedInvalid && <p>It must have words between 3 and 20 and can't be empty</p>}
            </form>
        </div>
    )
}

