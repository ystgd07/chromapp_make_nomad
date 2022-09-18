const quotes=[
    {
        quote:"The day's cold",
        author:'korea monster'
    }
    ,{
        quote:'We gonna die.. shit',
        author:'korea monster'
    }
    ,{
        quote:"Oh I'm so sorry i don't know about day that have to go gym",
        author:'korea monster'
    }
    ,{
        quote:'Oh sorry i dont know english well ',
        author:'korea monster'
    }
    ,{
        quote:'OH aH yeah~',
        author:'korea monster'
    }
    ,{
        quote:'oh woo yaa',
        author:'korea monster'
    }
    ,{
        quote:'Look at this is the best ship in my contry and my mind',
        author:'korea monster'
    }
    ,{
        quote:'Go go go dont stop dont move and go!',
        author:'korea monster'
    }
    ,{
        quote:'Ang just Ang',
        author:'korea monster'
    }
    ,{
        quote:'It becomes ten centence and you gain good luck!👍',
        author:'korea monster'}]
const quote=document.querySelector('#quote span:first-child')
const author=document.querySelector('#quote span:last-child')

const arraysQuote=quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText=arraysQuote.quote
author.innerText=arraysQuote.author