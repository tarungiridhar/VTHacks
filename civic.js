function test() {
    try {
        console.log(process.env.CIVIC_API_KEY);
    }
    catch {
        console.log("fail");
    }
   
}