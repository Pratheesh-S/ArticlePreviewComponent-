const media=document.getElementById("root");
var i=0;
const showmedia=()=>
{ 
    i++;
    if(i%2==1)
       media.style.visibility="visible"
     else
        media.style.visibility="hidden"

}
