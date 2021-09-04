var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function retornaPares(array){
    var apenasPares = []
    
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            apenasPares.push(array[i])
        } 
    }

    console.log(apenasPares)
}

retornaPares(numeros)



