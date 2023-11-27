//finding middle number of a array


   
    function getMiddleOdd(array) {
        return array[Math.floor(array.length / 2)];
    }

    let array = [1,2,3,4,5];
    console.log(getMiddleOdd(array))