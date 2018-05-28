var a;
var b; 
var a2=0;
var discrepancia = 0;
var errora=0;
var errorb=0;
var aux;
var lista = []
var cuerpo=document.getElementById("tBody");
var cuerpo2=document.getElementById("tBody2");
var radioButTrat;

function registrarDatos(){

   
	var x = document.getElementById("numero1").value;
	var y = document.getElementById("numero2").value;
		if(x==='' || y==='')
		{
			alert("Campos vacios");
		}
		else
		{	
			document.getElementById("numero1").value = ""; 
			document.getElementById("numero2").value = "";
			
			 radioButTrat = document.getElementById("nolineal");
 				if (radioButTrat.checked == true) 
				{  
					
					var oper = {x: Math.log(x), y: Math.log(y), xy: Math.log(x)*Math.log(y),
					 x2: Math.pow(Math.log(x),2),y2: Math.pow(Math.log(y),2)};
				}
			else{
			
					var oper = {x: x, y: y, xy: x*y, x2: Math.pow(x,2),y2: Math.pow(y,2)};
				}
		lista.push(oper);
		escribirTabla(oper);
		}

}

function escribirTabla(oper){
	let fila= `<tr>
		<td class='numero'>${lista.length}</td>
		<td class='numero'>${oper.x}</td>
		<td class='numero'>${oper.y}</td>
		<td class='numero'>${oper.x2}</td>
		<td class='numero'>${oper.y2}</td>
		<td class='numero'>${oper.xy}</td>
	</tr>`
	cuerpo.innerHTML+=fila;
}

function sumatorias(oper) {
	var sumax =0;
	var sumay=0;
	var sumaxy=0;
	var sumax2=0;
	var sumay2=0;	
	for (var aux of lista)
	{
		sumax+= parseFloat(aux.x);
		sumay+= parseFloat(aux.y);
		sumaxy+= aux.xy;
		sumax2+= aux.x2;
		sumay2+= aux.y2;
	} 
		
	if (lista.length>2) {	
		let n = lista.length;
		aux = (n*sumax2) - Math.pow(sumax,2);
		if (radioButTrat.checked == true) 
		{
			a = ((sumay*sumax2)-(sumaxy*sumax))/(aux);
			a2 = Math.pow(Math.E,a);
		}
		else
		{
			a = ((sumay*sumax2)-(sumaxy*sumax))/(aux);
		}
		
		b = ((n*sumaxy)-(sumax*sumay))/(aux);
		discrepancia = sumay2 - 2*a *sumay - 2*b*sumaxy + n* Math.pow(a, 2)
		+ 2*a*b*sumax+Math.pow(b,2)*sumax2;
		let aux1;
		aux1 = discrepancia/(n-2);
		
		let o = (aux1*sumax2)/aux;
		let p = (aux1*n)/aux;
		errora= Math.sqrt(o);
		errorb = Math.sqrt(p);
		lleanarA_b();
		let fila = `<tr> 
		<td class='numero'>${"N: "+ lista.length}</td>
		<td class='numero'>${sumax} </td>
		<td class='numero'>${sumay} </td>
		<td class='numero'>${sumax2} </td>
		<td class='numero'>${sumay2} </td>
		<td class='numero'>${sumaxy} </td>
		</tr>`
	cuerpo.innerHTML+=fila;
	} else {
		alert("Faltan datos");
	}	
	
	
}

function borrarFila(oper) {
	lista.pop();
	let tabla = document.getElementById('tbody');
	let aux = lista.length;	
	let hijo =  tabla.children[aux];
	hijo.outerHTML='';
}

function borrarTabla(fila) {
	lista = [];
	cuerpo.innerHTML=''; 
	cuerpo2.innerHTML='';
	a=0;
	b=0;
	discrepancia=0;
	errora=0;
	errorb=0;
}

function lleanarA_b(){
	if (radioButTrat.checked == true) 
		{
		let fila = `<tr> 
		<td class='numero'> ${a} </td>  
		<td class='numero'> ${b} </td>
		<td class='numero'> ${discrepancia} </td>
		<td class='numero'> ${errora} </td>
		<td class='numero'> ${errorb} </td>
		</tr>
		<tr>
		<td class='numero'> ${a2} </td> 
		</tr>`
		cuerpo2.innerHTML+=fila;
		}
	else{
		let fila = `<tr> 
		<td class='numero'> ${a} </td> 
		<td class='numero'> ${b} </td>
		<td class='numero'> ${discrepancia} </td>
		<td class='numero'> ${errora} </td>
		<td class='numero'> ${errorb} </td>
		</tr>`
		cuerpo2.innerHTML+=fila;
	}
	
	
}


function getX(lista){
	let listaX = []
	for(let item of lista)
	{
		listaX.push(item.x);
	}
	return listaX
}

function getY(lista){
	let listaY = []
	let guardar = 0;
	for (let item of lista) {
		guardar = a + (b*item.x);
		listaY.push(guardar);
	}	
	return listaY
}
