import React from 'react';

const Heading = () => {
    return (
        <div className="mb-10 container mx-auto">
            <h1 className="text-4xl md:text-[42px] font-extrabold tracking-tight">
                <span className="text-[#151924]">Explore the </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e34b9b] to-[#bc50b8]">
                    Technologies
                </span>
            </h1>
            <p className="mt-3 text-lg text-slate-500">
                Pick one technology per category to build your ideal stack.
            </p>
        </div>
    );
};

export default Heading;