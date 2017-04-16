import React from 'react'
import PropTypes from 'prop-types'
import Input from 'react-input-autosize'

const JobStoryFragment = ({id, text, onChange, value}) => (
    <span>
        <style>{`
            .text {
            padding-left: 10px;
            }
            input {
                min-width: 50px;
                border: none;
                outline: none;
                border-bottom: 1px solid black;
            }
        `}
        </style>
        <span className="text">{text}</span> <Input name={id} id={id} type="text" onChange={onChange} value={value}/>
    </span>
)

JobStoryFragment.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default JobStoryFragment