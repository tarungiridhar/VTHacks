function store() {
    chrome.storage.local.set({ "firstName": document.getElementById("FirstName") }).then(() => {
        console.log("First Name is set");
      });

    chrome.storage.local.get(["firstName"]).then((result) => {
        console.log("Value currently is " + result.key);
      });
}

console.log("This is a popup!")