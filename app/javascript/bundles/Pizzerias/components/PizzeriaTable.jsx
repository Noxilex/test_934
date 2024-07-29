import PropTypes from 'prop-types';
import React, { useState } from 'react';

const PizzeriaTable = (props) => {
    const pizzerias = props.pizzerias;
    const idMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const displayMonths = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    function formatEarning(earning){
        if(earning === null){
            return "N/A"
        }else{
            return earning.toLocaleString("fr-FR", { style: 'decimal', maximumFractionDigits : 2, minimumFractionDigits : 2 }) + " €"
        }
    }
    
    return ( <div>
        <table>
                <thead>
                <tr>
                    <th></th>
                    {
                        displayMonths.map((month) => (
                            <th key={month}>{month}</th>
                        ))
                    }
                    <th>Total CA</th>
                </tr>
                </thead>
                <tbody>
                {
                    pizzerias.map((pizzeria) => (
                        <tr key={pizzeria.name}>
                            <td class="name">{pizzeria.name}</td>
                            {
                                // TODO: Handle error if no data is present for a month
                                idMonths.map((month) => (
                                        <td key={month}>{ formatEarning(pizzeria.months[month].earnings)}</td>
                                    ))
                            }
                            <td>
                            {
                                formatEarning(pizzeria.totalEarnings)
                            }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            </div>
            )
}

PizzeriaTable.propTypes = {
    pizzerias: PropTypes.object.isRequired, 
  };

export default PizzeriaTable