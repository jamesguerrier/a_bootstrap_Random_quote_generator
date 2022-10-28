
const QUOTEBANK = [{
    quote:"you miss 100% of the shots you don't take.",
    author:"-Wayne Gretzky"
},{
    quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author:"-Anne Frank"
},{
    quote:"it is never too late to be what you might have been.",
    author:"-George Eliot"
},{
    quote:"Life is 10% what happens to me and 90% of how I react to it.",
    author:"-Charles Swindoll"
},{
    quote:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author:"Jamie Paolinetti"
},{
    quote:"Certain things catch your eye, but pursure only those that capture the heart.",
    author:"-Ancient Indian Proverb"
},{
    quote:"Two roads diverged in a wood and|--| took the one less traveled by, And that has made all the difference.",
    author:"-Robert Frost"
},{
    quote:"The question isn't who is going to let me; it's who is going to stop me.",
    author:"-Ayn Rand"
},{
    quote:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author:"-Maya Angelou"
},{
    quote:"Nothing is possible,the word itself says, 'I/'m possible!'.",
    author:"--Audrey Hepburn"
}];




window.onload = unit;
function unit() {
    generateQuote()

}

function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let quoteIndex = Math.floor(Math.random()*quoteSize);
    let randomQuoteData = QUOTEBANK[quoteIndex];
    let twitterLink = "twitter.com/intent/tweet"
    
    
    
    document.getElementById("tweet-quote").href=twitterLink;
    document.getElementById("text").innerHTML=randomQuoteData.quote
    document.getElementById("author").innerHTML=randomQuoteData.author
}