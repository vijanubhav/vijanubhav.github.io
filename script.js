// Weight converter JS
document.getElementById('weight-link-app').addEventListener('click', () => {
    document.getElementById('weight-app').classList.toggle('invisible');
})

document.getElementById("weight-output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", (e) => {
    document.getElementById("weight-output").style.visibility = "visible";
    let lbs = e.target.value;
    document.getElementById("gramsOutput").innerHTML = (lbs / 0.0022046).toFixed(2);
    document.getElementById("kgOutput").innerHTML = (lbs / 2.2046).toFixed(2);
    document.getElementById("ozOutput").innerHTML = lbs * 16;
});

//Weather converter JS
document.getElementById('weather-link-app').addEventListener('click', () => {
    document.getElementById('weather-app').classList.toggle('invisible');
})

document.getElementById("weather-output").style.visibility = "hidden";
let form = document.getElementById('weather-search');
let api_key = 'f7e4aab76dbbbe522e98aa1ef7c2c657';

form.addEventListener('submit', async (e) => {
    document.getElementById("weather-output").style.visibility = "visible";
    e.preventDefault();
    let city = document.getElementById('city').value;
    let urlString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let response = await fetch(urlString);
    let data = await response.json();
    document.getElementById("kevlinOutput").innerHTML = (data.main.temp).toFixed(2);
    // (K − 273.15) × 9/5 + 32 = °F
    document.getElementById("fahrenheitOutput").innerHTML = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(2);
    // K − 273.15 = °C
    document.getElementById("degreeOutput").innerHTML = (data.main.temp - 273.15).toFixed(2);
})

//NEWS API JS
document.getElementById('news-link-app').addEventListener('click', () => {
    document.getElementById('news-app').classList.toggle('invisible');
})
let newsform = document.getElementById('news-search');
let news_api_key = 'a33281c04bf8ba95b0b14bf375ccbbe9';

newsform.addEventListener('submit', async (e) => {
    e.preventDefault();
    let searchterm = document.getElementById('search-term').value;
    let news_urlString = `https://gnews.io/api/v4/search?q=${searchterm}&lang=en&token=${news_api_key}`
    let news_response = await fetch(news_urlString);
    let news_data = await news_response.json();
    console.log(news_data.articles)

    for (let i = 0; i < news_data.articles.length; i++) {

        let y = document.createElement('img');
        y.src = (news_data.articles[i].image);
        document.getElementById('resultsOutput').appendChild(y);

        let z = document.createElement('span');
        z.innerHTML = (news_data.articles[i].title);
        document.getElementById('resultsOutput').appendChild(z);

        let x = document.createElement('a');
        x.innerHTML = "Read the full article here: <br>" + (news_data.articles[i].url);
        x.href = (news_data.articles[i].url);
        document.getElementById('resultsOutput').appendChild(x);
        document.getElementById('search-term').value = '';
    }
})


document.getElementById("resetBtn").onclick = reset;

function reset() {
    document.getElementById('resultsOutput').innerHTML = "";
}

let topics = [
    { topic: 'world', url: 'https://gnews.io/api/v3/topics/world' },
    { topic: 'nation', url: 'https://gnews.io/api/v3/topics/nation' },
    { topic: 'business', url: 'https://gnews.io/api/v3/topics/business' },
    { topic: 'technology', url: 'https://gnews.io/api/v3/topics/technology' },
    { topic: 'entertainment', url: 'https://gnews.io/api/v3/topics/entertainment' },
    { topic: 'sports', url: 'https://gnews.io/api/v3/topics/sports' },
    { topic: 'science', url: 'https://gnews.io/api/v3/topics/science' },
    { topic: 'health', url: 'https://gnews.io/api/v3/topics/health' }
]

//Stocks API JS
document.getElementById('stock-link-app').addEventListener('click', () => {
    document.getElementById('stock-app').classList.toggle('invisible');
})
let stockform = document.getElementById('stock-search');
let stock_api_key = 'eb1e3adb1dbaaa4e67ccb353e07bf885';

stockform.addEventListener('submit', async (e) => {
    e.preventDefault();
    let stock = document.getElementById('stock').value.toUpperCase();
    let stock_urlString = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${stock_api_key}`
    let stock_response = await fetch(stock_urlString);
    let stock_data = await stock_response.json();
    console.log(stock_data)

    for (let i = 0; i < stock_data.length; i++) {
        document.getElementById('stockOutput').innerHTML =
            ("Symbol: " + stock_data[i].symbol + "<br>" +
                "Name: " + stock_data[i].name + "<br>" +
                "Price: $" + stock_data[i].price + "<br>" +
                "Day-High: $" + stock_data[i].dayHigh + "<br>" +
                "Day-Low: $" + stock_data[i].dayLow + "<br>" +
                "Change Percentage: " + stock_data[i].changesPercentage + "<br>" +
                "Change: $" + stock_data[i].change + "<br>");
        document.getElementById('stock').value = '';
    }
})

document.getElementById("stockresetBtn").onclick = reset;

function reset() {
    document.getElementById('stockOutput').innerHTML = "";
}


//Movies API JS
document.getElementById('movie-link-app').addEventListener('click', () => {
    document.getElementById('movie-app').classList.toggle('invisible');
})
let movieform = document.getElementById('movie-search');
let movie_api_key = '475588ce';

movieform.addEventListener('submit', async (e) => {
    e.preventDefault();
    let movie = document.getElementById('movie').value.toUpperCase();
    let movie_urlString = `http://www.omdbapi.com/?s=${movie}&apikey=${movie_api_key}`
    let movie_response = await fetch(movie_urlString);
    let movie_data = await movie_response.json();
    console.log(movie_data);

    for (let i = 0; i < movie_data.Search.length; i++) {
        //document.getElementById('movieOutput').innerHTML = ("Title: " + movie_data.Search[i].Title);

        let poster = document.createElement('img');
        poster.src = (movie_data.Search[i].Poster);
        document.getElementById('movieOutput').appendChild(poster);

        let title = document.createElement('p');
        title.innerHTML = (movie_data.Search[i].Title);
        document.getElementById('movieOutput').appendChild(title);

        let year = document.createElement('p');
        year.innerHTML = movie_data.Search[i].Year;
        document.getElementById('movieOutput').appendChild(year);

        document.getElementById('movie').value = '';
    }
})

document.getElementById("movieresetBtn").onclick = reset;

function reset() {
    document.getElementById('movieOutput').innerHTML = "";
}





