import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-center'>
            <fieldset className="w-full space-y-1 dark:text-gray-100">
                <label for="Search" className="hidden">Search</label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring" fdprocessedid="lfhnfn">

                        </button>
                    </span>
                    <input type="search" name="Search" placeholder="Add Task..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                </div>
            </fieldset>

        </div>
    );
};

export default Hero;