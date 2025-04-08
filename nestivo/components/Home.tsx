'use client'
import React, { useEffect, useState } from 'react'


const Loading = ({loading} : {loading: number }) => {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <p className='font-[family-name:var(--font-geist-mono)]'>Nestivo</p>
            {loading}%
        </div>
    )
}
const Home = () => {
    // track load progress using state variable
    // create some fake loading simulation
    // display welcome content when progress hits 100%
    const [progress, setprogress] = useState(0);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        if (progress < 100) {
            const interval = setInterval(() => {
                setprogress((prev) => Math.min(prev + Math.floor(Math.random() * 10 + 1), 100));
            }, 200);
            return () => clearInterval(interval)
        } else {
            const timeout = setTimeout(() => setloading(false), 500);
            return () => clearTimeout(timeout)
        }
    }, [progress]
)
    if (loading) {
        return <Loading loading={progress}/>
    }

    return (
        <div className='flex justify-center items-center loading'>
            <div className="flex items-center justify-center h-screen bg-white text-black flex-col">
                <h1 className="text-5xl font-bold">Welcome to My Website</h1>
                <p className="text-lg mt-4">Let's explore something cool!</p>
            </div>
        </div>
    );
}

export default Home