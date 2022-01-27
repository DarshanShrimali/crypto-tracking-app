import React from 'react'
import {useLocation, NavLink } from 'react-router-dom';

import News from './news';

export default function Newssummary() {

    const location = useLocation();

    const data = location.state;

    console.log(data);

    return (
        <div class='mt-10'>
            
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-full h-64" src={data.newsdata[0][data.index].multimedia[0].url} alt="Article" />

        <div class="p-6">
            <div>
                <h4 href={data.newsdata[0][data.index].short_url}><span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">by NYTIMES</span></h4>
                <h4 href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{data.newsdata[0][data.index].title}</h4>
                <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">{data.newsdata[0][data.index].abstract}</div>
            </div>


            <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" src="https://image.flaticon.com/icons/png/512/1479/1479708.png" alt="Avatar" />
                        <h4 href={data.newsdata[0][data.index].link} class="mx-2 font-semibold text-gray-700 dark:text-gray-200 hover:text-yellow-400">{data.newsdata[0][data.index].section}</h4>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                </div>
            </div>
        </div>
    </div>
    <div>
        <News />
    </div>
        </div>
    )
}
