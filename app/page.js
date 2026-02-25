import React from 'react'

const Page = () => {
  return (
    <div>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/Mangal-Realty.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-5xl md:text-9xl font-bold ">
            Coming Soon
          </h1>
          {/* <p className="mt-4 text-lg md:text-xl text-gray-300">
            Something amazing is on the way.
          </p> */}
        </div>

      </section>
    </div>
  )
}

export default Page