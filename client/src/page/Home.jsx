import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import Nutrition from '../components/Nutrition';
import NightLife from '../components/NightLIfe';

const Home = () => {

  const {type} = useParams();

  return (
    <div className='my-5'>
      {type === "delivery" && <Delivery />}
      {type === "dining" && <Dining />}
      {type === "night" && <NightLife />}
      {type === "nutri" && <Nutrition />}
    </div>
  )
}

export default Home;