<template>
  <div>
    <h1 class="title">Chart</h1>
    <button @click="toggle()" class="button">Toggle</button>
    <button @click="get()" class="button">Print</button>
    <ApexChart ref="myChart" :series="series" :type="types[idx]" :options="options"/>
  </div>
</template>

<script>
import jsPDF from 'jspdf'

export default {
  data() {
    return {
      idx: 0
    }
  },
  methods: {
    toggle() {
      if (this.idx == 2) {
        this.idx = 0
      } else {
        this.idx += 1
      }
    },
    get() {
      this.$refs.myChart.chart.dataURI().then(uri => {
        const pdf = new jsPDF()
        pdf.addImage(uri, 'PNG', 0, 0)
        
        pdf.save('download.pdf')
      })
    }
  },
  computed: {
    series() {
      return [
        {
          name: '2019', data: [3, 1, 5] 
        },
        {
          name: '2018', data: [2, 8, 6] 
        },
      ]
    },
    options() {
      return {
        xaxis: {
          categories: ['Dep A', 'Dep B', 'Dep C']
        }
      }
    },
    types() {
      return ['line', 'bar', 'area']
    }
  }
}
</script>