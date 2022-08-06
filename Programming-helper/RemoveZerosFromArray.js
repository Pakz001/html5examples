function removeZeros(array) {
    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            removeZeros(array[i]);
        }else{
            if(array[i] == 0){
                array.splice(i,1);
                i--;
            }
        }
    }
    return array;
}
