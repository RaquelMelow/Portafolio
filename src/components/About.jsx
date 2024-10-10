import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text tracking-tight text-transparent font-bold text-center text-4xl py-16'>
                About me
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center lg:justify-start">
                    <p className='text-slate-500 my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

