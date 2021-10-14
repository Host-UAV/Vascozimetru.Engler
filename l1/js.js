document.getElementById("a5").style.opacity="0.2"
var x=[];
var y=[];
var z=[];
var k=[];
var kkk=0;
var kk=0;
var x1=[];
var y1=[];
var z1=[];
var k1=[];
var kkk1=0;
var kk1=0;

function cal(){
var zeci= parseFloat(document.getElementById("zeci").value);

 x[0] = parseFloat(document.getElementById("1.3").value);
 x[1] = parseFloat(document.getElementById("2.3").value);
 x[2] = parseFloat(document.getElementById("3.3").value);
 x[3] = parseFloat(document.getElementById("4.3").value);
 x[4] = parseFloat( document.getElementById("5.3").value);
for(var i = 0; i < 5; i++)
{
if (isNaN(x[i]))
x[i]=0;
}
 document.getElementById("1.5").innerHTML= (parseFloat(x[1]+x[2]+x[3]+x[4]+x[0])/5).toFixed(zeci);

    var zeci= parseFloat(document.getElementById("zeci").value);

    y[0] = parseFloat(document.getElementById("1.4").value);
    y[1] = parseFloat(document.getElementById("2.4").value);
    y[2] = parseFloat(document.getElementById("3.4").value);
    y[3] = parseFloat(document.getElementById("4.4").value);
    y[4] = parseFloat( document.getElementById("5.4").value);


   for(var i = 0; i < 5; i++)
   {
   if (isNaN(y[i]))
   y[i]=0;
   }
  kk=0;
   document.getElementById("1.6").innerHTML= ((y[1]+y[2]+y[3]+y[4]+y[0])/5).toFixed(zeci);
   for(var i=0; i < 5; i++)
   {
     z[i]=parseFloat( y[i]/x[i].toFixed(zeci) );
     
      document.getElementById(i+1.7).innerHTML= z[i].toFixed(zeci);
  
   kk= z[i]+kk;
   }
   document.getElementById("1.8").innerHTML= (kk/5).toFixed(zeci);
  
kkk=0;
   for(var i=0; i < 5; i++)
   {
      document.getElementById(i+1.9).innerHTML= (kk/5-z[i]).toFixed(zeci);
    
     k[i]=parseFloat((kk/5-z[i]).toFixed(zeci));
   }
   for(var i = 0; i < 5; i++)
   {
      kkk=(k[i]*k[i])+kkk;
   }
   document.getElementById("1.10").innerHTML= Math.sqrt((kkk/20)).toFixed(6);


   var zeci= parseFloat(document.getElementById("zeci").value);

 x1[0] = parseFloat(document.getElementById("6.3").value);
 x1[1] = parseFloat(document.getElementById("7.3").value);
 x1[2] = parseFloat(document.getElementById("8.3").value);
 x1[3] = parseFloat(document.getElementById("9.3").value);
 x1[4] = parseFloat( document.getElementById("10.3").value);
for(var i = 0; i < 5; i++)
{
if (isNaN(x1[i]))
x1[i]=0;
}
 document.getElementById("6.5").innerHTML= (parseFloat(x1[1]+x1[2]+x1[3]+x1[4]+x1[0])/5).toFixed(zeci);

    var zeci= parseFloat(document.getElementById("zeci").value);

    y1[0] = parseFloat(document.getElementById("6.4").value);
    y1[1] = parseFloat(document.getElementById("7.4").value);
    y1[2] = parseFloat(document.getElementById("8.4").value);
    y1[3] = parseFloat(document.getElementById("9.4").value);
    y1[4] = parseFloat( document.getElementById("10.4").value);


   for(var i = 0; i < 5; i++)
   {
   if (isNaN(y1[i]))
   y1[i]=0;
   }
  kk1=0;
   document.getElementById("6.6").innerHTML= ((y1[1]+y1[2]+y1[3]+y1[4]+y1[0])/5).toFixed(zeci);
   for(var i=0; i < 5; i++)
   {
     z1[i]=parseFloat( y1[i]/x1[i].toFixed(zeci) );
     
      document.getElementById(i+6.7).innerHTML= z1[i].toFixed(zeci);
  
   kk1= z1[i]+kk1;
   }
   document.getElementById("6.8").innerHTML= (kk1/5).toFixed(zeci);
  
kkk1=0;
   for(var i=0; i < 5; i++)
   {
      document.getElementById(i+6.9).innerHTML= (kk1/5-z1[i]).toFixed(zeci);
    
     k1[i]=parseFloat((kk1/5-z1[i]).toFixed(zeci));
   }
   for(var i = 0; i < 5; i++)
   {
      kkk1=(k1[i]*k1[i])+kkk1;
   }
   document.getElementById("6.10").innerHTML= Math.sqrt((kkk1/20)).toFixed(6);
   }
