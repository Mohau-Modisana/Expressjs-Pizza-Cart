module.exports=function PizzaCart(){

function buysmall(){
    let smll=0;
    let smallprice=49.00;
    var numsmallpizza=0;
    var counter=1;

    smll +=smallprice;
    numsmallpizza +=counter;

    return{
        smll,
        numsmallpizza
    }
}

}