import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Marquee from "react-fast-marquee";
import html from '../../../image/Html.png'
import css from '../../../image/css.png'
import bootstrap from '../../../image/bootstrap.png'
import tailwind from '../../../image/Tailwind.png'
import react from '../../../image/reactJS.png'
import javaScript from '../../../image/javascript.png'
import node from '../../../image/nodejs.png'
import mongoDb from '../../../image/mongoDB.png'


const Skills = () => {
    return (
        <div className='lg:px-32 md:px-12 px-1'>
            <h2 className="text-5xl font-semibold text-center mb-12"><span style={{ color: 'black', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['My Skills']}
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
            <Marquee>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={html} alt="" />
                </div>

                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={css} alt="" />
                </div>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={bootstrap} alt="" />
                </div>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={tailwind} alt="" />
                </div>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={react} alt="" />
                </div>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={javaScript} alt="" />
                </div>


                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={mongoDb} alt="" />
                </div>
                <div className='p-5 bg-slate-700 rounded-lg shadow-lg mr-5'>
                    <img className='w-[150px]' src={node} alt="" />
                </div>

            </Marquee>
        </div>
    );
};

export default Skills;