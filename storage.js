document.getElementById("saveButt").addEventListener("click",store);

function store() {
    chrome.storage.local.set({ "firstName": document.getElementById("FirstName").value }).then(() => {
        console.log("First Name is set");
      });

    /*chrome.storage.local.get(["firstName"]).then((result) => {
        console.log("Value currently is " + result);
      });*/
    
      chrome.storage.local.get(/* String or Array */["firstName"], function(items){
        //  items = [ { "phasersTo": "awesome" } ]
        console.log(items)
    });
}

