var civicKey = ""
var gptKey = ""
var repName = ""
var repImage = ""
var repURL = ""

if (document.title == "api") {
    document.getElementById("apiSaveButt").addEventListener("click",saveAuth);
}

if (document.title == "repOutput") {
    getAuth()
}


function saveAuth() {
    chrome.storage.local.set({ "civic": document.getElementById("civicKey").value, 
    "gpt": document.getElementById("gptKey").value}).then(() => {
        console.log("Civic Key is set " + document.getElementById("civicKey").value);
        civicKey = document.getElementById("civicKey").value;
        console.log("GPT Key is set " + document.getElementById("gptKey").value);
        gptKey = document.getElementById("gptKey").value;
    });
}

function getAuth(){
        civicKey = "";
        x = "";
        chrome.storage.local.get(["firstName", "lastName", "address", "city", "zip", "stateNames"], function(items){
            
            x += items.address;
            x = x.replaceAll(" ","%20")
            console.log(items.firstName)
            console.log(items.lastName)
            console.log(items.address)
            console.log(items.city)
            x = x + "%20" + items.city;
            console.log(items.stateNames)
            
            x = x + "%20" + items.stateNames;
            console.log(items.zip)
            
                x = x + "%20" + items.zip;
        });
    
        chrome.storage.local.get(["civic"], function(items){
            civicKey = items.civic;
        });

        setTimeout(function(){
            address = x;
        }, 1000)
        
        
        
        setTimeout(function(){
            console.log("get after " + civicKey);
            setRepOutput();
        }, 1000)

        

        async function setRepOutput() {
            console.log(address + " PLEASE");
            console.log(civicKey + " PLEASE");
            
            const response = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key="+civicKey+"&address=" + address + "&roles=legislatorLowerBody")
            const output = await response.json();
            console.log(output.officials[0].name);
            document.getElementById("repWebsite").href = output.officials[0].urls[0];
            document.getElementById("repPic").src = output.officials[0].photoUrl;
            document.getElementById("repName").innerHTML = "Your Representative: "+output.officials[0].name;

            chrome.storage.local.set({ 
            "repName": output.officials[0].name, 
            "repWebsite": output.officials[0].urls[0]}).then(() => {
                
            });
            chrome.storage.local.get(["repWebsite"], function(items){
                console.log(items.repWebsite);
            });
        }
    
}