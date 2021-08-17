function changer()
{
    var searchbox=document.querySelector(".search-box");
    var image=document.querySelector('.apps');
    if(document.body.style.backgroundColor=="")
    {
        document.body.style.backgroundColor="#000";
        searchbox.style.backgroundColor="#000";
        searchbox.style.color="#fff";
        image.src="https://img.freepik.com/free-icon/nine-dots-in-a-square_318-67402.jpg?size=338&ext=jpg";
    }
    else
    {
        document.body.style.backgroundColor="";
        searchbox.style.backgroundColor="";
        searchbox.style.color="#000";
        image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/3x3dot-black.svg/768px-3x3dot-black.svg.png";
    }
}
var box=document.getElementById('textbox');
function searchfunc(gsearch)
{
    if(box.value.trim()!=="")
        gsearch.href='https://www.google.com/search?q='+encodeURIComponent(document.querySelector('.search-box').value);
}
function searchb(e){
    if (e.keyCode == 13 || e.which == 13)
    {
        if(box.value.trim()!=="")
        { 
            window.open(location='https://www.google.com/search?q='+encodeURIComponent(document.getElementById('textbox').value))
        } 
    }  
}
window.addEventListener('load', function() { 
    document.getElementById('textbox').value="";
  }, false);
