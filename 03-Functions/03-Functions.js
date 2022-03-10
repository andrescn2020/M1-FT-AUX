function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas
if(time.charAt(8) === "P"){
    var division = time.split("");
    division.pop();
    division.pop();
    var union = division.join("");
    var division2 = union.split(":");
    division2[0] = Number(division2[0]);

    if(division2[0] < 12){
        division2[0] = division2[0] + 12;
    } else {
       division2[0] = division2[0];
    }
    if(division2[0] > 24 || division2[1] > 60 || division2[2] > 60){
        return false;
    }

    division2[0] = String(division2[0]);
    var union2 = division2.join(":");
    return union2;
    }

if(time.charAt(8) === "A"){
    var division = time.split("");
    division.pop();
    division.pop();
    var union = division.join("");
    var division2 = union.split(":");

    if(division2[0] > 24 || division2[1] > 60 || division2[2] > 60){
        return false;
    }

    if(division2[0] === "12"){
        division2[0] = "00";
    }
    if(division2[0] > 12){
        division2[0] = Number(division2[0]);
        division2[0] = division2[0] - 12;
    } else {
        division2[0] = division2[0];
    }

    var union2 = division2.join(":");
    return union2;
    }

  var error = time.split("");
  if(error.length > 9 || error.length < 8){
    return false;
  }


  //let [hours, minutes, seconds] = time.split(":");
  //let ampm = seconds[2] + seconds[3];
  //seconds = seconds[0] + seconds[1];
  //if(ampm === "AM"){
  //    hours = hours === "12" ? "00" : hours;
  //    return `${hours}:${minutes}:${seconds}`;
  //}
  //hours = hours === "12" ? hours : parseInt(hours) + 12;
  //
  //
 
}

module.exports = {
    timeConversion
}