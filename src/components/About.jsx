import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className='border-b border-neutral-900  lg:mb-10'>
            <h2 className='bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text tracking-tight text-transparent font-bold text-center text-4xl mb-10'>
                About me
            </h2>

            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-6'>
                <div className="w-full lg:w-5/12">
                    <div className='flex justify-center lg:justify-end p-10'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </div>

                <div className="w-full lg:w-5/12">
                    <p className='text-slate-500 my-2 max-w-xl p-6 font-light tracking-tighter'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

