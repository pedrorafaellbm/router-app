import React from 'react'

export const InputField = (props) => {
    return (
        <div className="form-floating">
            <input type={props.type}
                className="form-control"
                id="floatingInput"
                placeholder={props.placeholder} 
                value={props.value}
                onChange={props.onChange}
                />
            <label htmlFor="floatingInput">
                {props.label}
            </label>
        </div>
    )
}
