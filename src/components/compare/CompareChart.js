import '../../App.css'
import '../Chart.css'
import { Bar } from 'react-chartjs-2'


const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
        }
      ],
    },
};

const vaxOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y : {
      max: 100,
      labelString: 'ytext'
    },
  },
};

const CompareChart = ({state_1, state_2, cases_1, cases_2, death_1, death_2, p_1, p_2, vax_1, vax_2, hos_1, hos_2}) => {
    const vaxRate_1 = Math.round(vax_1 / p_1 * 1000) / 10;
    const vaxRate_2 = Math.round(vax_2 / p_2 * 1000) / 10;

    const caseData = {
        labels: [`${state_1}`, `${state_2}`],
        datasets: [
          {
            label: 'Total Cases',
            data: [cases_1, cases_2],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const deathData = {
      labels: [`${state_1}`, `${state_2}`],
        datasets: [
          {
            label: 'Deaths',
            data: [death_1, death_2],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const vaxData = {
      labels: [`${state_1}`, `${state_2}`],
        datasets: [
          {
            label: 'Vaccination Rate (%)',
            data: [vaxRate_1, vaxRate_2],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const hospitalizedData = {
      labels: [`${state_1}`, `${state_2}`],
        datasets: [
          {
            label: 'Total Hospitalized',
            data: [hos_1, hos_2],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

  return(
    <div>
      <div className = "bar_1">
          <Bar data={caseData} options={options}/>
      </div>
      <div className = "bar_2">
          <Bar data={deathData} options={options}/>
      </div>
      <div className = "bar_3">
          <Bar data={vaxData} options={vaxOptions}/>
      </div>
      <div className = "bar_4">
          <Bar data={hospitalizedData} options={options}/>
      </div>
    </div>
    
  )
}

export default CompareChart
