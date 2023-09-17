document.getElementById("genButt").addEventListener("click",generate);
document.getElementById("repButt").addEventListener("click",newTab);

function generate() {
    userIn = document.getElementById("inputWords").value;
    console.log(userIn);
    auth = "";
    userName = "";
    repName = "";

    chrome.storage.local.get(["gpt", "firstName", "lastName", "repName"], function(items){
        auth = items.gpt;
        userName = items.firstName + " " + items.lastName;
        repName = items.repName;
    });

    

    setTimeout(function(){
        console.log("just got " + auth);
        testFetch()
    }, 1000)

    

    async function testFetch() {
    
        const gpt = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + auth
            },
            body: JSON.stringify({
              'model': 'gpt-3.5-turbo',
              'messages': [
                {
                  'role': 'user',
                  'content': "Write the body of a message to my local representative " + repName + " that talks about" + userIn + " My name is " + userName + "."
                }
              ],
              'temperature': 0.7
            })
          });
        const gptOut =  await gpt.json();
        console.log(gptOut);
        document.getElementById("inputWords").value = gptOut.choices[0].message.content;
    }
}

function newTab() {
    repSite = "";
    let text = document.getElementById("inputWords");
    text.select();
    document.execCommand("copy");
    chrome.storage.local.get(["repWebsite"], function(items){
        repsite = items.repWebsite;
    });
    
    setTimeout(function(){
        console.log("just got " + repSite);
    }, 500)

    window.open(repSite, "_blank");
}