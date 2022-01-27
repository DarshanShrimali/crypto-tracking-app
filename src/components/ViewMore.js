// ui design implimentation from photo 
// big screen
// mobile first approch


import React, {useState, useEffect, useRef} from 'react'
import {useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import TradingViewWidget from 'react-tradingview-widget';
import _, { isNull } from 'underscore';
import coingecko from '../api/datafetch';
import {Helmet} from "react-helmet";


export default function ViewMore(props ) {


    const [ChartData, setChartData] = useState([]);
    const [Array, setArray] = useState([]);
    // const [Chart, setChart] = useState([]);
    // const [Labels, setLabels] = useState([]);
    const [color, setcolor] = useState(false);
   
    
    
    const location = useLocation();
    
    // console.log(location)
    const data = location.state;
    
    
    const detailapi =`https://api.coingecko.com/api/v3/coins/${data.id}`;

    

    const FetchData =async () => {
        const detail = await fetch(detailapi);
        const cdata = await detail.json();
        setTimeout(setArray(cdata), 4000);
        setTimeout(console.log(Array), 6000);
        
    }

    // const Prices = [];
    // const Labels = [];
    // const label = [];

    const formatdata = index =>{
        return index.map((el) =>{
            el[1].toFixed(2);
        })
    }

   const FetchChart = async () => {
        const oneDay = await coingecko.get(`${data.id}/market_chart/`,{
            params:{
                vs_currency: "usd",
                days: "1",
            }
        });
        for (let index = 0; index < oneDay.data.prices.length; index++) {
            setChartData(oneDay.data.prices);
            
        }
        console.log(oneDay.data.prices);
        
   }

    useEffect(async () => {
       
        FetchData();
        console.log(data);
        FetchChart();
        console.log(ChartData);
    }, [ ])


    const Part1 = () => {
        return(
            <div class='flex space-x-6 mt-10 text-sm font-bold items-center md:text-5xl'>

                {/* <div >{data.coingecko_rank}</div> */}
                <div>{data.name}</div>
                <div class='text-gray-400 capitalize'>{data.symbol}</div>
                <div class='bg-yellow-100 text-yellow-300 text-sm rounded-md shadow-md h-6 p-1'>disclamare</div>
            </div>
        )
    }

    const Part2 = () => {
       
        return(
            <div class='space-x-6 mt-10 text-sm font-bold items-center bg-white container object-scale-down md:text-5xl p-0 md:p-4 md:object-none'>
                <div class='flex space-x-8 items-center p-2 md:object-null object-cover'>
                    <div class='space-y-2'>
                        <h1 class='text-lg font-semibold'>PRICE</h1>
                        <div >${data.current_price}</div>
                    </div>
                    <div class='space-y-2'>
                        <h1 class='text-lg font-semibold'>24hr CHANGE</h1>
                        <div >{data.price_change_percentage_24h}%</div>
                    </div>
                    <div class='space-y-2'>
                        <h1 class='text-lg font-semibold'>MARKET  CAP</h1>
                        <div >${Math.round(data.market_cap/1000000000)}B</div>
                    </div>
                    <div class='space-y-2'>
                        <h1 class='text-lg font-semibold'>VOLUME  24hr</h1>
                        <div >{Math.floor(data.total_volume/1000000000)}B</div>
                    </div>
                
                <div class='text-gray-400 capitalize'>{data.symbol}</div>
                <div class='bg-yellow-100 text-yellow-300 text-sm rounded-md shadow-md h-6 p-1'>disclamare</div>
                </div>
            </div>
        )
    }

    const Chart2 = () => {

        const chartreff = useRef()
        if(ChartData.length == 0){
            return <div class='bg-white text-xl font-semibold p-4 capitalize'><button onClick={() => { FetchChart()}}>loading...</button>

            </div>
        }else{
            
            console.log(ChartData);
            const data = {
                labels: ChartData,
                datasets: [
                  {
                    label: 'prices in $',
                    data: ChartData,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                  },
                ],
              };
              
              const options = {
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            labelColor: function(context) {
                                return {
                                    borderColor: 'rgb(255, 255, 0)',
                                    backgroundColor: 'rgb(255, 0, 0)',
                                    borderWidth: 2,
                                    borderDash: [2, 2],
                                    borderRadius: 2,
                                };
                            },
                            labelTextColor: function(context) {
                                return '#ffffff';
                            }
                        }
                    }
                }
              };
            return <div class='bg-white text-xl font-semibold p-4 capitalize md:w-4/5 md:h-4/5 md:p-1'><button onClick={() => { FetchChart()}}>chart is here..</button>
                    <Line data={data} options={options} />
            </div>
        }
        
    }

    const Chart1 = () => {
        return(
            <div class=''>
                <TradingViewWidget symbol={`${data.symbol}/usd`} />
            </div>
        )
    }
    
    const Keymatrix =() => {
        return(
            <div class='space-x-6 mt-10 text-2xl font-bold items-center bg-white block p-4'>
                <div class='border-b-2 border-gray-200'>
                    <div>KEY MATRIX</div>
                </div>
                <div class='flex justify-between border-b-2 border-gray-200'>
                    <div class='space-y-2 p-2 '>
                        <div class='font-normal text-lg'>24hr HIGH</div>
                        <div>${data.high_24h}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>24hr LOW</div>
                        <div>${data.low_24h}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>NET CHANGE</div>
                        <div>${data.price_change_24h}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>CHANGE ALL TIME HIGH</div>
                        <div>{data.ath_change_percentage}%</div>
                    </div>
                </div>
                <div class='border-b-2 border-gray-200'>
                    <div class='flex justify-between'>
                    <div class='space-y-2 p-2 '>
                        <div class='font-normal text-lg'>ALL TIME HIGH</div>
                        <div>${data.ath}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>TOTAL SUPPLY</div>
                        <div>{data.total_supply/1000000}M</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>Mcap. CHANGE</div>
                        <div>{data.market_cap_change_24h}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>Mcap CHANGE %</div>
                        <div>{data.market_cap_change_percentage_24h}%</div>
                    </div>
                    </div>
                </div>
                <div class='flex justify-between border-b-2 border-gray-200'>
                    <div class='space-y-2 p-2 '>
                        <div class='font-normal text-lg'>ALL TIME LOW</div>
                        <div>${data.atl}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>24hr LOW</div>
                        <div>{data.total_supply/1000000}M</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>ALL TIME LOW % CHANGE</div>
                        <div>${data.atl_change_percentage}</div>
                    </div>
                    <div class='space-y-2 p-2'>
                        <div class='font-normal text-lg'>Mcap RANK</div>
                        <div>{data.market_cap_rank}</div>
                    </div>
                </div>
            </div>
        )
    }

    const About = () => {
            if(Array.length == 0 ){
                return <div class='bg-white text-xl font-semibold p-4 capitalize'><button onClick={() => {window.location.reload()}}>loading...</button></div>
            }else{
                return <div class='bg-white text-xl font-semibold p-4 capitalize'>{Array.description['en']}</div>
            }
    }
    const Discrilimar = () => {
        return(
            <div class='text-xs font-normal  p-2 py-4 overflow-x-scroll border-b-2 border-t-2 border-white'>
                <h1>Discrilimar</h1>
                <span>jhjkhdkjslkdjfl dmflksjdklfjlksd sdflksjdjflksjdf ,dmfkljsdlkfjlksjdf dfksdjfjsd dkfjksdjflksd dflksdjf <br/>jhkjhjkhjksdhfkjshdjfhjsdhfkjhsdjkfhjksdhjk dskjfhjsdhkfhkjsdhfkj sdjfhhsdlkfjlksdjf sdfsdkjflkjsd sdnfsdlkfjlk<br/>hsdkjhfhsdjfhjkshdjkfs dsjdhfhsdfhhsdkjfs dfsdfksjdkfjlksjdf sdfksjdfkjsdjfks .</span>
            </div>
        )
    }
    const Morestats = () => {
        return(
            <div class='text-xs font-normal bg-indigo-dark  p-2 py-4 overflow-x-scroll border-b-2 border-t-2 border-white'>
                <div class='border-b-2  border-yellow-400'>MORE STATS</div>
                <div>
                    <div>
                    <img ></img>
                    <span>jhdjfhsdhfh</span>
                    </div>
                    <div>
                        <button>see more</button>
                    </div>
                </div>
                <div>
                    <div>
                    <img></img>
                    <span>jhdjfhsdhfh</span>
                    </div>
                    <div>
                        <button>see more</button>
                    </div>
                </div>
                <div>
                    <div>
                    <img></img>
                    <span>jhdjfhsdhfh</span>
                    </div>
                    <div>
                        <button>see more</button>
                    </div>
                </div>
            </div>
        )
    }

    
    // function TechnicalView(){
    //     const viewref = useRef();

    //     useEffect(() => {
    //         const script = document.createElement('script');
    //         script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
    //         script.async = true;
    //         script.innerHTML = {
    //             "interval": "1m",
    //             "width": 425,
    //             "isTransparent": false,
    //             "height": 450,
    //             "symbol": `BITSTAMP:BTCUSD`,
    //             "showIntervalTabs": true,
    //             "locale": "in",
    //             "colorTheme": "light"
    //         }
    //         viewref.current.appendChild(script);
    //     }, [])

    //     return(
    //         <div>
    //             <div class="tradingview-widget-container" ref={viewref}>
    //             <div class="tradingview-widget-container__widget"></div>
    //             <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/BTCUSD/technicals/" rel="noopener" target="_blank"><span class="blue-text">Technical Analysis for BTCUSD</span></a> by TradingView</div>
    //             </div>
    //         </div>
    //     )
    // }
    


    return (
        <div class='py-2 px-0 md:p-2 bg-gray-100 '>
            {/* {data.id}
            {data.price_change_percentage_24h}
            <div class={color? 'bg-red-300 text-white': 'bg-green-300 text-white'}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class={color? 'hidden':'flex h-6 w-6'} fill="none" viewBox="0 0 24 24" stroke="green">
                    <path stroke-linecap="floor" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class={color? 'flex h-6 w-6':'hidden'} fill="none" viewBox="0 0 24 24" stroke="red">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                </div>
                {data.current_price}
            </div> */}
            <div class='m-10'>
                {Part1()}
            </div>
            <div class='m-10'>
                {Part2()}
            </div>
            <div class='m-10 z-0'>
                {Chart1()}
            </div>
            <div class='m-10 z-0 flex justify-center'>
                {Chart2()}
            </div>
            <div class='m-10'>
                {Keymatrix()}
            </div>
            <div class='m-10'>
                {/* {TechnicalView()} */}
            </div>
            <div class='m-10'>
                {/* <iframe src={`https://lunarcrush.com/widgets/candlestick?symbol=${data.symbol}&interval=1 Week&animation=false&theme=light`} id="candlestick" frameBorder="0" border="0" cellspacing="0" scrolling="no" style="width: 100%; height: 450px;"></iframe> */}
            </div>
            <div class='m-10'>
                {About()}
            </div>
            <div class='m-10'>
                {Discrilimar()}
            </div>
            <div class='m-10'>
                
            </div>
        </div>
    )
}

