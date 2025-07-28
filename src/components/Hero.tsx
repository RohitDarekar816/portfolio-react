import '../index.css'

function Hero() {
    return (
        <>
        <div className='flex flex-col md:flex-row md:ml-24 py-10 md:py-20 fira-code'>
            <div className='w-full md:w-1/2 p-4'>
                <p className='text-2xl md:text-[30px]'>Rohit is a <a className='text-[#C778DD]'> Devops Enginer </a> <br /> and <a className='text-[#C778DD]'> full stack developer </a></p>
                <p className='mt-5 text-sm md:text-[15px] text-[#ABB2BF]'>I am a DevOps Engineer and Full Stack Developer with a passion for building scalable and efficient systems. I specialize in cloud technologies, containerization, and automation to streamline development processes and enhance application performance.</p>
                <button className='mt-5 border border-[#C778DD] text-white px-4 py-2 text-base md:text-lg'>Contact Me</button>
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-end items-center mt-8 md:mt-0'>
                <div className='border mb-5 px-4 md:px-7 py-1'><p className='text-[#C778DD]'>#</p>Currently working on Portfolio</div>
            </div>
        </div>
        </>
    )
}

export default Hero