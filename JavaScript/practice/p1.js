
// 1)
// {

// let a = 4;
// if(a % 2 == 0)
// {
//     document.write("<b>even number</b>");
// }
// else{
//     document.write("<b>odd number</b>");
// }
// }
/*2)
{
let a = 50;
 let b = 15;
  if(a > b)
  {
    document.write("<b>a is larger number</b>");
  }
  else
  {
    document.write("<b>b is larger number</b>");
  }
}
*/
/*3) Perform arithmatic operator

{
    let a = 2;
    let b = 3;
    let c = a + b;

 document.write(c+"<br>");

    switch(c)
    {
        case 1 : document.write("total");
        break;
        case 2 : document.write("print a");
        break;
        default:
            document.write("wrong input");

    }

}
*/
// 4)
// {
//     let maths = 85;
//     let science = 95;
//     let English = 70;
//     let physics = 88;
//     let chemistry = 50;

//     let total = maths + science + English + physics + chemistry;

//     let per = (total/500)*100;

//     document.write(total+"<br>");

//     document.write(per+"<br>");

//     if (per>=70)
//     {
//         document.write("grade A");
//     }
//     else if(per>=60)
//     {
//         document.write("grade B");
//     }
//     else if(per>=55)
//     {
//         document.write("grade C");
//     }
//     else if(per>=45)
//     {
//         document.write("grade D");
//     }
//     else if(per>=35)
//     {
//         document.write("grade pass");
//     }
//     else{
//         document.write("Fail");
//     }

// }
// 5)

{
    let a = 3;
    let b = 2;
    let c = 6;

    if(a > b && a < c)
    {
        if(a > b)
        {
            document.write(b);
        }
        else{
            document.write(a);
        }

    }
    else if(a < c && b > c)
        {

            if(a < c)
            {
                document.write(a);
            }
        
        else
            {
            document.write(c);
            }
        }
    
        else if(c > b && c < a)

        {
            if(c > b)
            {
                document.write(c);
            }
            else{
                document.write(a);
            }
        }

}