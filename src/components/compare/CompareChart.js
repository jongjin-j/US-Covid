import '../../App.css'
import { Bar } from 'react-chartjs-2'


const options = {
    responsive: true,
    scales: {
      xAxes: [{
        barPercentage: 0.2
      }],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
        {
            barPercentage: 0.2
        }
      ],
    },
};

const CompareChart = ({p, vax, hos, icu}) => {
    //const vaxRate = Math.round(vax / p * 1000) / 10

    const data = {
        labels: ['Red', 'Blue'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

  return(
    <div classname = "bar_1">
        <Bar data={data} options={options}/>
        <p className = "bar_1">hi</p>
    </div>
    
  )
}

export default CompareChart
