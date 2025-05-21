import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'      // এখানে 'Steps' Capital S হবে
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import GenerateBtn from '../components/GenerateBtn'
import Servercopy from '../components/Servercopy'

const Home = () => {
    return (
        <div>
            <Header />
            <Steps />
            <Description />
            <Testimonial />
            <GenerateBtn />
            <Servercopy />
        </div>
    )
}

export default Home
