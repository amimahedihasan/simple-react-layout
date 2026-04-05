
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/Daisynav/DaisyNav'
import NabBar from './Components/NavBar/NabBar'
import PricingOption from './Components/Pricing/PricingOption'
import ResutltCharts from './Components/ResutltCharts/ResutltCharts'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'
import { BarChart, XAxis, YAxis } from 'recharts'

const marksPromise = axios.get('MarksData.json')

const pricingPromise = fetch('PricingData.json').then(res => res.json())
function App() {

  return (
    <>
      <header>

        <NabBar></NabBar>
        {/* <DaisyNav></DaisyNav> */}

        <main>

          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>
          }>
            <PricingOption pricingPromise={pricingPromise}></PricingOption>
          </Suspense>
          <ResutltCharts></ResutltCharts>
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>
          }>
            <MarksChart marksPromise={marksPromise}></MarksChart>
          </Suspense>


        </main>

      </header>


    </>
  )
}

export default App
