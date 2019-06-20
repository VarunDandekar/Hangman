if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then((data) => console.log("sw registerd", data))
    .catch((err)=> console.log("sw not registered", err))
}