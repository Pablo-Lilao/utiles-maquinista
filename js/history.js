// Cookie management
function checkHistoryCookie() {
    var cookie = getCookie("errorHistory");
    if(cookie == "") { return; }

    var history = JSON.parse(cookie);
    if(history == ""){ return; }
    // Length before adding duplicates
    var totalQuestions = signsQuestionnaire.length;
    for(var i=0; i<history.length;i++){
        //Load historic errors
        errorsHistory.push({ name: history[i].name, errorCount: history[i].errorCount})

        for(var j=0; j<totalQuestions;j++){
            if(signsQuestionnaire[j].name === history[i].name){
                //Add failed question to the pool for each time the user failed it, multiplying probability to get that question
                for(var k=0;k<history[i].errorCount;k++){
                    signsQuestionnaire.push(signsQuestionnaire[j]);
                }
            }
        }
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
function updateHistoryCookie() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year + 1, month, day);
    document.cookie = 'errorHistory='+ JSON.stringify(errorsHistory) +';expires=' + c + ';Secure';
}
// File management
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        errorsHistory = JSON.parse(contents)
        updateHistoryCookie();
        var totalErrors=0;
        for(var i=0; i<errorsHistory.length; i++){
            totalErrors += errorsHistory[i].errorCount;
        }
        alert("Historial cargado: " + totalErrors + " preguntas falladas hasta ahora.")
    };
    reader.readAsText(file);
}