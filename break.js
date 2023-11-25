// for (var i = 1; i <=20; i++){
//     console.log(i)
//     if(i>7){
//         break;
//     }
// }

// we can also use break point in while loop too

var roastGiven = 0;
while(roastGiven<=10){
    console.log('roast den, please');
    console.log(roastGiven) //eta dile serial number o dekhabe
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

//another break, when we have to stop from the special points

var items = ['bottle', 'mouse', 'pen', 'sunglass', 'book', 'diary', 'paper', 'pencil'];
for(var i=0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item)
}
