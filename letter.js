var letter=function(a){
    this.value=a;
    this.hasBeenGuessed=false;
    
    this.toString=function(){
        if(this.hasBeenGuessed===true){
            return this.value;
        }
        
        return "_";
    }
    this.checkGuess=function(x){
        if(this.hasBeenGuessed===false){
            if(x===this.value){
                this.hasBeenGuessed=true;
            }
            else{
                this.hasBeenGuessed=false;
            }
        }
    }
}

module.exports=letter;