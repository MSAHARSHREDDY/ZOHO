var row=1
var entry=document.getElementById("entry")
entry.addEventListener("click",displaydetails)


function displaydetails()
{
	var name=document.getElementById("name").value
	var phone=document.getElementById("phoneno").value
	var email=document.getElementById("email").value

	if(!name||!phone||!email)
	{
		alert("Fill the above form")
		return
	}

	var display=document.getElementById("display")
	var newRow=display.insertRow(row)
	var cell1=newRow.insertCell(0).innerHTML=name
	var cell2=newRow.insertCell(1).innerHTML=phone
	var cell3=newRow.insertCell(2).innerHTML=email
	row++

}


