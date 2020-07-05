const people = [
  { name: 'david' },
  { name: 'patel' },
  { name: 'andre' },
  { name: 'felix' },
  { name: 'toshi' },
  { name: 'mis' },
  { name: 'morul' },
  { name: 'moruv' },
];
let input = document.querySelector('.input');
let output = document.querySelector('.result');
let result = [];
function showInput(e) {
  let outputresult = '';
  const value = input.value;
  function filterItems(query) {
    return names.filter(function (name) {
      return name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  result = filterItems(value);
  for (key in result) {
    outputresult += `<li>${result[key]}</li>`;
  }
  if (input.value == '') {
    outputresult = '';
  }

  output.innerHTML = outputresult;
}

addEventListener('input', showInput);
const names = [];
for (person of people) {
  console.log(person.name);
  names.push(person.name);
}
console.log(names);
