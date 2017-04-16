import React from 'react'
import PropTypes from 'prop-types'

const Cta = ({text, onClick}) => (
    <div>
        <style jsx>{`
            .button {
                transition: all 0.2s ease;
                width: 150px;
                height: 45px;
                background: black;
                color: white;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid black;
                cursor: pointer;
            }
            .button:hover {
                border: 2px solid #000;
                background: #fff;
                color: #000;
            }
            b {
                font-size: 12px;
                font-family: sans-serif;
            }
        `}
        </style>
        <div className="button" onClick={onClick}>
            <b>{text}</b>
        </div>
    </div>
)

Cta.propTypes = {
    text: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Cta