import React from 'react'
import { features } from '../Constants'

const Feature = () => {
  return (
    <div className='relative mt-10 border-b border-neutral-800 min-h-[800px]'>
    <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase">
            Features
        </span>
        <h2 className='text-3xl sm:text-4xl lg:text-4xl mt-6 tracking-wide'>
            Easily Build 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
          your code
        </span>
        </h2>
    </div>
    <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
</div>
  )
}

export default Feature