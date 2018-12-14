var letter=function(a){
    this.value=a;
    this.hasBeenGuessed;
    this.toString=function(){
        if(this.hasBeenGuessed===true){
            return this.value;
        }
        
        return "_";
    }
    this.checkGuess=function(x){
        if(x===this.value){
            this.hasBeenGuessed=true;
        }
        else{
            this.hasBeenGuessed=false;
        }
    }
}

module.exports=letter;