(function ($) {
  $("#reset").on("click", function () {
    $("#register-form").reset();
  });
})(jQuery);

// disable
function enableMomo(val) {
  console.log(val.value);
  if (val.value == 1) {
    document.getElementById("momo").hidden = true;
    document.getElementById("estimatedCost").hidden = false;
  } else if (val.value) {
    document.getElementById("momo").hidden = false;
    document.getElementById("estimatedCost").hidden = false;
  }
}

// Disabling and Enabling
function disableEnabled(val) {
  console.log(val.value);
  const code = val.value;
  if (code) {
    document.getElementById("laminationDiv").hidden = false;
    document.getElementById("envelopeDiv").hidden = false;
    document.getElementById("bindingDiv").hidden = false;
  }
}

// results-delivery
function results_delivery(results) {
  console.log(results.value);
  if (results.value == 1) {
    document.getElementById("statemail").hidden = false;
    document.getElementById("printOut").hidden = true;
    document.getElementById("quantity").hidden = true;
    document.getElementById("timeP").hidden = true;
  } else if (results.value == 2) {
    document.getElementById("printOut").hidden = false;
    document.getElementById("quantity").hidden = false;
    document.getElementById("timeP").hidden = false;
    document.getElementById("statemail").hidden = true;
  } else if (results.value == 3) {
    document.getElementById("printOut").hidden = false;
    document.getElementById("quantity").hidden = false;
    document.getElementById("delivertime").hidden = false;
    document.getElementById("location").hidden = false;
    document.getElementById("timeP").hidden = true;
    document.getElementById("statemail").hidden = true;
  }
}

function disableColorOrBW(val) {
  console.log(val.value);
  if (val.value == 1) {
    document.getElementById("color").disabled = false;
    document.getElementById("blacknwhitediv").hidden = true;
    document.getElementById("colordiv").hidden = false;
  } else if (val.value == 2) {
    document.getElementById("blacknwhite").disabled = false;
    document.getElementById("blacknwhitediv").hidden = false;
    document.getElementById("color").disabled = true;
    document.getElementById("colordiv").hidden = true;
  }
}

const BuyCardOnly = (val) => {
  console.log(val);
  var BuyCardOnlyValue = val;
  document.getElementById("tot_cost").value = `GHS ${BuyCardOnlyValue}`;

  var typeOfCardDo = document.getElementById("typeOfCardDo").value;
  var quantity = document.getElementById("quantity").value;
  const getResults = typeOfCardDo * quantity;
  console.log(getResults);
  document.getElementById("tot_cost").value = `GHS ${getResults}`;
};

const typeofCard = (val) => {
  console.log(val);
  var typeofCardValue = val;
  document.getElementById("tot_cost").value = `GHS ${typeofCardValue}`;
};

const EveryResults = (results) => {
  var bin = results;
  console.log(bin);
  document.getElementById("tot_cost").value = `GHS ${bin}`;
};

// buy Card Check Results
const buyCardCheckResults = (val) => {
  console.log(val);
  var BuyCardChechValue = val;
  document.getElementById("tot_cost").value = `GHS ${BuyCardChechValue}`;

  var blacknwhite = document.getElementById("blacknwhite").value;
  var howtogetResults = document.getElementById("howtogetResults").value;
  var deliver = document.getElementById("deliver").value;
  var typeOfCardDo = document.getElementById("typeOfCardDo").value;

  // if (howtogetResults == 3) {
  //   const getResults = BuyCardChechValue * blacknwhite;
  //   document.getElementById("tot_cost").value = `GHS ${getResults}`;
  //   console.log(getResults);
  // }

  if (howtogetResults == 3) {
    const getResults =
      BuyCardChechValue * blacknwhite + Number(deliver) + Number(typeOfCardDo);
    document.getElementById("tot_cost").value = `GHS ${getResults}`;
    console.log(getResults);
  }
};

function submitOutFunc() {
  var name = document.getElementById("name").value;
  var contactno = document.getElementById("contactno").value;
  var address = document.getElementById("address").value;
  var above = document.getElementById("above").value;
  // Select Fields
  var color = document.getElementById("color").value;
  var blacknwhite = document.getElementById("blacknwhite").value;
  var copies = document.getElementById("copies").value;
  var pickup = document.getElementById("pickup").value;
  var lamination = document.getElementById("lamination").value;
  var envelope = document.getElementById("envelope").value;
  var binding = document.getElementById("binding").value;
  var payment = document.getElementById("payment").value;
  var deliver = document.getElementById("deliver").value;
  var copiesCardCheck = document.getElementById("copiesCardCheck").value;
  // console.log(name);
  // console.log(contactno)

  if (color) {
    const AddCost =
      color * copies +
      Number(lamination) +
      Number(envelope) +
      Number(binding) +
      Number(deliver);
    console.log(AddCost);
    document.getElementById("tot_cost").value = `GHS ${AddCost}`;
  } else if (blacknwhite) {
    const AddCost =
      blacknwhite * copies +
      Number(lamination) +
      Number(envelope) +
      Number(binding) +
      Number(copiesCardCheck) +
      Number(deliver);
    document.getElementById("tot_cost").value = `GHS ${AddCost}`;
  }
}

(function ($) {
  $("#submit").on("click", function () {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Adwinpa Business",
      showConfirmButton: false,
      timer: 2500,
    });

    return false;
  });
})(jQuery);
