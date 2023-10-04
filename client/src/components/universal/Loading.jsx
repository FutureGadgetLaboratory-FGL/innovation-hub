import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = ({ z }) => {
    return (
        <>
            <div className={`flex justify-center items-center h-screen w-screen ${'z-' + z} fixed top-0 left-0 bg-slate-300 bg-opacity-30 backdrop-filter backdrop-blur-sm`}>
                <FontAwesomeIcon icon="spinner" className="text-4xl text-blue-500 animate-spin" />
            </div>
        </>
    )
}

export default Loading