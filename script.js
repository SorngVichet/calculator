const box = document.querySelectorAll(".box");
const preClcbox = document.querySelector(".pre-calc");
const resultbox = document.querySelector(".result");
const delIconX = document.querySelector(".rectangle1");
const delIconAC = document.querySelector(".rectangle2");
resultbox.textContent = "0";
delIconX.style.display = "none";

const NumberClass = {
  resultstr: "",
  resultNum: "",
  preClcNum: "",
  preClcstr: "",
  resultstrC: "",
};
let x = 0;
const Method = {
  perLoc: function () {
    preClcbox.style.bottom = "0px";
    preClcbox.style.fontSize = "50px";
  },
  lastLoc: function () {
    preClcbox.style.opacity = 1;
    preClcbox.style.bottom = "70px";
    preClcbox.style.fontSize = "25px";
  },
  Input: function (boxI, valueB) {
    box[boxI].addEventListener("click", function () {
      x = 1;
      Method.perLoc();
      preClcbox.textContent = "";
      NumberClass.resultstr += valueB;
      NumberClass.resultstrC += valueB;
      resultbox.textContent = NumberClass.resultstr;
      if (NumberClass.resultstr === "") {
        delIconX.style.display = "none";
        delIconAC.style.display = "block";
      } else {
        delIconX.style.display = "flex";
        delIconAC.style.display = "none";
      }
      scale();
    });
  },
  claculate: function (BoxI, ValueB, ValueC) {
    box[BoxI].addEventListener("click", function () {
      preClcbox.textContent = "";
      if (x === 0) {
        NumberClass.resultstr = "0";
        NumberClass.resultstrC = "0";
      }
      Method.perLoc();
      NumberClass.resultstr += ValueB;
      NumberClass.resultstrC += ValueC;
      resultbox.textContent = NumberClass.resultstr;
      scale();
    });
  },
  del: function () {
    const ArrNum = NumberClass.resultstr.split("");
    const delNum = ArrNum.slice(0, ArrNum.length - 1);
    let stor = "";
    for (let i = 0; i < delNum.length; i++) {
      stor += delNum[i];
    }
    NumberClass.resultstr = stor;
    NumberClass.resultstrC = stor;
    NumberClass.preClcstr = stor;
  },
};
function scale() {
  if (NumberClass.resultstr.length >= 7 && NumberClass.resultstr.length < 13) {
    resultbox.style.fontSize = "40px";
  } else if (
    NumberClass.resultstr.length >= 13 &&
    NumberClass.resultstr.length < 19
  ) {
    resultbox.style.fontSize = "30px";
    resultbox.style.minWidth = "300px";
  }
  1;
}
box[0].addEventListener("click", function () {
  Method.del();
  Method.lastLoc();
  x = 0;
  resultbox.style.fontSize = "50px";
  resultbox.style.minWidth = "100%";
  preClcbox.textContent = "";
  if (NumberClass.resultstr === "") {
    resultbox.textContent = "0";
    delIconX.style.display = "none";
    delIconAC.style.display = "block";
  } else {
    resultbox.textContent = NumberClass.resultstr;
    delIconAC.style.display = "none";
    delIconX.style.display = "flex";
  }
});
box[19].addEventListener("click", function () {
  Method.lastLoc();
  const Change = NumberClass.resultstrC;
  let FresultN = eval(Change);
  preClcbox.textContent = NumberClass.resultstr;
  resultbox.textContent = FresultN;
  NumberClass.resultstrC = "";
  NumberClass.resultstr = "";
  if (resultbox.textContent.length >= 7 && resultbox.textContent.length < 13) {
    resultbox.style.fontSize = "40px";
  } else if (
    resultbox.textContent.length >= 13 &&
    resultbox.textContent.length < 19
  ) {
    resultbox.style.fontSize = "27px";
    resultbox.style.minWidth = "280px";
  }
});

Method.Input(12, "1");
Method.Input(13, "2");
Method.Input(14, "3");
Method.Input(17, "0");
Method.Input(10, "6");
Method.Input(9, "5");
Method.Input(8, "4");
Method.Input(6, "9");
Method.Input(5, "8");
Method.Input(4, "7");
Method.claculate(3, "\u00F7", "/");
Method.claculate(7, "\u00D7", "*");
Method.claculate(11, "\u002D", "-");
Method.claculate(15, "\u002B", "+");
Method.claculate(18, "\u002E", ".");
Method.claculate(2, "%", "%");
