let choiceImport = document.getElementById("import");
let choiceExport =document.getElementById("export");
let bulk = document.getElementById("bulk");
let container = document.getElementById("container");
let truck = document.getElementById("truck");
let rail = document.getElementById("rail");
let twentyFeet = document.getElementById("twentyFeet");
let twenty = document.getElementById("twentyContainerAmount");
let forty = document.getElementById("fortyContainerAmount");
let ton = document.getElementById("bulkTonAmount");

let total = document.getElementById("total");
let calculate = document.getElementById("calculate");

// This is suppose to hide some the radio buttons if one option is chosen. Not working though 
// $("#bulk").change(function(){
//     if($(this).val() == "container") {
//         $('#twentyFeet').show();
//         $('#fortyFeet').show();
//         $('#twentyContainerAmount').attr('required', '');
//         $('#twentyContainerAmount').attr('data-error', 'This field is required.')
//         $('#fortyContainerAmount').attr('required', '');
//         $('#fortyContainerAmount').attr('data-error', 'This field is required.')
//     } else{
//         $('#tons').hide();
//         $('#bulkTonAmount').attr('required');
//         $('#bulkTonAmount').attr('data-error')

//     }
// });

calculate.addEventListener("click", function(){
let twentyContainerAmountInput = Number(twenty.value);
let fortyContainerAmountInput = Number(forty.value);
let tonInput = Number(ton.value);
let calculatedTotal = 0;

if(choiceImport.checked) {
    if(bulk.checked) {
        if(rail.checked){
            calculatedTotal = tonInput * 28;
        } else {
            //by truck
            calculatedTotal = tonInput * 86;
        }
    } else {
        // Containerized
        if(rail.checked){
            if(twentyFeet.checked){
                calculatedTotal = twentyContainerAmountInput * 2305;
            }
            else {
                calculatedTotal = fortyContainerAmountInput * 2155;
            }
        }
        // By truck
        else{ 
            if(twentyFeet.checked){
                calculatedTotal = twentyContainerAmountInput * 2455;            
            }
            else{
                calculatedTotal = fortyContainerAmountInput * 3855;
            }
        }
    }
} else {
    //export
    if(bulk.checked) {
        if(rail.checked) {

        } else {

        }
    } else {

    }
}

total.value = '$' + calculatedTotal;
})
