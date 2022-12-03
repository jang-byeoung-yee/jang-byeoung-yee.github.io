const quotes=[{
    quote:"삶이 있는 한 희망은 있다.",
    author:"키케로",
},
{
    quote:"산다는것 그것은 치열한 전투이다.",
    author:"로망로랑",
},
{
    quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
    author:"엘사 맥스웰",
},
{
    quote:"피할수 없으면 즐겨라.",
    author:"로버트 엘리엇",
},
{
    quote:"평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author:"제임스 딘",
},
{
    quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author:"괴테",
},
{
    quote:"성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author:"알랭",
},
{
    quote:"당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author:"헨리 포드",
},
{
    quote:"겨울이 오면 봄이 멀지 않으리.",
    author:"셸리",
},
{
    quote:"가난은 가난하다고 느끼는 곳에 존재한다.",
    author:"에머슨",
}]
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todayQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;