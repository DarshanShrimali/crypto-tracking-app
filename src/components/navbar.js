import React from 'react';
import { Link, useHistory, NavLink, Route, Switch  } from "react-router-dom";
import News from './news';

const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  

export default function Navbar() {

    function Nav(){
        return(
            <> 
   <style>{`
            .scroll-hidden::-webkit-scrollbar {
              height: 0px;
              background: transparent; /* make scrollbar transparent */
          }
          `}</style>

    <nav class="bg-indigo-dark text-white shadow dark:bg-gray-800 ">
        <div class="container px-6 py-3 mx-auto">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="green">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                        <a class="text-2xl font-bold  dark:text-white lg:text-3xl hover:text-yellow-400 dark:hover:text-gray-300" href="#">CryptoTracker</a>

                       
                        <div class="hidden mx-10 md:block">
                            <div class="relative">
                                {/* <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span> */}

                                {/* <input type="text" class="w-full py-2 pl-10 pr-4  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" /> */}
                            </div>
                        </div>
                    </div>

                    
                    <div class="flex md:hidden">
                        <button type="button" class=" dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                
                <div class="items-center md:flex">
                    {/* <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                        <a class="my-1 text-sm leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                        <a class="my-1 text-sm leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Blog</a>
                        <a class="my-1 text-sm leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Compoents</a>
                        <a class="my-1 text-sm leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Courses</a>
                    </div> */}

                    <div class="flex items-center py-2 -mx-1 md:mx-0">
                        {/* <NavLink to='/eventcalander' class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-yellow-400 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto">EVENTS CALANDER</NavLink> */}
                        <a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto" href="#">TRENDING</a>
                    </div>

                   
                    <div class="mt-3 md:hidden">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input type="text" class="w-full py-2 pl-10 pr-4  bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden flex justify-around space-x-4">
              <div>
              <Link to='/news' class="mx-4 text-xl font-bold leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0">NEWS</Link>
              <Link to='/' class="mx-4 text-xl font-bold leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0">HOME</Link>
                {/* <a class="mx-4 text-xl font-bold  leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">ANALYSIS</a>
                <a class="mx-4 text-xl font-bold  leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">GAINERS</a>
                <a class="mx-4 text-xl font-bold  leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">LOSERS</a>
                <a class="mx-4 text-xl font-bold  leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">HIGHEST</a>
                <a class="mx-4 text-xl font-bold  leading-5  dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:my-0" href="#">SENTIMENT</a> */}
                

                {/* <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                    ))}
                </select> */}
              </div>
                <div class='flex space-x-2'>
                  <button class="flex w-1/2 px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-black transition-colors duration-200 transform bg-yellow-400  hover:bg-blue-600 md:mx-2 md:w-auto">
                    index
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    </button>
                  <button class="flex w-1/2 px-3 py-2 mx-1 text-sm font-bold leading-5 text-center text-black transition-colors duration-200 transform bg-yellow-400 hover:bg-blue-600 md:mx-2 md:w-auto ">
                    top assets
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                    </button>
                </div>

            </div>
        </div>
    </nav>
    
    </>
        )
    }
    return (
        <div class='sticky top-0 z-10'>
            <Nav/>
        </div>
    )
}
