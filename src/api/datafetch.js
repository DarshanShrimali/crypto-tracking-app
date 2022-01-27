// fetching news
import axios from 'axios';


// const newsapi = 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml';

export default axios.create({
   baseURL: `https://api.coingecko.com/api/v3/coins/`
})

