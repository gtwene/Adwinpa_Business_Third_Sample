function calculateAmount(val) {
  //   var blacknwhite = document.getElementById();
  var tot_price = val;
  var divobj = (document.getElementById("tot_amount").value = tot_price);
}

function getprice() {
  var price = document.getElementById("bnwnc").value;
  var pin = document.getElementById("tot_pin_requested").value;

  var total = document.getElementById("tot_amount").value;

  var totalCost = price * pin;
  var divobj = (document.getElementById("tot_amount").value = totalCost);
}
