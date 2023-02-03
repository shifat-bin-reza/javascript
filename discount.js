function discount(tickets) {
  let first100Price = 100;
  let second100Price = 90;
  let restOfTheTickets = 70;
  if (tickets <= 100) {
    const price = tickets * 100;
    return price;
  } else if (tickets > 100 && tickets <= 200) {
    const frist100tickets = first100Price * 100;
    const restTickets = tickets - 100;
    const restTicketsPrice = restTickets * 90;

    return frist100tickets + restTicketsPrice;
  } else {
    const frist100tickets = first100Price * 100;
    const second100tickets = second100Price * 100;
    const restTickets = tickets - 200;
    const restTicketsPrice = restTickets * 70;

    return frist100tickets + second100tickets + restTicketsPrice;
  }
}

const price = discount(120);
console.log("price: ", price);
