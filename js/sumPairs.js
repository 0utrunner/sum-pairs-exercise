exports.sumPairs = function(arr, num) {

    let pair = []
    let pairs = []
    while(arr.length > 0){
        let firstCard = arr.shift()
        arr.forEach(function(element){
        if(element + firstCard == num){
            pair.push(firstCard)
            let secondCard = element
            pairs.push([firstCard, secondCard])
            }
        })
    }
    return pairs.length > 0 ? pairs : 'Unable to find pairs'
};