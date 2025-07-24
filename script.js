function loadcomponent(id,file)
{
	fetch(file).then(response=>response.text()).then(data=>{
		document.getElementById(id).innerHTML=data;
	}).catch(error=>console.log("Error load"+file,error));
}

window.onload=function()
{
	loadcomponent("header","components/header.html");
	loadcomponent("navbar","components/navbar.html");
	loadcomponent("sidebar","components/sidebar.html");
	loadcomponent("search","components/search.html");
	loadcomponent("footer","components/footer.html");
}