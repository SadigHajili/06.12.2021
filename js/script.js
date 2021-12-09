function set_background() {
    docBody = document.getElementsByTagName("body")[0];
     myBodyElements = docBody.getElementsByTagName("p");
     myp1 = myBodyElements[0];
     myp1.style.background = "rgb(200,50,60)";
     myp2 = myBodyElements[1];
     myp2.style.background = "rgb(800,208,90)";
   }
   function createTable()
{
rownum = window.prompt("enter number of rows", 1);
colnum = window.prompt("enter number of columns",1);
  
 for(var row=0;row<parseInt(rownum,10);row++)
  {
   var x=document.getElementById('myTable').insertRow(row);
   for(var colum=0;colum<parseInt(colnum,10);colum++)  
    {
     var y=  x.insertCell(colum);
     y.innerHTML="Row-"+row+" Column-"+colum; 
    }
   }
}