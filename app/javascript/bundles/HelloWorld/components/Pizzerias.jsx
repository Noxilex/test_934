import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as style from './Pizzerias.module.css';

const Pizzerias = (props) => {

const generateRandomRevenue = () => Math.floor(Math.random() * 10000);
let [year, setYear] = useState(2021);
const pizzerias = [
    {
        name: 'Pizzeria A',
        years: [
            {
                year: 2022,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2023,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2024,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2025,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
        ],
    },{
        name: 'Pizzeria B',
        years: [
            {
                year: 2021,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2022,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2023,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2024,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2025,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
        ],
    },{
        name: 'Pizzeria C',
        years: [
            {
                year: 2021,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2022,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2023,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2025,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
        ],
    },{
        name: 'Pizzeria D',
        years: [
            {
                year: 2021,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2023,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2024,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
            {
                year: 2025,
                months: [
                    { month: 'January', earnings: generateRandomRevenue() },
                    { month: 'February', earnings: generateRandomRevenue() },
                    { month: 'March', earnings: generateRandomRevenue() },
                    { month: 'April', earnings: generateRandomRevenue() },
                    { month: 'May', earnings: generateRandomRevenue() },
                    { month: 'June', earnings: generateRandomRevenue() },
                    { month: 'July', earnings: generateRandomRevenue() },
                    { month: 'August', earnings: generateRandomRevenue() },
                    { month: 'September', earnings: generateRandomRevenue() },
                    { month: 'October', earnings: generateRandomRevenue() },
                    { month: 'November', earnings: generateRandomRevenue() },
                    { month: 'December', earnings: generateRandomRevenue() },
                ],
            },
        ],
    },
];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
function handleSelect(e){
    year = setYear(e.target.value)
    console.log(e.target.value)
}

function matchingPizzerias(){
    return pizzerias.filter(pizzeria => pizzeria.years.some(el => el.year == year))
}
  return (
    <div>
      <h1>Chiffre d'affaire</h1>
    <label htmlFor="yearSelector">Année</label>
    <select onChange={handleSelect} name="yearSelector" id="yearSelector">
        {Array.from({length: 6}, (_, index) => (
            <option key={index} value={2020 + index}>{2020 + index}</option>
        ))}
    </select>
    <label htmlFor=""></label>
      <table>
        <thead>
          <tr>
            <th>Pizzeria</th>
            {months.map((month) => (
              <th key={month}>{month}</th>
            ))}
            <th>Total CA</th>
          </tr>
        </thead>
        <tbody>
        {matchingPizzerias().map((pizzeria) => (
            <tr key={pizzeria.name}>
                <td>{pizzeria.name}</td>
                {pizzeria.years[0].months.map((month) => (
                        <td key={month.month}>{month.earnings.toFixed(2)}</td>
                    ))}
                <td>{pizzeria.years[0].months.reduce((acc, month) => acc + month.earnings, 0).toFixed(2)}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

Pizzerias.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};
export default Pizzerias