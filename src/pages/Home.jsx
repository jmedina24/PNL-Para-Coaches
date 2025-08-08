import React from 'react'
import Main from '../components/Main';
import WhyPNL from '../components/WhyPNL';
import PNLOrigins from '../components/PNLOrigins';
import WhyEnroll from '../components/WhyEnroll';
import WorkingTogether from '../components/WorkingTogether';
import PNLForCoaches from '../components/PNLForCoaches';
import Modules from '../components/Modules';
import WhatIncludes from '../components/WhatIncludes';
import Summary from '../components/Summary';
import Satisfaction from '../components/Satisfaction';
import WhyHim from '../components/WhyHim';
import FAQs from '../components/FAQs';
import Countdown from '../components/Countdown';

const Home = () => {
  return (
    <>
      <Countdown />
      <Main />
      <WhyPNL />
      <PNLOrigins />
      <WhyEnroll />
      <WorkingTogether />
      <PNLForCoaches />
      <Modules />
      <WhatIncludes />
      <Summary />
      <Satisfaction />
      <WhyHim />
      <FAQs />
    </>
  )
}

export default Home