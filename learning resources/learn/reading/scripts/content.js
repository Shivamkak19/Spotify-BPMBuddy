let article = document.querySelector("article");

if(article != null){

const paragraphs = document.querySelectorAll("article.p");
var count = 0;
for (var i = 0; i < paragraphs.length; i++) {
    count += paragraphs[i].textContent.split(/\s/).length;
}

console.log(count);
const time = count / 200;
const badge = document.createElement("p");
badge.textContent = `⏱️ ${time} min read`;

const header = document.querySelector("h1");
const date = document.querySelector("time")?.parentNode;

(date ?? header).insertAdjacentElement("afterend", badge)

}