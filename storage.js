document.getElementById("saveButt").addEventListener("click",store);
document.getElementById("retrieveButt").addEventListener("click",retrieve);

function store() {
    chrome.storage.local.set({ "firstName": document.getElementById("FirstName").value }).then(() => {
        console.log("First Name is set");
    });
    
    chrome.storage.local.set({ "lastName": document.getElementById("LastName").value }).then(() => {
        console.log("Last Name is set");
    });

    chrome.storage.local.set({ "address": document.getElementById("Address").value }).then(() => {
        console.log("Address is set");
    });

    chrome.storage.local.set({ "city": document.getElementById("City").value }).then(() => {
        console.log("City is set");
    });

    chrome.storage.local.set({ "zip": document.getElementById("Zip").value }).then(() => {
        console.log("Zip is set");
    });

    chrome.storage.local.set({ "stateNames": document.getElementById("StateNames").value }).then(() => {
        console.log("State Names is set");
    });
    
    chrome.storage.local.get(["firstName"], function(items){
        console.log(items.firstName)
    });
    chrome.storage.local.get(["lastName"], function(items){
        console.log(items.lastName)
    });
    chrome.storage.local.get(["address"], function(items){
        console.log(items.address)
    });
    chrome.storage.local.get(["city"], function(items){
        console.log(items.city)
    });
    chrome.storage.local.get(["zip"], function(items){
        console.log(items.zip)
    });
    chrome.storage.local.get(["stateNames"], function(items){
        console.log(items.stateNames)
    });
}

function retrieve() {
    chrome.storage.local.get(["firstName"], x = function(items){
        console.log("Value currently is " + items.firstName);
        document.getElementById("FirstName").value = items.firstName;
    });
    chrome.storage.local.get(["lastName"], x = function(items){
        console.log("Value currently is " + items.lastName);
        document.getElementById("LastName").value = items.lastName;
    });
    chrome.storage.local.get(["address"], x = function(items){
        console.log("Value currently is " + items.address);
        document.getElementById("Address").value = items.address;
    });
    chrome.storage.local.get(["city"], x = function(items){
        console.log("Value currently is " + items.city);
        document.getElementById("City").value = items.city;
    });
    chrome.storage.local.get(["zip"], x = function(items){
        console.log("Value currently is " + items.zip);
        document.getElementById("Zip").value = items.zip;
    });
    chrome.storage.local.get(["stateNames"], x = function(items){
        console.log("Value currently is " + items.stateNames);
        document.getElementById("StateNames").value = items.stateNames;
    });
}
