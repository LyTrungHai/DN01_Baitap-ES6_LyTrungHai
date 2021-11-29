// khối 1

let average1 = () => {
  var toan = parseFloat(document.getElementById("inpToan").value);
  var ly = parseFloat(document.getElementById("inpLy").value);
  var hoa = parseFloat(document.getElementById("inpHoa").value);
  let result = averageFunc(toan, ly, hoa);
  document.getElementById("tbKhoi1").innerHTML = "Điểm trung bình: " + result;
};
document.getElementById("btnKhoi1").onclick = average1;

// khoi 2
let average2 = () => {
  var van = parseFloat(document.getElementById("inpVan").value);
  var su = parseFloat(document.getElementById("inpSu").value);
  var dia = parseFloat(document.getElementById("inpDia").value);
  var eng = parseFloat(document.getElementById("inpEnglish").value);
  let result = averageFunc(van, su, dia, eng);
  document.getElementById("tbKhoi2").innerHTML = "Điểm trung bình: " + result;
};
document.getElementById("btnKhoi2").onclick = average2;
//

let averageFunc = (...inputs) => {
  let sum = 0,
    average;
  for (let i of inputs) {
    sum += i;
  }
  average = sum / inputs.length;
  return average;
};
