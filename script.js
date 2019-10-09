// TODO: create a handler
let actions = {
    google:"https://www.google.com/search",
    ask:"https://www.ask.com/web",
    bing:"https://www.bing.com/search",
    duckDuckGo:"https://duckduckgo.com/"
};

function setSearchEngine(engine){
    let searchEngine = "";
    for (let engineVal in actions){
        if (engineVal === engine){
            searchEngine = actions[engineVal];
        }
    }
    console.log(searchEngine);
    return searchEngine;
}


window.addEventListener("load", function(){
    // TODO: register the handler
    let form = document.querySelector("form");
    form.addEventListener("submit",function(event){
        let engine = document.querySelector("input[name=engine]:checked");
        let actionToUse = setSearchEngine(engine.value);

        form.setAttribute("action",actionToUse);
        console.log(form.action);
        // event.preventDefault();

    });
});