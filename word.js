var letter=require("./letter.js")

module.exports=function(answer){
    this.letArr;

    for(var j=0;j<word.length;j++){
        let char=word.charAt(j);

        let newLet=new letter(char);

        this.letArr.push(newLet);
    }

    this.showWord=function(){
        for(var j=0;j<this.letArr.length;j++){
            this.letArr[j].fillSpot();
        }
    }

    this.lookGuess()=function(x){
        for(var j=0;j<this.letArr.length;j++){
            this.letArr[j].checkGuess(x);
        }
    }
}