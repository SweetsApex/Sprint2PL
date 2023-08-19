const taxRate = 0.15;

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const jsonDisplay = document.getElementById('json-display');
    
    // For Each Loop to Read Data from JSON://

    data.forEach(person => {
      console.log(getFullName(person));
      console.log(getAge(person));
      console.log(getSex(person));
      console.log(getJobTitle(person));
      console.log(getEthnicity(person));
      console.log(getMaritalStatus(person));
      console.log(getSalary(person));
      console.log(getSalaryTaxes(person));

      // Display data in HTML
      jsonDisplay.innerHTML += `
        <p>Name: ${getFullName(person)}</p>
        <p>Age: ${getAge(person)}</p>
        <p>Sex: ${getSex(person)}</p>
        <p>Job Title: ${getJobTitle(person)}</p>
        <p>Ethnicity: ${getEthnicity(person)}</p>
        <p>Marital Status: ${getMaritalStatus(person)}</p>
        <p>Salary: ${getSalary(person)}</p>
        <p>Salary Taxes: ${getSalaryTaxes(person)}</p>
        <hr>
      `;
    });
  })
  // Catch any potential errors://
  .catch(error => {
    console.error(error);
  });

// Below are the required functions to call upon://

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function getAge(person) {
  const birthYear = new Date(person.birthday).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return `${person.firstName} is ${age} years old.`;
}

function getSex(person) {
  return person.sex;
}

function getJobTitle(person) {
  return person.jobTitle;
}

function getEthnicity(person) {
  return person.ethnicity;
}

function getMaritalStatus(person) {
  return person.maritalStatus;
}

function getSalary(person) {
  return person.salary;
}

function getSalaryTaxes(person) {
  return person.salary * taxRate;
}
