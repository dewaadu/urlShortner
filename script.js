//selecting button to apply onclick and shorten functionality
document.querySelector(".btn-url").addEventListener("click", shortenUrl);
    
function shortenUrl(url) {
//getting the value in the input field to be shorten
  var url=document.getElementById("input-field").value;
  //applying shortening if there is a valid input value only
if(url){
    document.querySelector(".url-result").style.display="block";
   
    console.log(url);

  var beg="http://dev.ly/";
    
    var newUrl="";
    for (var index = url.length/2; index < url.length; index++) {
        newUrl=newUrl+url[index];
        
    }
    //calling hash function and saving the value and making it valid
    var hash=stringToHash(newUrl);
    if(hash<0){
        hash=(hash*hash)/100000000000000; 
         hash=Math.round(hash);
      }
      //intergeting the hash value with the brand
    var result= beg+hash;
    // targetting html and applying some css
    document.getElementById("prev-url").value=url;
    document.getElementById("new-url").value=result;
    document.getElementById("new-url").style.color="turquoise";
    document.getElementById("new-url").style.fontSize="20px";
    document.getElementById("prev-url").style.fontSize="20px";
  
}else
//if the value in the input-field was not valid this warning message occurs
{
    document.querySelector(".validity").style.display="block";
    document.getElementById("input-field").style.borderColor="red";
    document.getElementById("input-field").style.borderWidth="4px";
}
     //function to apply the copy method on the copy button
    function copy() {
        
        var copyText=document.querySelector("#new-url");
        copyText.select();
        document.execCommand("copy");
        document.querySelector("#copy").textContent="copied!"
        document.querySelector("#copy").style.backgroundColor="purple";
    
    }
    document.querySelector("#copy").addEventListener("click", copy);

}
//function to generate hash value based on the string in the input-field
function stringToHash(string) {
    var hash=0;
    if (string.length==0)return hash;
    for (let index = 0; index < string.length; index++) {
        char=string.charCodeAt(index);
        hash=((hash<<5)-hash)+char;
        hash=hash & hash;
    }return hash;
        
    }
