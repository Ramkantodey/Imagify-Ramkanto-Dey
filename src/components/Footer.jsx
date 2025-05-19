import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-4 py-3 mt-20'>
            <div className='flex items-center justify-center'>
                <img src={assets.logo} width={150} alt="" />
                <p className='flex-1 border-l border-gray-400 ml-2  pl-4 text-sm text-gray-500 max-sm:hidden'>
                    Copyright © imagify-Ramkanto 2025 All rights reserved.
                </p>
            </div>



            <div className='flex gap-2.5'>
                <a href="https://www.facebook.com/ram.apo.2023" target="_blank" rel="noopener noreferrer">
                    <img src={assets.facebook_icon} width={35} alt="Facebook" />
                </a>
                <a href="https://x.com/RamKanto_Dey" target="_blank" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} width={35} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/ramkanto_dey/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.instagram_icon} width={35} alt="Instagram" />
                </a>
            </div>
        </div>
    )
}

export default Footer
