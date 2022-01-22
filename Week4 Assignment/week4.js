function billingFunction(){
	if(document.getElementById("same").checked){
		document.getElementById("billingName").value=document.getElementById("shippingName").value;
		document.getElementById("billingZip").value=document.getElementById("shippingZip").value;
	}
	else{
		document.getElementById("billingName").value=null;
		document.getElementById("billingZip").value=null;
	}
}

/*function billingFunction(){
	if(document.querySelector('#same:checked') !== null){
		document.getElementById("billingName").value=document.getElementById("shippingName").value;
		document.getElementById("billingZip").value=document.getElementById("shippingZip").value;
	}
	else if (document.querySelector('#same:checked') == null){
		document.getElementById("billingName").value=null;
		document.getElementById("billingZip").value=null;
	}
}*/