module.exports=function(a){
    this.value=a;
    this.hasBeenGuessed=false;
    this.fillSpot=function(){
        if(this.hasBeenGuessed===true){
            return this.value;
        }
        else{
            return "_";
        }
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

//Checking if Constructor Works
// var guess=new letter("a");

// console.log(guess.fillSpot());
// guess.checkGuess("z");
// console.log(guess.fillSpot());
// guess.checkGuess("a");
// console.log(guess.fillSpot());