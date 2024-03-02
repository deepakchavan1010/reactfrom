import React, { useState } from 'react'

export const Form = () => {
    //hooks
    //all hooks will start with use keyword
    //state
    const [values, setValues] = useState({ firstname: "", lastname: "" })
    const [data, setData] = useState({ firstname: "", lastname: "" })
    //creating a function to get the onchange values from inputs element
    function onChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function onSubmit(e) {
        e.preventDefault()
        setData(values)
    }

    return (
        <>
            <h3>Prescription form</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="firsName">First Name</label>
                <br />
                <input onChange={onChange} type="text" id='firsName' name='firstname' />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input onChange={onChange} type="text" id='lastName' name='lastname' />
                <br />
                <button>Submit</button>
            </form>
            <span>First Name is = {data.firstname}</span>
            <br />
            <span>Last Name is = {data.lastname}</span>
        </>
    )
}