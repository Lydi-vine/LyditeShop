import React from 'react';
import { Link } from "react-router-dom";
import pop4 from '../images/pop4.jpeg';

const Intro: React.FC = () => {
    return(
        <section className='w-full px-4 py-12 md:py-20 bg-white'>
            <div className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                
                {/* Left Text Section */}

                <div className='text-center md:text-left md:w-1/2'>


                    <h3 className='text-base md:text-5xl font-bold p-0 m-0 py-10'> Sleek $ Stylish </h3>
                    <h2 className='text-3xl md:text-6xl font-extrabold text-orange-600 m-0'> Phone Case Collections 2025</h2>
                    <p className='text-gray-600 text-base md:text-2xl mb-6 py-5 font-bold'> 
                        Protect your phone in style. Discover vibrant, durable cases made just for you.
                    </p>
                    
                    <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
                      <Link to="/store">  <button className="bg-orange-600 text-white px-6 py-3  md:text-xl rounded-full font-semibold hover:bg-red-700 transition cursor-pointer">
                            Shop Now
                        </button> </Link>
                    </div>
                </div>

                {/* Right Image Section */}

                <div className='md:w-1/2 flex justify-center'>
                <img
                    src={pop4}
                    alt="Featured Phone Case"
                    className="w-130 h-130 drop-shadow-xl rounded-2xl"
                />
                </div>
            </div>
        </section>

    );
};

export default Intro;