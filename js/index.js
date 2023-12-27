const addButton = document.getElementById('addMoney');
const getButton = document.getElementById('getMoney');
const bankAccont = {
    ownerName: "Egor",
    accountNumber: 9929,
    balance: 8000,
    deposit: 5000,
    get: 1000,
    addMoneyButton() {
        addButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance + bankAccont.deposit
            console.log(bankAccont.balance)
        })
    },
    getMoneyButton() {
        getButton.addEventListener('click', (event) => {
            bankAccont.balance = bankAccont.balance - bankAccont.get
            if (bankAccont.balance <= 0) {
                console.log("На рахунку вистачає грошей")
            }
            console.log(bankAccont.balance)
        })
    }
}
bankAccont.addMoneyButton()
bankAccont.getMoneyButton()

const weather = {
  temperature: prompt("Введіть температуру"),
  humidity: 10,
  windSpeed: 2,
  checkTemperature() {
      if (weather.temperature > 0) {
          console.log("false")
      } else {
          console.log("true")
      }
  }
}
weather.checkTemperature()

const user = {
  name: 'Egor',
  email: 'qwerty@gmail.com',
  password: 1321,
  emailCheck() {
      const checkEmail = prompt("Введіть E-mail: ")
  if (checkEmail === user.email) {
      alert("Успішно")
  } else {
      alert("Спробуйте ще раз")
  }
  },
  passwordCheck() {
      const checkPassword = Number(prompt("Введіть пароль:"))
  if (checkPassword === user.password) {
  alert("Успішно")
} else {
  alert("Спробуйте ще раз")
}
  }
}
user.emailCheck()
user.passwordCheck()

const filmTitle = document.getElementById("title");
const movie = {
    title: "",
    director: "The Grinch",
    year: 2018,
    rating: 7,
    goodRating() {
        if (this.rating > 8) {
            console.log("true")
            filmTitle.style.color = "green"
            filmTitle.textContent = this.title
        } else {
            console.log("false")
            filmTitle.style.color = "red"
            filmTitle.textContent = this.title
        }
    }
}
movie.goodRating()