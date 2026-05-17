function result() {
    let temp = Number(document.getElementById("degreeCelsius").value);
    let humidity = Number(document.getElementById("percentagehumidity").value);

    let HeatIndex = temp + (0.33 * humidity) - 4;
    
        if (HeatIndex >= 0 && HeatIndex <= 27) {
            window.alert ("comfortable/cool");
        }
        else if (HeatIndex >=28 && HeatIndex <=32) {
            window.alert ("warm");
        }
        else if (HeatIndex >=33 && HeatIndex <=37) {
            window.alert ("hot");
        }
        else if (HeatIndex >=38 && HeatIndex <=41) {
            window.alert ("very hot/caution");
        }
        else {
            window.alert ("extreme heat/danger");
        }

}