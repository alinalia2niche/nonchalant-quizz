    const vid = document.getElementById.bind(document);
    let NN = 0;
    let PP = 0;
    let IN = 0;
    let NO = 0;
    
    document.getElementById("button1").onclick = function()
    {
        if(vid("answer1").checked)
        {
            PP += 1;
        }


        let number = Number(vid("answer2").value);
        switch(true)
        {

            case((number == 0)||(number==1)||(number==100)||(number==41)||(number==3)):
                NN += 1;
                break;

            case((number == 67)||(number==7)||(number==8)||(number==42)||(number==13)):
                PP += 1;
                break;
            
            case((number == 21)||(number==69)||(number==10)||(number==5)||(number==4))||(number==NaN):
                IN += 1;
                break;

            default:
                NO += 1;
        }

        switch(true) //NN, NO, IN, PP
        {
            case(vid("answer2").checked):
                NN += 1;
                break;
            case(vid("answer3").checked):
                NO += 1;
                break;
            case(vid("answer4").checked):
                IN += 1;
                break;
            case(vid("answer5").checked):
                PP += 1;
                break;
        }

        switch(true) //PP, NO, NN, IN
        {
            case(vid("answer6").checked):
                PP += 1;
                break;
            case(vid("answer7").checked):
                NO += 1;
                break;
            case(vid("answer8").checked):
                NN += 1;
                break;
            case(vid("answer9").checked):
                IN += 1;
                break;
        }
//NO, NN, PP, IN, NO
        switch(true) //PP, NO, NN, IN
        {
            case(vid("answer10").checked):
                NO += 1;
                break;
            case(vid("answer11").checked):
                NN += 1;
                break;
            case(vid("answer12").checked):
                PP += 1;
                break;
            case(vid("answer13").checked):
                IN += 1;
                break;
            case(vid("answer14").checked):
                NO += 1;
                break;
        }

        switch(true) 
        {
            case((Math.max(NN, PP, NO, IN)) == NN):
                vid("results").textContent = "Congrats! You're nonchalant.";
                break;
            case(Math.max(NN, PP, NO, IN) == PP):
                vid("results").textContent = "Congrats! You're Preformative.";;
                break;
            case(Math.max(NN, PP, NO, IN) == NO):
                vid("results").textContent = "Congrats! You're NORMAL!";;
                break;
            case(Math.max(NN, PP, NO, IN) == IN):
                vid("results").textContent = "Congrats! You're both nonchalant and preformative.";;
                break;
          
        }

            



        



        }


    //NN = nonchalant
    //PP = proformative
    //IN = inbetween (both)
    //NO = normal (neither)

