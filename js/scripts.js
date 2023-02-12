function imggrow(id,idh3t,idh3b){
    // let divwidth = document.getElementById(id).style.width;
    // if(divwidth=='60%'){
        let selecteddivclass = document.getElementById(id).className;
        console.log(selecteddivclass);
if(selecteddivclass == "img-div open")
{
    document.getElementById(id).className = "img-div close";
    document.getElementById(id).style.transition= '2s all';
    document.getElementById(id).childNodes[3].className = "text-h3-topbottom";
    document.getElementById(id).childNodes[7].className = "text-h3-bottomtop";

}else{
        let divlen = document.getElementsByClassName('img-div').length;

    for(a=0;a<divlen;a++){
        let classopen =  document.getElementsByClassName('img-div')[a].className;
        if(classopen=='img-div close'){
            
        document.getElementsByClassName('img-div')[a].childNodes[3].className =" ";
        document.getElementsByClassName('img-div')[a].childNodes[7].className =  " ";
       
        
        }else{
        document.getElementsByClassName('img-div')[a].className = "img-div close";
        document.getElementsByClassName('img-div')[a].childNodes[3].className ="text-h3-topbottom";
        document.getElementsByClassName('img-div')[a].childNodes[7].className = "text-h3-bottomtop";
    }
    }
   
    document.getElementById(id).className = "img-div open";
    // document.getElementById(idh3t).style.display='block';
    // document.getElementById(idh3b).style.display='block';
  
     document.getElementById(id).style.transition= '2s all';
    document.getElementById(id).childNodes[3].className = "text-h3-top";
    document.getElementById(id).childNodes[7].className = "text-h3-bottom";

    // document.getElementById(idh3t).style.display='none';
    // document.getElementById(idh3b).style.display='none';
    // }else{


    // let divlen = document.getElementsByClassName('img-div').length;
    // for(a=0;a<divlen;a++){
    //     document.getElementsByClassName('img-div')[a].style.width='10%';
    //     document.getElementsByClassName('text-h3-top')[a].style.display='none'
    //     document.getElementsByClassName('text-h3-bottom')[a].style.display='none'
    // }   
    // document.getElementById(id).style.width = '60%';
// }
}
}

let imglen = document.getElementsByTagName('img').length;

for(a=0;a<imglen;a++){
    document.getElementsByTagName('img')[a].style.height=`${window.innerHeight}px`
}