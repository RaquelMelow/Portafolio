import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3, SiKotlin } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-10 py-6 m-10">
            <h2 className='mb-10 text-center text-4xl font-bold bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-400 text-transparent bg-clip-text'>
                Technologies
            </h2>

            <div className='flex flex-wrap items-center justify-center gap-8 text-white'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-red-500'>
                    <SiHtml5 className="text-7xl text-white" />
                    <p className="text-center mt-2">HTML</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-blue-500'>
                    <SiCss3 className="text-7xl text-white" />
                    <p className="text-center mt-2">CSS</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-500'>
                    <SiJavascript className="text-7xl text-white" />
                    <p className="text-center mt-2">JavaScript</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-blue-600'>
                    <RiReactjsLine className="text-7xl text-white" />
                    <p className="text-center mt-2">React</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-green-500'>
                    <FaNodeJs className="text-7xl text-white" />
                    <p className="text-center mt-2">Node.js</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-green-700'>
                    <SiMongodb className="text-7xl text-white" />
                    <p className="text-center mt-2">MongoDB</p>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-blue-800'>
                    <SiKotlin className="text-7xl text-white" />
                    <p className="text-center mt-2">Kotlin</p>
                </div>
            </div>
        </div>
    )
}

export default Technologies;


