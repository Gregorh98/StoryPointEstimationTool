function calculateStoryPoints()
{
	var u = parseInt(document.getElementById("uncertaintyRange").value)
	var c = parseInt(document.getElementById("complexityRange").value)
	var e = parseInt(document.getElementById("effortRange").value);
	
	updateMessages(u, c, e);
	
	var sliderVal = u + c + e;
	
	var storyPointsVal = 1;
	
	switch(sliderVal)
	{
		case 0:
			document.getElementById("estimatedStoryPoints").innerHTML = 0
			break;
		case 1:
			document.getElementById("estimatedStoryPoints").innerHTML = 1
			break;
		case 2:
			document.getElementById("estimatedStoryPoints").innerHTML = 2
			break;
		case 3:
			document.getElementById("estimatedStoryPoints").innerHTML = 3
			break;
		case 4:
			document.getElementById("estimatedStoryPoints").innerHTML = 5
			break;
		case 5:
			document.getElementById("estimatedStoryPoints").innerHTML = 8
			break;
		case 6:
			document.getElementById("estimatedStoryPoints").innerHTML = 13
			break;
	}
}

function updateMessages(u, c, e)
{
	switch(u)
	{
		case 0:
			document.getElementById("uncertaintyMessage").innerHTML = "I know exactly what is required to complete this work";
			break;
		case 1:
			document.getElementById("uncertaintyMessage").innerHTML = "I have some outstanding gaps in my knowlege";
			break;
		case 2:
			document.getElementById("uncertaintyMessage").innerHTML = "I have a lot of outstanding gaps in my knowlege";
			break;
			
	}
	
	switch(c)
	{
		case 0:
			document.getElementById("complexityMessage").innerHTML = "This work is not reliant on any other work, and does not require any additional unit tests etc";
			break;
		case 1:
			document.getElementById("complexityMessage").innerHTML = "This work is a mid-sized change and may have an impact on the way the system currently functions";
			break;
		case 2:
			document.getElementById("complexityMessage").innerHTML = "This work is a sweeping change and has high potential to impact the current system";
			break;			
	}
	
	switch(e)
	{
		case 0:
			document.getElementById("effortMessage").innerHTML = "This work is a minor change";
			break;
		case 1:
			document.getElementById("effortMessage").innerHTML = "This work is a mid-sized change";
			break;
		case 2:
			document.getElementById("effortMessage").innerHTML = "This work is a large change";
			break;
			
	}
}
