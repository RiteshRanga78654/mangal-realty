"use client"
import React, { useState } from 'react'

const Page = () => {
  const [copied, setCopied] = useState(false);
  const email = "info@mangalrealty.com";

  const handleCopy = (e) => {
    // Optional: Only copy if you want to prevent the default mailto behavior
    // e.preventDefault(); 
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          
          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-2xl font-light text-gray-200">
              We're building something exciting — <span className="font-semibold text-white">Stay tuned for insights on sustainable living!</span>
            </p>

            <p className="text-xl md:text-2xl text-gray-300">
              Visit us soon!
            </p>

            <div className="pt-8 border-t border-white/20">
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">In the meantime, connect with us</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <a 
                  href="https://www.linkedin.com/company/mangalrealty/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                
                {/* Updated Email Link with Copy Feedback */}
                <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mangalrealty.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  info@mangalrealty.com
</a>
                
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Page