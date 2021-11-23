import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    return (
        <div className="input-group mb-3">
            <select
                onChange={e => {
                    setId(e.target.value)
                }} 
                className="form-select" 
                id={name}>
                <option value="1" selected>Choose...</option>
                {[...Array(total).keys()].map(num => {
                    return(
                        <option value={num+1}>{name} - {num+1}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default InputGroup
