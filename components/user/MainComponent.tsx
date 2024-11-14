'use client'
import React, { useState } from 'react'
import { ValidatedMainPage } from './ValidatedMainPage'
import { LoginPage } from './LoginPage'

const MainComponent = () => {
    const [validatedState, setValidatedState] = useState(false)
    return (
        <>
            {validatedState ? (
                <ValidatedMainPage />
            ) : (
                <LoginPage validatedState={validatedState} />
            )}
        </>
    )
}

export default MainComponent