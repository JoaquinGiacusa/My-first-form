function main() {
  const myFormEl = document.querySelector(".my-form");
  myFormEl.addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    const obj = Object.fromEntries(formData.entries());

    const mostDifTopic = formData.getAll("diff-topic");

    obj["diff-topic"] = mostDifTopic;
    console.log(obj);
  });
}

main();
