function generate(){
    let sname=document.getElementById("sname").value;
    let sregno=document.getElementById("sregno").value;
    let scourse=document.getElementById("scourse").value;
    let senrollno=document.getElementById("senrollno").value;

    var esub1=parseInt(document.getElementById("esub1").value);
    var isub1=parseInt(document.getElementById("isub1").value);
    var tot1=(esub1)+(isub1);
    let esub2=parseInt(document.getElementById("esub2").value);
    let isub2=parseInt(document.getElementById("isub2").value);
    let tot2=esub2+isub2;
    let esub3=parseInt(document.getElementById("esub3").value);
    let isub3=parseInt(document.getElementById("isub3").value);
    let tot3=esub3+isub3;
    let esub4=parseInt(document.getElementById("esub4").value);
    let isub4=parseInt(document.getElementById("isub4").value);
    let tot4=esub4+isub4;
    let esub5=parseInt(document.getElementById("esub5").value);
    let isub5=parseInt(document.getElementById("isub5").value);
    let tot5=esub5+isub5;

    let isub6=parseInt(document.getElementById("isub6").value);
    let tot6=isub6;
    let isub7=parseInt(document.getElementById("isub7").value);
    let tot7=isub7;
    let isub8=parseInt(document.getElementById("isub8").value);
    let tot8=isub8;


    document.getElementById("name").innerHTML=sname;
    document.getElementById("regno").innerHTML=sregno;
    document.getElementById("course").innerHTML=scourse;
    document.getElementById("enrollno").innerHTML=senrollno;

    document.getElementById("theory1").innerHTML=esub1;
    document.getElementById("practical1").innerHTML=isub1;
    document.getElementById("total1").innerHTML=tot1;
    document.getElementById("theory2").innerHTML=esub2;
    document.getElementById("practical2").innerHTML=isub2;
    document.getElementById("total2").innerHTML=tot2;
    document.getElementById("theory3").innerHTML=esub3;
    document.getElementById("practical3").innerHTML=isub3;
    document.getElementById("total3").innerHTML=tot3;
    document.getElementById("theory4").innerHTML=esub4;
    document.getElementById("practical4").innerHTML=isub4;
    document.getElementById("total4").innerHTML=tot4;
    document.getElementById("theory5").innerHTML=esub5;
    document.getElementById("practical5").innerHTML=isub5;
    document.getElementById("total5").innerHTML=tot5;

    document.getElementById("practical6").innerHTML=isub6;
    document.getElementById("total6").innerHTML=tot6;
    document.getElementById("practical7").innerHTML=isub7;
    document.getElementById("total7").innerHTML=tot7;
    document.getElementById("practical8").innerHTML=isub8;
    document.getElementById("total8").innerHTML=tot8;

    let tot=tot1+tot2+tot3+tot4+tot5+tot6+tot7+tot8;
    document.getElementById("grandtotal").innerHTML=tot;

    if(tot>=400)
    {
        document.getElementById("result").innerHTML="Pass"
    }
    else
    {
        document.getElementById("result").innerHTML="Fail"
    }
     
    let percentage=tot/8;
    document.getElementById("percentage").innerHTML=percentage;

    if(tot >=700)
    {
        document.getElementById("grade").innerHTML="A";
    }
    else if(tot >=600)
        {
            document.getElementById("grade").innerHTML="B";
        }
        else if(tot >=500)
            {
                document.getElementById("grade").innerHTML="C";
            }
            else if(tot >=400)
                {
                    document.getElementById("grade").innerHTML="D";
                }
                else{
                    document.getElementById("grade").innerHTML="F";
                }


    alert("Generated Succesfully");            
}
