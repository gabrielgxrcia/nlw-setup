const button = document.querySelector('header button')
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

button.addEventListener('click', add) //Após clicar efetuar function de add.
form.addEventListener('change', save) //Após fazer alteração efetua function de save.

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('Parece que o dia' + today + 'já está na lista. 🤔')
    return
  }
  nlwSetup.addDay(today) //
  alert('Você já pode adicionar seus hábitos hoje.')
}

function save() {
  localStorage.setItem('HabitsNLW', JSON.stringify(nlwSetup.data)) //Convertendo pra texto.
}

const data = JSON.parse(localStorage.getItem('HabitsNLW'))
nlwSetup.setData(data)
nlwSetup.load()
