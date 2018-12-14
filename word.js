var letter=require("./letter.js")

var word=function(answer){
    this.letArr=[];

    for(var j=0;j<answer.length;j++){
        let char=answer.charAt(j);

        let newLet=new letter(char);

        this.letArr.push(newLet);
    }

    this.showWord=function(){
        console.log(this.letArr.join(' '));
    }

    this.lookGuess=function(x){
        for(var j=0;j<this.letArr.length;j++){
            this.letArr[j].checkGuess(x);
        }
    }
}

module.exports=word;