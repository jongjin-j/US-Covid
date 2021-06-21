import {Doughnut} from 'react-chartjs-2'
import '../Chart.css'

const SingleChart = ({p, vax, hos, icu}) => {
    const vaxRate = Math.round(vax / p * 1000) / 10

    const data = {
        labels: ['Vaccinated', 'Not vaccinated'],
        datasets: [
            {
            data: [vaxRate, 100 - vaxRate],
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1,
            },
        ],
    };

    const data2 = {
        labels: ['Hospitalized', 'In ICU'],
          datasets: [
              {
              data: [hos, icu],
              backgroundColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              },
          ],
    }

  return(
    <div>
      <div className = "doughnut_1">
        <Doughnut 
          data = {data}
          options = {{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
      <div className = "doughnut_2">
        <Doughnut 
          data = {data2}
          options = {{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    </div>
  )
}

export default SingleChart