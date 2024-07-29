import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as pageStyle from './Pizzerias.module.css';
import * as tableStyle from './PizzeriaTable.module.css';
import { Table } from "antd";

const Pizzerias = (props) => {

    // State variables

    let [year, setYear] = useState(2021);
    let [meanCA, setMeanCA] = useState(0);
    let [selectedPizzerias, setSelectedPizzerias] = useState([]);

    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const years = [2019, 2020, 2021, 2022, 2023, 2024];
    const tableColumns = [
        {title: '', dataIndex: 'name', key: 'name'},
        ...months.map((month, index) => {
            return {
                title: month, 
                dataIndex: monthNames[index], 
                key: monthNames[index],
                render: (text, record, index) => (formatEarning(text)),
            }
          }),
        {
            title: 'Total CA', 
            dataIndex: 'totalEarnings', 
            key: 'totalEarnings', 
            showSorterTooltip: {
              target: 'full-header',
            },
            render: (text, record, index) => (<span class="CA" className={parseInt(text) >= meanCA ? pageStyle.overCA : pageStyle.underCA}>{formatEarning(text)}</span>),
            sorter: (a, b) => a.totalEarnings - b.totalEarnings}
    ]

    // Data models

    class Pizzeria {
        constructor(name, years) {
            this.name = name;
            this.years = years;
        }

        getYear(year){
            return this.years.find(el => el.id == year)
        }
    }

    class Year {
        constructor(year) {
            this.id = year;
            this.months = {}
            if(Object.values(this.months).length <= 0){
                for(let month of monthNames){
                    const randomRevenue = generateRandomRevenue();
                    this.months[month] = new Month(randomRevenue) //Generate a random number by default
                }
            }
        }

        getListOfMonths(){
            const json = []
            for(const [name, month] of Object.entries(this.months)){
                json[name] = month.earnings;
            }
            return json
        }

        totalEarnings(){
            //month.earnings can be null but the sum of all earnings will be a number (null+1 = 1)
            //since we start at 0, there's no issue
            return Object.values(this.months).reduce((acc, month) => acc + month.earnings, 0)
        }
    }

    class Month {
        constructor(earnings) {
            this.earnings = earnings;
            this.employees = 0;
        }
    }

    // Initialize data
    
    const pizzerias = [
        new Pizzeria('Caldo Pizza Wasquehal', [new Year(2021), new Year(2022), new Year(2023), new Year(2019)]),
        new Pizzeria('Pizza Zio', [new Year(2021), new Year(2022), new Year(2023), new Year(2024), new Year(2019)]),
        new Pizzeria('Papa Rafaele', [new Year(2021), new Year(2023), new Year(2024), new Year(2019)]),
        new Pizzeria('Domino\'s Pizza', [new Year(2021), new Year(2022), new Year(2024)]),
    ]
    //Test for empty data
    pizzerias[0].years[0].months['january'].earnings = null;
    
    // Helper functions 

    function formatEarning(earning){
        if(earning === null){
            return "N/A"
        }else{
            return earning.toLocaleString("fr-FR", { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 }) + " €"
        }
    }
    function generateRandomRevenue(){
        return Math.ceil(Math.random() * 20) * 10000
    }
    function setCurrentYear(){
        const date = new Date();
        const year = date.getFullYear();
        const yearSelector = document.querySelector('#yearSelector');
        yearSelector.value = year;

        // Manually dispatch the change event
        const event = new Event('change', { bubbles: true });
        yearSelector.dispatchEvent(event);
    }

    function handleSelect(e){
        year = setYear(e.target.value)
        const piz = matchingPizzerias(e.target.value)
        setSelectedPizzerias(piz)
        const totalSum = piz.reduce((acc, curr) => acc + curr.totalEarnings, 0)
        //alert(`Pizzerias: ${piz.map((pizzeria) => pizzeria.totalEarnings)}\nTotal Sum: ${totalSum}\nMean value: ${totalSum/piz.length}`)
        setMeanCA(totalSum/piz.length)
    }

    /*
        Returns an array of formated data rows for the antd table
    */
    function matchingPizzerias(year){
        let matching = []
        let index = 0;
        for(let pizzeria of pizzerias){
            const piYear = pizzeria.getYear(year)
            if(piYear){
                matching.push({
                    key: pizzeria.name,
                    name: pizzeria.name,
                    ...piYear.getListOfMonths(),
                    totalEarnings: piYear.totalEarnings()
                })
                index++;
            }
        }
        return matching
    }


    // Lifecycle methods

    useEffect(() => {
        // Load current year
        setCurrentYear();
    }, []); // Empty dependency array ensures this runs once when the component mounts
    
    return (
        <div>
        <h1>Chiffre d'affaire</h1>
            <label htmlFor="yearSelector">Année</label>
            <div>
                <select onChange={handleSelect} name="yearSelector" id="yearSelector">
                    {/* TODO: Only show relevant years */}
                    {years.map((year, index) => (<option key={index} value={year}>{year}</option>))}
                    
                </select>
            </div>
            <label htmlFor="earningTable"></label>
            <p>{matchingPizzerias(year).length} pizzerias trouvées</p>
            {/* <PizzeriaTable pizzerias={matchingPizzerias(year)}></PizzeriaTable> */}
            <div id={pageStyle.tab}>
                <Table 
                    columns={tableColumns} 
                    dataSource={selectedPizzerias}
                    showSorterTooltip={{
                        target: 'sorter-icon',
                    }}
                    pagination={{
                        position: ['none']
                    }}/>
                <p id="CA">CA Moyen: <span>{formatEarning(meanCA)}</span></p>
            </div>
        </div>
    );
};

export default Pizzerias