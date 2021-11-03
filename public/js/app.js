console.log('Client side JS file is loaded.')

const getWeather = (location) => {
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('./weather?address=' + location).then((response) => {
    response.json().then((weatherData) => {
        if (weatherData.error) {
            messageOne.textContent = weatherData.error
        } else {
            messageOne.textContent = weatherData.location
            messageTwo.textContent = weatherData.forecast
        }
    })
})
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    getWeather(location)
})