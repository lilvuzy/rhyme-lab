// get relevant dom elements
const searchBox = document.getElementById("query");

const searchForm = document.getElementById("search-form");

const resultDiv = document.getElementById("results");

// add event listener to know when to search

searchBox.addEventListener("keyup", onPress);

async function onPress(event) {
  if (event.key == "enter") {
    event.preventDefault();
    clearResults();

    console.log(searchBox.value);
    const rhymeResults = await search(searchBox.value);

    const rhymeElements = await createElements(rhymeResults);

    

  }
}

function clearResults() {
  Array.from(resultDiv.childNodes).forEach((child) => {
    child.remove;
  });
}

function search(query) {
  const results = fetch(
    `https://rhymebrain.com/talk?function=getRhymes&word=${searchBox.value}`
  ).then(function (response) {
    return response.json();
  })
  .then(function (results) {
    const truncated = results.slice(0, 10);
    console.log(truncated);
    return truncated;
  })
}

function createElements(results) {

}
