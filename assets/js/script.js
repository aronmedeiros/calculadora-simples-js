var monitor = document.getElementById('monitor');
var semiigual = document.getElementById('semiigual');

function botao(num){
	
    if(validarSinal(num) == false){
        num = verificaValor(num);
        if(monitor.innerText == ""){
            monitor.innerText = num;
        }else{
            monitor.innerText += num;
        }
    }else{
        monitor.innerText = monitor.innerText.slice(0, -1) + num;
    } 

	if(isNaN(num) == false){
		semiigual.innerText = semiIgual();
	}

    if(String(monitor.innerText).length > 12){ monitor.style.fontSize = "2.2rem"; }else{ monitor.style.fontSize = "3.2rem"; }
    if(String(semiigual.innerText).length > 18){ semiigual.style.fontSize = "1rem"; }else{ semiigual.style.fontSize = "1.6rem";  }
}

function apagarUltimo(){
	
    monitor.innerText = monitor.innerText.slice(0, -1);
    if(String(monitor.innerText).length > 0){
        semiigual.innerText = semiIgual();
    }else{
        semiigual.innerText = "";
    }
}

function reset(){
    monitor.innerText = "";
    semiigual.innerText = "";
}

function igual(){
	
	var v = monitor.innerText.substr(-1, 1);
	if(isNaN(v) == false || v == ")"){
		var total = String(monitor.innerText).replace(/x/g, '*');
		total = String(total).replace(/,/g, '.');
		total = eval(total);
		if(total == undefined){ 
			monitor.innerText = "";
			semiigual.innerText = "";
		}else{ 
			monitor.innerText = eval(total);
			semiigual.innerText = "";
		}
	}
}

function semiIgual(){
    var total = String(monitor.innerText).replace(/x/g, '*');
    total = String(total).replace(/,/g, '.');
    total = eval(total);
    if(total === undefined){ 
        return ""; 
    }else{ 
        return total; 
    }
}

function verificaValor(ultimoDigi){
    var v = monitor.innerText.substr(-1, 1);
	var m = monitor.innerText;
	if(ultimoDigi == "0" || ultimoDigi == ","){
        return ultimoDigi;
    }else if(ultimoDigi == "(" && isNaN(v) == false && v.length != 0){
        return "x(";
    }else if(v == ")" && isNaN(ultimoDigi) == false && v.length != 0){
        return "x" + ultimoDigi;
    }else if(ultimoDigi == "(" || ultimoDigi == "-"  && v.length == 0){
        return ultimoDigi;
    }else if(v == "(" && ultimoDigi == ")"){
        return "";
    }else if(v == "(" && ultimoDigi == "/"){
        return "";
    }else if(v == "(" && ultimoDigi == "x"){
        return "";
    }else if(isNaN(ultimoDigi) && v.length == 0 ){
        return "";
    }else if(ultimoDigi == "00" && v.length == 0 ){
        return "";
    }else if(m.includes('(') == false && ultimoDigi == ")"){
		return "";
	}else{
        return ultimoDigi;
    }
}

function validarSinal(ultimoDigi){
    var v = monitor.innerText.substr(-1, 1);
    if(isNaN(v) && isNaN(ultimoDigi) && v.length >= 0){
        if(ultimoDigi == "+" || ultimoDigi == "-" || ultimoDigi == "x" || ultimoDigi == "/"){
            if(v == "+" || v == "-" || v == "x" || v == "/"){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    return false;
}