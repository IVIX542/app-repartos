var tabla = new Array(100).fill(new Array(5).fill(""));
var x = 0;

while(x < 100){
    if(x<100){
        tabla[x] = new Array(5);
        tabla[x][0] = ""; 
        tabla[x][1] = ""; 
        tabla[x][2] = ""; 
        tabla[x][3] = ""; 
        tabla[x][4] = "";
    } else{
        x = 200;
    }
    x++
}

function buscar_fecha(){

    var x = 0;
    while(x < 99){
        if(document.getElementById("fecha").value == tabla[x][0]){

            document.getElementById("fecha").value = tabla[x][0];
			document.getElementById("matricula").value = tabla[x][1];
			document.getElementById("km").value = tabla[x][2];
			document.getElementById("litros").value = tabla[x][3];
			document.getElementById("remolques").value = tabla[x][4];
        }
        x++;
    }
}

function buscar_matricula(){

    var x = 0;
    while(x < 99){
        if(document.getElementById("matricula").value == tabla[x][1]){

            document.getElementById("fecha").value = tabla[x][0];
			document.getElementById("matricula").value = tabla[x][1];
			document.getElementById("km").value = tabla[x][2];
			document.getElementById("litros").value = tabla[x][3];
			document.getElementById("remolques").value = tabla[x][4];
        }
        x++;
    }
}

function anadir(){
    const fecha = document.getElementById("fecha").value;
    const matricula = document.getElementById("matricula").value;
    const km = document.getElementById("km").value;
    const litros = document.getElementById("litros").value;
    const remolques = document.getElementById("remolques").value;
  
    // Improved error handling for missing form
    if (!fecha || !matricula || !km || !litros || !remolques) {
      window.alert("Error: Algunos campos están vacíos.");
      return; // Exit if any field is missing
    }
  
    let encontrado = false; // Flag to indicate a free slot found
  
    // Loop to find an empty slot in the table (replace 'tabla' with your actual array)
    for (let x = 0; x < 99; x++) {
      if (tabla[x][0] === "" && tabla[x][1] === "" && tabla[x][2] === "" && tabla[x][3] === "" && tabla[x][4] === "") {
        tabla[x][0] = fecha;
        tabla[x][1] = matricula;
        tabla[x][2] = km;
        tabla[x][3] = litros;
        tabla[x][4] = remolques;
        encontrado = true;
        break; // Exit loop after finding a free slot
      }
    }
  
    // Handle the scenario where no free slot is found
    if (!encontrado) {
      window.alert("No hay espacios libres en la tabla");
    }
}