function start1(){
   document.getElementById("a5").style.opacity="100%";
}
   
   function start(){
      document.getElementById("rr").style.height= "265px";

      document.getElementById("rrr").setAttribute("y",123);
      document.getElementById("noAqua").style.animation= "asd 10.5s";
      document.getElementById("25").style.animation= "cure 10.5s";
      document.getElementById("36").style.animation="apa 10.5s";
      document.getElementById("36").style.opacity="100%";
      document.getElementById("pa11").innerHTML="Timp(s):56.41";
   
      cal();

            }

            function start3(){
               document.getElementById("1.3").value="56.41";
               cal();
            }
  function start4(){
      document.getElementById("1.3").value="56.41";
      document.getElementById("2.3").value="54.16";
      document.getElementById("3.3").value="54.88";
      document.getElementById("4.3").value="53.62";
      document.getElementById("5.3").value="53.78";

      document.getElementById("6.3").value="56.41";
      document.getElementById("7.3").value="54.16";
      document.getElementById("8.3").value="54.88";
      document.getElementById("9.3").value="53.62";
      document.getElementById("10.3").value="53.78";
      alert("Valorile pt apa la 40 de ⁰C se i-au la fel, deoarece la apa ne raportam pentru a detemina vascozitatea altor lichide(valorile ramna la fel si la 40 ⁰C)");
      cal();

   }
   function start5(){
      document.getElementById("rr").style.height= "17.5px";
      document.getElementById("a5").style.fill="rgb(61, 88, 139)";
      document.getElementById("rrr").setAttribute("y",159.5);

      document.getElementById("36").style.opacity="0%";
      document.getElementById("36").style.fill="rgb(61, 88, 139)"; document.getElementById("noAqua").style.animation= "asd 0s ";
      document.getElementById("25").style.animation= "cure 0s";
      document.getElementById("36").style.animation="apa 0s";
    
      cal();
   }
function start6(){
      
   document.getElementById("rr").style.height= "265px";
  
   document.getElementById("rrr").setAttribute("y",123);
   document.getElementById("36").style.opacity="100%";
   document.getElementById("25").style.stroke="rgb(61, 88, 139)";
   document.getElementById("25").style.opacity="100%";
   setTimeout(5000,document.getElementById("25").style.opacity="0%")

   
   document.getElementById("25").style.animation= "cure 10.5s " ;
   document.getElementById("36").style.animation="apa1 10.5s ";

   document.getElementById("pa11").innerHTML="Timp(s):61.63";
    document.getElementById("noAqua").style.animation="asd1 10.5s ";
    document.getElementById("1.4").value="61.63";
    document.getElementById("2.4").value="62.59";
    document.getElementById("3.4").value="62.13";
    document.getElementById("4.4").value="63.06";
    document.getElementById("5.4").value="61.59";

    


   
      cal();

            

   }
    function start7(){
      document.getElementById("6.4").value="57.97";
      document.getElementById("7.4").value="57.35";
      document.getElementById("8.4").value="57.03";
      document.getElementById("9.4").value="58.28";
      document.getElementById("10.4").value="56.82";

     roteste();
      alert("Valorile sau completat si pentru alchool la 40 C ");
      cal();

    }




            function roteste() {
                  document.getElementById("22").style.opacity= "0%";
                  document.getElementById("40c").style.opacity= "100%";
                  document.getElementById("30").style.opacity="100%";
                  document.getElementById("mesaj").innerHTML="asd";
                  document.getElementById("40dec").style.opacity= "100%";
                  document.getElementById("20dec").style.opacity="0%";
            }