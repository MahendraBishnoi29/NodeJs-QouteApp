const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweet = document.getElementById("tweetMe");
let realData = "";
let qoutesData = "";

//FOR TWITTER ACCESS
const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${qoutesData.text} -${qoutesData.author} `;
  window.open(tweetPost);
};

//FOR GETTING A RANDOM NEW QOUTE
const getNewQoute = () => {
  let rNum = Math.floor(Math.random() * 10);
  qoutesData = realData[rNum];
  quotes.innerText = ` ${qoutesData.text} `;
  qoutesData.author == null
    ? (author.innerText = unkown)
    : (author.innerText = ` ${qoutesData.author} `);
};

//GETTING API
const getQoutes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    // console.log(realData[5].text);
    getNewQoute();
  } catch (error) {}
};

//ADDING EVENTLISTNERS
newQ.addEventListener("click", getNewQoute);
tweet.addEventListener("click", tweetNow);
getQoutes();
