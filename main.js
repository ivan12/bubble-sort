function bubble_Sort(arrayParam)
{
    var swapp;
    var length = arrayParam.length-1;
    do {
        swapp = false;
        for (var i=0; i < length; i++)
        {
            if (arrayParam[i] < arrayParam[i+1])
            {
               var temp = arrayParam[i];
               arrayParam[i] = arrayParam[i+1];
               arrayParam[i+1] = temp;
               swapp = true;
            }
        }
        length--;
    } while (swapp);
 document.getElementById("result").innerHTML = arrayParam; 
}

bubble_Sort([30, 89, 21, 8, 11, 15, 14, 200]);
