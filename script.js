"use strict";

// Select Card
let cardName = document.querySelector(".card-name");
let cardNo = document.querySelector(".card-number");
let cardCvv = document.querySelector(".cvv");
let cardDate = document.querySelector(".text-left");

// Select form element
const nameInput = document.querySelector("#cardholder__name");
const numberInput = document.querySelector("#card__number");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvvInput = document.querySelector("#cvv");
const confirmPayment = document.querySelector(".submit__btn");

const getName = () => {
  cardName.textContent = nameInput.value;
};

const getCardNo = () => {
  cardNo.textContent = numberInput.value;
};

const getDate = () => {
  monthInput.value;
  console.log(cardDate);
  yearInput.value;
  cardDate.textContent = `${monthInput.value}/${yearInput.value}`;
};

const getCvv = () => {
  cardCvv.textContent = cvvInput.value;
};

confirmPayment.addEventListener("click", (e) => {
  e.preventDefault();
  getName();
  getCardNo();
  getDate();
  getCvv();
});
