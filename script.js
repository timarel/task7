function getWordCount(str,word) {
    let pos = 0;
    let amnt = 0;
    while (true) {
        let foundPos = str.indexOf(word, pos);
        if (foundPos == -1) break;
        pos = foundPos + 1;
        amnt += 1; 
    }
    return amnt
}

document.getElementById("sbmt").addEventListener("click", function (e) {
    var str = document.getElementById("str").value;
    var word = document.getElementById("word").value;  
    document.getElementById('result').innerHTML = getWordCount(str,word)
})