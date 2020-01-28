let again = 'y';
let miles = 0.0;
let gallons = 0.0;
let calcMssg = "";

do {

    miles = prompt('enter the number of miles traveled:');
    miles = parseFloat(miles);
    gallons = prompt('enter the number of gallons consumed:');
    gallons = parseFloat(gallons);

    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        let mpg = miles / gallons;
        mpg = parseInt(mpg);//round the number
        calcMssg = `<p>MPG: Miles traveled: <strong>${miles}</strong> miles.\n` +
                    `Gallons consumed: <strong>${gallons}</strong>\n` +
                    `MPG: <strong>${mpg}</strong></p>`;
    } else {
        calcMssg = `<p style="color:red;">One or more imputs invalid.</p>`;
    }

    again = prompt('all set up? y/n');

} while(again != 'y');