var civicKey = ""

document.getElementById("apiSaveButt").addEventListener("click",saveAuth);

function saveAuth() {
    chrome.storage.local.set({ "civic": document.getElementById("civicKey").value, 
    "gpt": document.getElementById("gptKey").value}).then(() => {
        console.log("Civic Key is set " + document.getElementById("civicKey").value);
        civicKey = document.getElementById("civicKey").value;
        console.log("GPT Key is set");
        testFetch();
    });
    chrome.storage.local.get(["civic"], function(items){
        console.log("After Safe: " + items.civic);
    })
}

function getAuth(x){
    y = "";
    if (x=="civic") {
        chrome.storage.local.get(["civic"], function(items){
            y = items.civic;
        });
        setTimeout(function(){
            console.log("get after " + y);
            
        }, 500)
        setTimeout(function(){
            return y;
        }, 1000)
        
    }
    else {
        chrome.storage.local.get(["gpt"], function(items){
            y = items.gpt;
        });
        setTimeout(function(){
            console.log("get after " + y);
            return y;
        }, 1000)
    }
}

async function testFetch() {
    
    setTimeout(function(){
        console.log(civicKey);
    }, 500)
    
    
    const response = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key="+civicKey+"&address=1014%20Gustafson%20Ave%20Blacksburg%20VA%2024060&roles=legislatorLowerBody")
    const output = await response.json();
    console.log(output.officials[0].urls[0]);
}


