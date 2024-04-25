import React from 'react'
import "./Hero.css"
import Input from '../input/Input'
import Button from '../button/Button'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="center">
                <h1>Generate more leads with a professional landing page!</h1>
                <Input />
                <Button />
            </div>
        </div>
    )
}