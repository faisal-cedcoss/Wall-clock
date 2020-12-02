var secHand=document.querySelector('.sec');
var mintHand=document.querySelector('.mint');
var hrHand=document.querySelector('.hr');
var maridian='';

function rotate()
{
	var currentTime=new Date();

	var secs=currentTime.getSeconds();
	var mints=currentTime.getMinutes();
	var hrs=currentTime.getHours();

	var secFrac=secs/60;
	var mintFrac=(secFrac+mints)/60;
	var hrFrac=(mintFrac+hrs)/12;

	var secRot=secFrac*360;
	var mintRot=mintFrac*360;
	var hrRot=hrFrac*360;

    secHand.style.transform=`rotate(${secRot}deg)`;
    mintHand.style.transform=`rotate(${mintRot}deg)`;
    hrHand.style.transform=`rotate(${hrRot}deg)`;	

    if(hrs>12)
    {
    	hrs=hrs-12;
    	maridian='pm';
    }
    else
    {
    	maridian='am';
    }
    if(hrs<10)
    	{hrs="0"+hrs;}
    if(mints<10)
    	{mints="0"+mints;}
    if(secs<10)
    	{secs="0"+secs;}

    document.querySelector('.digital').innerHTML=hrs+" : "+mints+" : "+secs+" "+maridian;
}

setInterval(rotate,1000);