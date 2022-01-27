//  simple sleek home screen

// fetch req data from api **

// search function

// crypto currency component

import { array } from 'prop-types';
import React, {useState, useEffect} from 'react'
import { Link, useHistory, NavLink } from "react-router-dom";
import ViewMore from './ViewMore'




let Api ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
// let c_price ='https://api.coindesk.com/v1/bpi/currentprice.json'


const c_price = []

function CryptoCard(){

  // let history = useHistory();

  // function HomeButton() {
  //   history.push('/viewmore', { Array})
  // }  
  
const [Array, setArray] = useState([])
const [route, setroute] = useState(false)
// let c_price = []

// const [price, setprice] = useState([])

// async function cryptoPrice(){
//   const val = await fetch(Api);
//   const cryptoval = await val.json()
//   console.log(cryptoval[0].symbol)
//   console.log(price)
// }

async function Crypto(){
  const data = await fetch(Api);
  const cryptoData = await data.json()
  setArray(cryptoData);
  console.log(cryptoData)
  console.log(cryptoData[0].id)
} 

// fetching data
    useEffect( () => {
        Crypto();
    // setInterval(() => {
    //     cryptoPrice()
    //     return () => { clearInterval() }
    // }, 40000);
  
    }, [ 1 ])
        
    if(array.length == 0){
      return <div class='flex justify-items-center text-xl justify-center'>loading....</div>
    }
    else{
      return(
        Array.map(( index ) =>{
            return(
            // tail block code
              <div key={index.id} class='bg-white ml-60 p-2 rounded-sm shadow-sm mt-10 text-xl max-w-4xl w-auto  font-bold flex justify-between space-x-4 items-center'>
                    

                      <div class=' px-4'>
                        <img class='w-8 h-8' src={index.image}></img>
                      </div>
                        <div class=' px-4'>{index.id}</div>
                        <div class=' px-4'>
                          <h1>PRICE</h1>
                          <div>${index.current_price}</div>
                        </div>
                        <div class=' px-4'>{index.price_change_percentage_24h}</div>
                        <div class=' px-4'>{index.symbol}</div>
                    
                    
                   <div class='bg-blue-600 static right-10 rounded-sm text-white text-sm font-semibold p-1 shadow-md hover:bg-yellow-400'>
                      <button ><NavLink to={{pathname:'/viewmore', state:index}} prp={index.id} >viewmore</NavLink></button>
                      
                   </div>
                      
              </div>
            )
        })
    )
    }
    
}



// search function


export default function HomeScreen() {


    return (
        <div>
          
            <div class='bg-indigo-dark'>
                    < CryptoCard />
            </div>
        
        </div>
    )
}

