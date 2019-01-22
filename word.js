var letter=require("./letter.js")

var word=function(answer){
    this.letArr=[];
    this.ans=answer;
    this.nRight;

    this.createObjs=function(){
        for(var j=0;j<this.ans.length;j++){
            let char=this.ans.charAt(j);
    
            let newLet=new letter(char);
    
            this.letArr.push(newLet);
        }
    }

    this.showWord=function(){
        console.log(this.letArr.join(' '));
    }

    this.lookGuess=function(x){
        for(var j=0;j<this.letArr.length;j++){
            this.letArr[j].checkGuess(x);
        }
    }

    this.checkWin=function(){
        this.nRight=0;
        for(var j=0;j<this.letArr.length;j++){
            if(this.letArr[j].hasBeenGuessed===true){
                this.nRight++;
            }
        }

        if(this.nRight===this.letArr.length){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports=word;