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
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">1</h1>'
			break;
		case 1:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">2</h1>'
			break;
		case 2:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">3</h1>'
			break;
		case 3:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">5</h1>'
			break;
		case 4:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">8</h1>'
			break;
		case 5:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">13</h1>'
			break;
		case 6:
			document.getElementById("estimatedStoryPoints").innerHTML = '<h1 class="display-1">13</h1>'
			break;
	}
}

function updateMessages(u, c, e)
{
	switch(u)
	{
		case 0:
			document.getElementById("uncertaintyMessage").innerHTML = "I know exactly what is required to complete this work and can visualise the change required.";
			break;
		case 1:
			document.getElementById("uncertaintyMessage").innerHTML = "I have some outstanding gaps in my knowlege but know where to start and generally what is required.";
			break;
		case 2:
			document.getElementById("uncertaintyMessage").innerHTML = "I have a lot of outstanding gaps in my knowlege or am not confident about scope of the change.";
			break;
			
	}
	
	switch(c)
	{
		case 0:
			document.getElementById("complexityMessage").innerHTML = "This work is not reliant on any other work, and does not require any additional unit tests etc";
			break;
		case 1:
			document.getElementById("complexityMessage").innerHTML = "This work is lightly coupled to other work, and may have an impact on the way the system currently functions";
			break;
		case 2:
			document.getElementById("complexityMessage").innerHTML = "This work is a heavily coupled to other work, sweeping change or has high potential to impact the current system";
			break;			
	}
	
	switch(e)
	{
		case 0:
			document.getElementById("effortMessage").innerHTML = "This work is a minor change, requiring making a change to one or two files";
			break;
		case 1:
			document.getElementById("effortMessage").innerHTML = "This work is a mid-sized change, requiring a change to more than one project or a number of files";
			break;
		case 2:
			document.getElementById("effortMessage").innerHTML = "This work is a large change, requiring changing multiple components, projects or involving a lot of branches and merges";
			break;
			
	}
}

function labelClicked(n)
{
	var i = document.getElementById(n).innerHTML;
	console.log(i);
	document.getElementById(n).outerHTML = '<s>'+i+"</s>"
}