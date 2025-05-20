import React from 'react'
import { stepsData } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Steps = () => {
    return (
        <motion.div
            className='flex flex-col items-center justify-center my-32'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >

            <div className="mb-12 w-full max-w-2xl aspect-video">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center ">
                    How to Use This Website
                </h2>

                <iframe
                    className="w-full h-full rounded-lg shadow-lg "
                    src="https://www.youtube.com/embed/eRDOIBfKtM0"
                    title="🔥 Generate Stunning AI Images in Seconds with Imagify! | Easy AI Image Generator 🌟"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 mt-10'>How it works</h1>
            <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>

            <div className='space-y-4 w-full max-w-3xl text-sm'>
                {stepsData.map((item, index) => (
                    <div
                        className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg border-[#0000001f]'
                        key={index}
                    >
                        <img width={40} src={item.icon} alt={item.title} />
                        <div>
                            <h2 className='text-xl font-medium'>{item.title}</h2>
                            <p className='text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Steps
