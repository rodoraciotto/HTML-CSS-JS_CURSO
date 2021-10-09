(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var i = 0
    for (i; i < names.length; i++){
        var firstletter = names[i].charAt(0);

        if(firstletter === "j" || firstletter === "J"){
            byespeaker(names[i]);
        }
        else{
            hellospeaker(names[i]);
        }
    }
})();