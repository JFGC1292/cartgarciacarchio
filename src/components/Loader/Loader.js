import React from 'react'
import { Spinner } from 'reactstrap'
import './Loader.css'

export const Loader = () => {

    return (
        <div className="loader">
            <Spinner
                animation="border"
                size="lg"
                variant="primary"
            />
        </div>
    )
}