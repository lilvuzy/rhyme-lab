// get relevant dom elements
const queryInputElem = document.getElementById("query");

const searchForm = document.getElementById("search-form");

const resultDiv = document.getElementById("results");

searchForm.addEventListener("submit", (event) => {
  console.log("submitting");
  event.preventDefault();
});

const results = document.getElementById("results");

// add event listener to know when to search

queryInputElem.addEventListener("keyup", async function (ev) {
  ev.preventDefault();
  if (ev.key == "Enter") {
    console.log("pressed enter");

    const rhymeResultsResp = await fetch(
      `https://rhymebrain.com/talk?function=getRhymes&word=${queryInputElem.value}`
    );
    console.log(rhymeResultsResp);
    const rhymeResults = await rhymeResultsResp.json();

    console.log(rhymeResults);
    displayRhymeElements(rhymeResults);
  }
});

function displayRhymeElements(rhymeResults) {
  while (resultDiv.firstChild) {
    resultDiv.removeChild(resultDiv.firstChild);
  }

  rhymeResults.forEach((element) => {
    let newElement = document.createElement("p");
    var newContent = document.createTextNode(element.word);

    newElement.setAttribute(
      "style",
      `font-size: ${element.score / 3}px` +
        "; display: inline-block; margin: 10px;"
    );

    newElement.appendChild(newContent);

    resultDiv.insertAdjacentElement("beforeend", newElement);
  });
}
