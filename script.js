
function toggle() 
{ 
var div = document.getElementById('countries');
var div2 = document.getElementById('countries2');
// hide
//div.style.visibility = 'hidden';
// OR
//div.style.display = 'none';

div.style.opacity = '0.3';


// show
div2.style.visibility = 'visible';
// OR
div2.style.display = 'block';
} 
function toggle2() 
{ 
var div = document.getElementById('countries');
var div2 = document.getElementById('countries2');
// hide
div2.style.visibility = 'hidden';
// OR
div2.style.display = 'none';

// show
//div.style.visibility = 'visible';
// OR
//div.style.display = 'block';
div.style.opacity = '1';
document.getElementById("countrydropdown").value="";
} 
function displaylink()
{
document.getElementById('loading').innerHTML="<br/><br/><center><img src=\"images/success.png\" border=\"0\" alt=\"Success\"/><br/><br/><b>2 photos found</b><br/> <br/> <font color=\"red\">1 group photo and 1 single photo</font><br/><br/><font style=\"font-size: 30px\"><a href=\"photos.html\"><u>View the photos here</u></a></font></center><br/><br/>";
}
function echourl()
{
var url=window.location.href;
var country= url.split("country=");
var country=country[1].split("&country2=");
var countryname1=country[0];
var countryname2=country[1].split("&");
var countryname2=countryname2[0];
var countryname=countryname1+countryname2;
var countryname=decodeURIComponent(countryname)
var countryname=countryname.split("+");
var countryname=countryname.join(" ");
//alert(countryname);
document.search.mycountry.value=countryname;

}
