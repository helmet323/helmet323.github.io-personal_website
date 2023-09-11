import React from 'react';
import Home from './Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About';
import Navbar from './Navbar';
import LastModified from './LastModified';
import Work from './Work';
import GrappleBallkour from './assets/GrappleBallkour.png';
import ChoreMatcher from './assets/ChoreMatcher.png';
import Overwatch2 from './assets/Overwatch2.jpg';
import ConnectTheShots from './assets/ConnectTheShots.png';

// Quick updates for website
const lastModifiedDate = 'September 10, 2023';
const introduction =
  'My name is Tommy. I am a student, currently in my 2nd year of study at the University of Waterloo majoring in computer science. Here, you can check out all the cool projects that I have made throughout my journey.';
const about =
  'In the past, I worked with Unity to create simple indie games with a couple of friends. We developed many, many game concepts and assets. Though not all ideas came to life, we gain experience working as a team. More recently, I have been studying the development of website and learning about all the different tools to build a interactive website.';
const projects = [
  {
    name: 'Grapple Ballkour',
    image: GrappleBallkour,
    description: '2D game made with physics deployed onto the Google Playstore',
    url: 'https://play.google.com/store/apps/details?id=com.EcxLStudios.GrappleBallkour&pli=1',
  },
  {
    name: 'Chore Matcher',
    image: ChoreMatcher,
    description:
      'Web application that allows users to find volunteer opportunities',
    url: 'https://devpost.com/software/chore-matcher',
  },
  {
    name: 'Overwatch2 Tierlist',
    image: Overwatch2,
    description:
      'A frontend React web app where you can create your own tierlist for Overwatch 2',
    url: 'https://github.com/helmet323/TierList',
  },
  {
    name: 'Connect the Shots',
    image: ConnectTheShots,
    description: '2D desktop app made in 48hrs for the GMTK 2021 Game Jam',
    url: 'https://itch.io/jam/gmtk-2021/rate/1085534',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home introduction={introduction} />,
  },
  {
    path: '/about',
    element: <About about={about} />,
  },
  {
    path: '/work',
    element: <Work projects={projects} />,
  },
]);

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <RouterProvider router={router} />
      <LastModified date={lastModifiedDate} />
    </React.Fragment>
  );
}

export default App;
