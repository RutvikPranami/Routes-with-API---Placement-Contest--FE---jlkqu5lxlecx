import React, { useEffect, useState } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);

    useEffect(() => {
     fetch("https://api.coinlore.net/api/tickers/")
     .then((res)=>res.json())
     .then((rdata) =>setCryptoArr(rdata.data))
    }, [])
    

    
    
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>

        {
            cryptoArr.map((cryptoAr)=>{
                return(
                    <div className='coin-container' key={cryptoAr.id}>
                    <p className='rank-para'>Rank #{cryptoAr.rank}</p>
                    <h3 className='coin-symbol'>{cryptoAr.name} {cryptoAr.symbol}</h3>
                    <p className='price-para'>Price: {cryptoAr.price_usd}</p>
                </div>
                )
            })
        }

            </div>
        </div>
    )
}

export default Top
