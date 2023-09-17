document.getElementById("saveButt").addEventListener("click",store);
document.getElementById("nextButt").addEventListener("click",store);
document.getElementById("retrieveButt").addEventListener("click",retrieve);

function store() {
    chrome.storage.local.set({ "firstName": document.getElementById("FirstName").value, 
    "lastName": document.getElementById("LastName").value, "address": document.getElementById("Address").value,
    "city": document.getElementById("City").value, "zip": document.getElementById("Zip").value,"stateNames": document.getElementById("StateNames").value
    }).then(() => {
        console.log("First Name is set");
        console.log("Last Name is set");
        console.log("Address is set");
        console.log("City is set");
        console.log("Zip is set");
        console.log("State Names is set");
    });
    
    chrome.storage.local.get(["firstName", "lastName", "address", "city", "zip", "stateNames"], function(items){
        console.log(items.firstName)
        console.log(items.lastName)
        console.log(items.address)
        console.log(items.city)
        console.log(items.zip)
        console.log(items.stateNames)
    });
}

function retrieve() {
    x = "";

    chrome.storage.local.get(["firstName", "lastName", "address", "city", "zip", "stateNames"], function(items){
        console.log(items.firstName)
        document.getElementById("FirstName").value = items.firstName;
        console.log(items.lastName)
        document.getElementById("LastName").value = items.lastName;
        console.log(items.address)
        document.getElementById("Address").value = items.address;
        x += items.address;
        x = x.replaceAll(" ","%20")
        console.log(items.city)
        document.getElementById("City").value = items.city;
        x = x + "%20" + items.city;
        console.log(items.stateNames)
        document.getElementById("StateNames").value = items.stateNames;
        x = x + "%20" + items.stateNames;
        console.log(items.zip)
        document.getElementById("Zip").value = items.zip;
            x = x + "%20" + items.zip;
    });

    setTimeout(function(){
        console.log("get after " + x);
        return x;
    }, 1000)
}

function saveAuth() {
    chrome.storage.local.set({ "civic": document.getElementById("civicKey").value, 
    "gpt": document.getElementById("gptKey").value}).then(() => {
        console.log("Civic Key is set");
        console.log("GPT Key is set");
    });
}

function getAuth(x){
    y = "";
    if (x=="civic") {
        chrome.storage.local.get(["civicKey"], function(items){
            y += items.civicKey;
        });
        setTimeout(function(){
            console.log("get after " + y);
            return y;
        }, 500)
    }
    else {
        chrome.storage.local.get(["gptKey"], function(items){
            y += items.gptKey;
        });
        setTimeout(function(){
            console.log("get after " + y);
            return y;
        }, 500)
    }
}
