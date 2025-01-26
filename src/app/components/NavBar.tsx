"use client"
import {Bona_Nova_SC} from 'next/font/google'

const Bon=Bona_Nova_SC({
    weight: ['400', '700'], 
    subsets: ['latin'], 
})
export default function NavBar(){
    return(
        <div>
            <nav className="absolute w-full z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className={Bon.className}>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Smaksh Dhawan</span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-purple-800/20 focus:outline-none" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className={`${Bon.className} flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent`}>
                            <li>
                                <button onClick={() => {}} className="block py-2 px-3 md:p-0 text-white hover:text-purple-300 transition-colors" aria-current="page">About</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="block py-2 px-3 md:p-0 text-white hover:text-purple-300 transition-colors">Projects</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="block py-2 px-3 md:p-0 text-white hover:text-purple-300 transition-colors">Skills</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="block py-2 px-3 md:p-0 text-white hover:text-purple-300 transition-colors">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}