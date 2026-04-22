function show(num) {
  document.querySelectorAll(".box").forEach(el => el.style.display = "none");
  document.getElementById("exp" + num).style.display = "block";
}

/* 👨‍💼 EXP 1 — Employee CLI (CRUD) */
let employees = [];

function addEmp() {
  const name = document.getElementById("empName").value;
  if (name === "") return;

  employees.push(name);
  renderEmp();
}

function renderEmp() {
  const ul = document.getElementById("empList");
  ul.innerHTML = "";

  employees.forEach((e, i) => {
    ul.innerHTML += `
      <li>
        ${e}
        <button onclick="deleteEmp(${i})">❌</button>
      </li>`;
  });
}

function deleteEmp(i) {
  employees.splice(i, 1);
  renderEmp();
}

/* 🃏 EXP 2 — REST API */
function getCards() {
  const data = ["Ace ♠", "King ♥", "Queen ♦"];
  document.getElementById("cards").innerHTML =
    data.map(c => `<div>${c}</div>`).join("");
}

/* 🎟️ EXP 3 — Ticket Booking */
let seatBooked = false;

function bookSeat() {
  const status = document.getElementById("seatStatus");

  if (!seatBooked) {
    seatBooked = true;
    status.innerText = "Seat booked successfully ✅";
  } else {
    status.innerText = "Seat already booked ❌ (Lock applied)";
  }
}