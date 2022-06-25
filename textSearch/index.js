let textToSearch = document.getElementById("text-to-search");
let paragraph = document.getElementById("paragraph");

textToSearch.addEventListener("input", search);

function search() {
    let inputValue = textToSearch.value;
    console.log(inputValue);
    inputValue = inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${inputValue}`, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, (match) => `<mark>${match}</mark>`)

}
