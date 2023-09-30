import React from 'react'
import Signup from '../../components/spoc/Signup'

const SignupSPOC = ({ role }) => {
    return (
        <>
            <div className='flex items-center justify-center h-screen py-6 overflow-auto w-100 bg-background'>
                <Signup role={role} />
            </div>
        </>
    )
}

export default SignupSPOC