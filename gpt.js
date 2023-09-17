document.getElementById("saveButt").addEventListener("click",generate);

function generate() {
    userIn = document.getElementById("inputWords").value;
    auth = "";

    chrome.storage.local.get(["gpt"], function(items){
        auth = items.gpt;
    });

    setTimeout(function(){
        console.log("just got " + auth);
    }, 1000)

    testFetch()

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
                  'content': userIn
                }
              ],
              'temperature': 0.7
            })
          });
        const gptOut =  await gpt.json();
        document.getElementById("message").value = gptOut;
        console.log(gptOut);
    }
}