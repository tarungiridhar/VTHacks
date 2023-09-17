document.getElementById("saveButt").addEventListener("click",generate);

function generate() {
    userIn = document.getElementById("inputWords").value;

    async function testFetch() {
    
        const gpt = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + "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"
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
        console.log(gptOut);   
        console.log(output.officials[0].urls[0]);
    }
}