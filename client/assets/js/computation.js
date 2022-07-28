function calculateAmount(val) {
  //   var blacknwhite = document.getElementById();
  var tot_price = val;
  var divobj = (document.getElementById("tot_amount").value = tot_price);
}

function getprice() {
  //   var price = document.getElementById("bnwnc").value;
  var pin = document.getElementById("tot_pin_requested").value;
  var printoutBlack = document.getElementById("printoutBlack").value;
  var printoutColor = document.getElementById("printoutColor").value;
  var SelBindind = document.getElementById("SelBindind").value;
  var SelectYes = document.getElementById("SelectYes").value;
  var selEnvelop = document.getElementById("selEnvelop").value;

  var total = document.getElementById("tot_amount").value;

  if (printoutBlack) {
    var totalCost =
      printoutBlack * pin +
      Number(SelBindind) +
      Number(SelectYes) +
      Number(selEnvelop);
    document.getElementById("tot_amount").value = totalCost;
  } else if (printoutColor) {
    var totalCost1 = printoutColor * pin;
    document.getElementById("tot_amount").value = totalCost1;
  }

  //var divobj = (document.getElementById("tot_amount").value = totalCost);
}

function disablePrint(selPrint) {
  console.log(selPrint.value);
  if (selPrint.value == 1) {
    document.getElementById("printoutBlack").disabled = false;
  } else if (selPrint.value == 2) {
    document.getElementById("printoutColor").disabled = false;
    document.getElementById("printoutBlack").disabled = true;
  }
}

function Lamination(selLami) {
  console.log(selLami.value);
  if (selLami.value == 1) {
    document.getElementById("SelectYes").disabled = false;
  } else {
    document.getElementById("SelectYes").disabled = true;
  }
}

function calculateResultsCheck(results) {
  //   var blacknwhite = document.getElementById();
  var tot_price = results;
  document.getElementById("tot_Estimate").value = `GHS ${tot_price}`;
}

function resultsCheck() {
  var TypeOfCard = document.getElementById("TypeOfCard").value;
  var quantity = document.getElementById("quantity").value;

  var TotalResultsCheck = TypeOfCard * quantity;

  document.getElementById("tot_Estimate").value = `GHS ${TotalResultsCheck}`;
}

function PayWithMomoORCard(paywith) {
  console.log(paywith.value);
  if (paywith.value == 1) {
    document.getElementById("PayForYourCard").disabled = false;
    document.getElementById("PayForYourCard").hidden = false;
  } else {
    document.getElementById("PayForYourCard").disabled = true;
    document.getElementById("PayForYourCard").hidden = true;
  }
}
