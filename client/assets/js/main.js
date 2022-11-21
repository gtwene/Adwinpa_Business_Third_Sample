// (function ($) {
//   $("#reset").on("click", function () {
//     $("#register-form").reset();
//   });
// })(jQuery);

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
  // console.log(val.value);
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
  // console.log(val.value);
  if (val.value == "colored") {
    document.getElementById("color").disabled = false;
    document.getElementById("blacknwhitediv").hidden = true;
    document.getElementById("colordiv").hidden = false;
  } else if (val.value == "black and white") {
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
  // console.log(bin);
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
  var copies = document.getElementById("copies").value;
  var color = document.getElementById("color").value;
  var lamination = document.getElementById("lamination").value;
  var envelope = document.getElementById("envelope").value;
  var binding = document.getElementById("binding").value;
  var payment = document.getElementById("payment").value;
  var deliver = document.getElementById("deliver").value;
  var blacknwhite = document.getElementById("blacknwhite").value;
  var pickup = document.getElementById("pickup").value;
  var coloredBlackWhite = document.getElementById("coloredBlackWhite").value;

  var est_cost =
    blacknwhite * Number(copies) +
    Number(deliver) +
    Number(lamination) +
    Number(envelope) +
    Number(binding);

  document.getElementById("tot_cost").value = `GHS ${est_cost}`;

  var est_cost =
    Number(color) * Number(copies) +
    Number(lamination) +
    Number(envelope) +
    Number(binding) +
    Number(deliver);
  document.getElementById("tot_cost").value = `GHS ${est_cost}`;

  console.log(
    blacknwhite * Number(copies) +
      Number(lamination) +
      Number(envelope) +
      Number(binding) +
      Number(deliver)
  );

  console.log(
    Number(color) * Number(copies) +
      Number(lamination) +
      Number(envelope) +
      Number(binding) +
      Number(deliver)
  );

  // // Select Fields

  // var copiesCardCheck = document.getElementById("copiesCardCheck").value;
  // console.log(name);
  // console.log(contactno);
  //   if (color) {
  //     const AddCost =
  //       color * copies +
  //       Number(lamination) +
  //       Number(envelope) +
  //       Number(binding) +
  //       Number(deliver);
  //     console.log(AddCost);
  //     document.getElementById("tot_cost").value = `GHS ${AddCost}`;
  //   } else if (blacknwhite) {
  //     const AddCost =
  //       blacknwhite * copies +
  //       Number(lamination) +
  //       Number(envelope) +
  //       Number(binding) +
  //       Number(copiesCardCheck) +
  //       Number(deliver);
  //     document.getElementById("tot_cost").value = `GHS ${AddCost}`;
  //   } else {
  //     return null;
  //   }
}

(function ($) {
  $("#submit").on("click", function () {
    e.preventDefault();
    // console.log("Database!");

    var FormContainer = document.getElementById("register-form");
    var name = document.getElementById("name").value;
    var contactno = document.getElementById("contactno").value;
    var emailaddress = document.getElementById("address").value;
    var above = document.getElementById("above").value;
    var copies = document.getElementById("copies").value;
    var color = document.getElementById("color").value;
    var lamination = document.getElementById("lamination").value;
    var envelope = document.getElementById("envelope").value;
    var binding = document.getElementById("binding").value;
    var payment = document.getElementById("payment").value;
    var deliver = document.getElementById("deliver").value;
    var blacknwhite = document.getElementById("blacknwhite").value;
    var pickup = document.getElementById("pickup").value;

    Email.send({
      // SecureToken: "bc8d1c51-78e5-473b-b84a-8fa183e08e84",
      Host: "smtp.mailtrap.io",
      username: "e69bc95ae3b59f",
      Password: "ff85955d80d071",
      To: "godfreykwametwene@gmail.com",
      From: "godfreykwametwene@gmail.com",
      Subject: `${name} sent a message`,
      Body: `Name : ${name} <br/>
        Contact No : ${contactno} <br/>
        Email Address : ${emailaddress} <br/>
        Above : ${above} <br/>
        copies : ${copies} <br/>
        color : ${color} <br/>
        lamination : ${lamination} <br/>
        envelope : ${envelope} <br/>
        binding : ${binding} <br/>
        payment : ${payment} <br/>
        deliver : ${deliver} <br/>
        blacknwhite : ${blacknwhite} <br/>
        pickup : ${pickup}
        `,
    }).then((message) => alert("Submitted"));
  });
});

// const queryString = window.location.search;
// console.log(queryString);

// function queryStringToJSON(queryString) {
//   if (queryString.indexOf("?") > -1) {
//     queryString = queryString.split("?")[1];
//   }
//   var pairs = queryString.split("&");
//   var result = {};
//   pairs.forEach(function (pair) {
//     pair = pair.split("=");
//     result[pair[0]] = decodeURIComponent(pair[1] || "");
//   });
//   return result;
// }

// console.log(queryStringToJSON(window.location.href));

function QueryStringToJSON() {
  var pairs = location.search.slice(1).split("&");

  var result = {};
  pairs.forEach(function (pair) {
    pair = pair.split("=");
    result[pair[0]] = decodeURIComponent(pair[1] || "");
  });

  return JSON.parse(JSON.stringify(result));
}

var query_string = QueryStringToJSON();
console.log(query_string);

localStorage.setItem("Data", JSON.stringify(query_string));

const getData = localStorage.getItem("Data");

console.log(getData);

// function sendEmail(
//   name,
//   contactno,
//   emailaddress,
//   above,
//   copies,
//   color,
//   lamination,
//   envelope,
//   binding,
//   payment,
//   deliver,
//   blacknwhite,
//   pickup
// ) {}
