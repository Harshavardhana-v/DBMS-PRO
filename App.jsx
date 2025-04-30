// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './RegisterForm.jsx';
import Login from './LoginForm.jsx';
import Dashboard from './Dashboard.jsx';
import Forests from './Forests.jsx';
import Animals from './Animals.jsx';
import LandAnimals from './LandAnimals';
import WaterAnimals from './WaterAnimals.jsx';
import AirAnimals from './AirAnimals.jsx';
import Resources from './Resources.jsx';
import Timber from './Timber.jsx';
import NonTimber from './NonTimber.jsx';
import EcologicalCulturalServices from './EcologicalCulturalServices.jsx';
import WaterBodies from './WaterBodies.jsx';
import Rivers from './Rivers.jsx';
import Lakes from './Lakes.jsx';
import Streams from './Streams.jsx';
import Ponds from './Ponds.jsx';
import Waterfalls from './Waterfalls.jsx';
import Reservoirs from './Reservoirs.jsx';
import BandipurPage from './BandipurPage.jsx';
import DandeliPage from './DandeliPages.jsx';
import NagarholePage from './NagarholePages.jsx';
import BannerghattaPage from './BannerghattaPages.jsx';
import BhadraPage from './BhadraPage.jsx';
import KudremukhPage from './KudremukhPage.jsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forests" element={<Forests />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/land-animals" element={<LandAnimals />} />
      <Route path="/water-animals" element={<WaterAnimals />} />
      <Route path="/air-animals" element={<AirAnimals/>}/>
      <Route path="/resources" element={<Resources />} />
      <Route path="/timber" element={<Timber />} />
      <Route path="/non-timber" element={<NonTimber />} />
      <Route path="/ecological-cultural" element={<EcologicalCulturalServices />} />
      <Route path="/waterbodies" element={<WaterBodies />} />
      <Route path="/rivers" element={<Rivers />} />
      <Route path="/lakes" element={<Lakes />} />
      <Route path="/streams" element={<Streams />} />
      <Route path="/ponds" element={<Ponds />} />
      <Route path="/waterfalls" element={<Waterfalls />} />
      <Route path="/reservoirs" element={<Reservoirs />} />
      <Route path="/forests/1" element={<BandipurPage />} />
      <Route path="/forests/2" element={<DandeliPage />} />
      <Route path="/forests/3" element={<NagarholePage />} />
      <Route path="/forests/4" element={<BannerghattaPage />} />
      <Route path="/forests/5" element={<BhadraPage />} />
      <Route path="/forests/6" element={<KudremukhPage />} />
    </Routes>
  );
};

export default App;
