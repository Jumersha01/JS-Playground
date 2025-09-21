 let value=document.querySelector(".col-name");
function main(){
    //Selecting the button
let btn = document.querySelector(".Btn");
// now adding the eventlistner
btn.addEventListener("click",(e)=>{
    //getting the info about about the col
  
    let spn = document.querySelector("span");
     value = document.querySelector(".col-name").value;
    let in_lowercase=value.toUpperCase();
    console.log(in_lowercase);
   if(in_lowercase==''){
    spn.innerText=`Cant Be Empty`
     document.body.style.backgroundColor=in_lowercase
   }
   else{
    spn.innerText=in_lowercase;
    document.body.style.backgroundColor=in_lowercase

   }
   


  


})


}
main()
