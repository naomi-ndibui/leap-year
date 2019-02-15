function isleap()
{
 var year=document.getElementById("year").value;
 if ((parseInt(year)%4) == 0)
 {
  if (parseInt(year)%100 == 0)
  {
    if (parseInt(year)%400 != 0)
    {
    alert("Not Leap");
    return "false";
    }
    if (parseInt(year)%400 == 0)
    {
    alert("Leap");
    return "true";
    }
  }
  if (parseInt(year)%100 != 0)
  {
    alert("Leap");
    return "true";
  }
 }
 if ((parseInt(year)%4) != 0)
 {
    alert("Not Leap");
    return "false";
 }
}
