function isleap()
{
 var yr=document.getElementById("year").value;
 if ((parseInt(yr)%4) == 0)
 {
  if (parseInt(yr)%100 == 0)
  {
    if (parseInt(yr)%400 != 0)
    {
    alert("Not Leap");
    return "false";
    }
    if (parseInt(yr)%400 == 0)
    {
    alert("Leap");
    return "true";
    }
  }
  if (parseInt(yr)%100 != 0)
  {
    alert("Leap");
    return "true";
  }
 }
 if ((parseInt(yr)%4) != 0)
 {
    alert("Not Leap");
    return "false";
 }
}
