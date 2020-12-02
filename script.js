document.querySelector(".btn-url").addEventListener("click", shortenUrl);
    
function shortenUrl(url) {


    document.querySelector(".url-result").style.display="block";
    var url=document.getElementById("input-field").value;

    console.log(url);

  var beg="http://dev.ly/";
    
    var newUrl="";
    for (var index = url.length/2; index < url.length; index++) {
        newUrl=newUrl+url[index];
        
    }
    var hash=stringToHash(newUrl);
    if(hash<0){
        hash=(hash*hash)/100000000000000; 
         hash=Math.round(hash);
      }
    var result= beg+hash;
    document.getElementById("prev-url").value=url;
    document.getElementById("new-url").value=result;
    document.getElementById("new-url").style.color="turquoise";
    document.getElementById("new-url").style.fontSize="20px";
    document.getElementById("prev-url").style.fontSize="20px";
  
    
     
    function copy() {
        
        var copyText=document.querySelector("#new-url");
        copyText.select();
        document.execCommand("copy");
        document.querySelector("#copy").textContent="copied!"
        document.querySelector("#copy").style.backgroundColor="purple";
    
    }
    document.querySelector("#copy").addEventListener("click", copy);
}
function stringToHash(string) {
    var hash=0;
    if (string.length==0)return hash;
    for (let index = 0; index < string.length; index++) {
        char=string.charCodeAt(index);
        hash=((hash<<5)-hash)+char;
        hash=hash & hash;
    }return hash;
        
    }
