var civicKey = ""
var gptKey = ""
var repName = ""
var repImage = ""
var repURL = ""

if (document.title == "api") {
    document.getElementById("apiSaveButt").addEventListener("click",saveAuth);
}

if (document.title == "repOutput") {
    setRepOutput()
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

async function setRepOutput() {
    const response = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key="+civicKey+"&address=" + retrieve() + "&roles=legislatorLowerBody")
    const output = await response.json();
    document.getElementById("repWebsite").href = output.officials[0].urls[0];
    document.getElementById("repPic").src = output.officials[0].photoUrl;
}

async function testFetch() {
    
    setTimeout(function(){
        console.log(civicKey);
    }, 500)
    
    
    const response = await fetch("https://www.googleapis.com/civicinfo/v2/representatives?key="+civicKey+"&address=1014%20Gustafson%20Ave%20Blacksburg%20VA%2024060&roles=legislatorLowerBody")
    const output = await response.json();

    const gpt = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + gptKey
        },
        body: JSON.stringify({
          'model': 'gpt-3.5-turbo',
          'messages': [
            {
              'role': 'user',
              'content': 'Write the body of a message to my local representative David Trone that talks about why abortion should be legalized. My name is Tarun Giridhar'
            }
          ],
          'temperature': 0.7
        })
      });
    const gptOut =  await gpt.json();
    console.log(gptOut);   
    console.log(output.officials[0].urls[0]);
}


