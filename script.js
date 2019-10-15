let numberInput = document.querySelector('#numberInput')
let factField = document.querySelector('#factField');
let factText = document.querySelector('#factText');

const getFact = () => {
    let number = numberInput.value;
    console.log(number);1
    factField.style.display = 'block';

    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            factText.textContent = data;
            if (number === '') {
                factText.textContent = '';
                factField.style.display = 'none';
            }
        })
        .catch(error => console.warn(error));
}

numberInput.addEventListener('input', getFact)

