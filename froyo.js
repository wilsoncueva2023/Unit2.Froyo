
function countFlavors(){
    const flavorsInput = prompt("Please enter the list of flavors:")
    flavorsArr = flavorsInput.split(",");
    let flavorCount = {}
   
    for (let i=0; i< flavorsArr.length; i++){
        if (flavorCount[flavorsArr[i]]){
            flavorCount[flavorsArr[i]]++;
        } else{
            flavorCount[flavorsArr[i]]=1;
        }
    }
    

    for (const flavor in flavorCount){
        console.log(flavor + ": "+flavorCount[flavor]);
    }
}

countFlavors()