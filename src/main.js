const add = (x, y) => { return x + 2*y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity();
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  }
  else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = '';
  if (document.querySelector('#degC').checkValidity() && document.querySelector('#degK').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#degC').value)
    const j = parseInt(document.querySelector('#degK').value)
    const ans = `${s}, your sum is ${add(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}



document.addEventListener('focusout', event => {
  if (event.target && event.target.id === 'degC' ||
    event.target && event.target.id === 'degK') {
    validate(event)
  }
});



