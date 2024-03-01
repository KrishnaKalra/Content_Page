function getValue(){
    var Name=document.querySelector(".name").value;
    var Date=document.querySelector(".date").value;
    var Time=document.querySelector(".time").value;
    Date=Date.replace("-","");
    Date=Date.replace("-","");
    Time=Time.replace(":","");
    var linkp1="https://calendar.google.com/calendar/render?action=TEMPLATE&text="+Name+"&details=Event description text&dates="+Date+"T"+Time+"00/"+Date+"T"+Time+"00";
    window.open(linkp1);
}
