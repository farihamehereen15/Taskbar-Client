import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Blogs = () => {
    return (
        <div className='my-12'>
             <h2 className="text-5xl font-semibold text-center mb-12"><span style={{ color: 'black', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['My Blogs']}
                            loop={3}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </span></h2>
            <div className='flex justify-center items-center'>
                <p className='lg:text-8xl md:text-5xl text-3xl font-thin'>C</p>
                <div className='lg:w-20 md:w-12 w-8 lg:h-20 md:h-12 h-8 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600'></div>
                <p className='lg:text-8xl md:text-5xl text-3xl font-thin'>MMING S</p>
                <div className='lg:w-20 md:w-12 w-8 lg:h-20 md:h-12 h-8 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600'></div>
                <div className='lg:w-20 md:w-12 w-8 lg:h-20 md:h-12 h-8 border-8 border-dashed rounded-full animate-spin mt-5 border-red-600'></div>
                <p className='lg:text-8xl md:text-5xl text-3xl font-thin'>N</p>
            </div>
        </div>

    );
};

export default Blogs;