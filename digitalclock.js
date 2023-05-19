function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="Am"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
    hh=12;
    }
    var fulltime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fulltime
    document.getElementById("Seconds").innerHTML=ss
    if(mo==0)
    {
        mo="jan"
    }
   else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
     else if(mo==3)
    {
        mo="aprl"
    }
     else if(mo==4)
    {
        mo="may"
    } 
    else if(mo==5)
    {
        mo="jun"
    } 
    else if(mo==6)
    {
        mo="jul"
    }
    else if(mo==7)
    {
        mo="aug"
    } 
    else if(mo==8)
    {
        mo="sept"
    }
     else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    } 
    else if(mo==11)
    {
        mo="dec"
    }
    var fullDate=`${dd}-${mo}-${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("Date").innerHTML=fullDate
    switch(dy)
    {
        case 0:dy="Sunday"
        break
        case 1:dy="Monday"
        break
         case 2:dy="Tuesday"
        break
         case 3:dy="Wednessday"
        break 
        case 4:dy="Thursday"
        break 
        case 5:dy="Friday"
        break 
        case 6:dy="Saturday"
        break
    }
    document.getElementById("Day").innerHTML=dy
}
function greet()
{
    var time=date.getHours()
    if(time>=5 && time<=12)
    {
        document.getElementById("message").innerHTML="Goodmorning"
        document.getElementById("container").style.backgroundColor="light blue"
        document.getElementById("Time").style.color="black"
        document.getElementById("Date").style.color="darkblue"
        document.getElementById("Day").style.color="darkblue"
        document.getElementById("Sec").style.color="white"

    }
    if(time>=12 && time<=16)
    {
        document.getElementById("message").innerHTML="Goodafternoon"
        document.getElementById("container").style.backgroundColor="lightgreen"
        document.getElementById("Time").style.color="black"
        document.getElementById("Date").style.color="white"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("Sec").style.color="wheat"

    } 
    if(time>=16 && time<=20)
    {
        document.getElementById("message").innerHTML="Goodevening"
        document.getElementById("container").style.backgroundColor="lightyellow"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day").style.color="wheat"
        document.getElementById("Sec").style.color="white"

    }
    if(time>=20 && time<=24)
    {
        document.getElementById("message").innerHTML="Goodnight"
        document.getElementById("vid").src="./goodnight.mp4"
        document.getElementById("container").style.backgroundColor="lightyellow"
        document.getElementById("Time").style.color="white"
        document.getElementById("Date").style.color="wheat"
        document.getElementById("Day"). style.color="wheat"
        document.getElementById("Sec"). style.color="white"

    }
}
Alarm()
function settheAlarm()
{
    document.getElementById("Alarm").style.display="none"
}
greet()
    function removeTheGreetwindow()
    {
        document.getElementById("greet").style.display="none"
    }
    setTimeout(removeTheGreetwindow,5000)

    var audioFile=new Audio()
    audioFile.src="./easy-lifestyle-137766.mp3"
    function setAlarm()
    {
    var selec=document.querySelector("select")
    var userhh=selec[0].value
    var usermm=selec[1].value
    var useram_pm=selec[2].value

    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
    hh=12;
    }
    if(userhh==hh&&usermm==mm&&useram_pm==am_pm)
    {
        audioFile.play()
    }
    else{
        audioFile.pause()
    }
    setTimeout(setAlarm,1000)
    document.getElementById("alarm").style.display="none"
}


    
    