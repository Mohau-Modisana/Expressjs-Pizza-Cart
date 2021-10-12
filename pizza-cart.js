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

function buymedium(){
    let medium=0;
    let mediumprice=89.00;
    var nummediumpizza=0;

    medium +=mediumprice;
    nummediumpizza ++;

    return{
        medium,
        nummediumpizza
    }
}

function buylarge(){
    let large=0;
    let largeprice=129.00;
    var numlargepizza=0;

    large += largeprice;
    numlargepizza ++;

    return{
        large,
        numlargepizza
    }
}

function totals(){
    return smll + medium + large;
}

}