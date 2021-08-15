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
function searchfunc(gsearch)
{
    if(document.getElementById('textbox').value!=="")
        gsearch.href='https://www.google.com/search?q='+encodeURIComponent(document.querySelector('.search-box').value);
}