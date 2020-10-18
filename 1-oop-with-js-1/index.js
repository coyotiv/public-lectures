class Taxi {
  driving = false
  location = ''
  passenger = null

  startDriving() {
    this.driving = true
  }
  stopDriving() {
    this.driving = false
  }
  navigate(destination) {
    this.startDriving()

    if (this.passenger) {
      this.location = this.passenger.destination
      this.passenger.location = taxi.location
      this.passenger.destination = ''
    } else {
      this.location = destination
    }

    this.stopDriving()
  }
}

class Customer {
  destination = ''
  location = ''

  constructor(name) {
    this.name = name
  }

  book(taxi, { from, to }) {
    this.location = from
    this.destination = to
    taxi.navigate(this.location)
  }
  enterTaxi(taxi) {
    taxi.passenger = this
  }
  leaveTaxi(taxi) {
    taxi.passenger = null
  }
}

const taxi = new Taxi()
const customer = new Customer('Armagan')

customer.book(taxi, { from: 'Kreuzberg', to: 'Mitte' })
customer.enterTaxi(taxi)
taxi.navigate()
customer.leaveTaxi(taxi)

console.log(customer, taxi)
