document.getElementById("apiSaveButt").addEventListener("click",saveAuth);

function saveAuth() {
    chrome.storage.local.set({ "civic": document.getElementById("civicKey").value, 
    "gpt": document.getElementById("gptKey").value}).then(() => {
        console.log("Civic Key is set");
        console.log("GPT Key is set");
    });
}