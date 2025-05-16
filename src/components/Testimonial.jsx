import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Testimonial = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center my-20 py-12  '

            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
            <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((testimonials, index) =>
                (
                    <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer  border-gray-200 hover:scale-[1.02] transition-all duration-300'>
                        <div className='flex flex-col items-center'>
                            <img src={testimonials.image} className='rounded-full w-14' alt="" />
                            <h2 className='text-xl font-semibold mt-3'>{testimonials.name}</h2>
                            <p className='text-gray-500 mb-4'>{testimonials.role}</p>
                            <div className='flex mb-4'>
                                {Array(testimonials.stars).fill().map((item, index) => (
                                    <img key={index} src={assets.rating_star} />
                                ))}
                            </div>
                            <p className='text-center text-sm'>{testimonials.text}</p>
                        </div>
                    </div>
                )
                )}
            </div>

        </motion.div>
    )
}

export default Testimonial
