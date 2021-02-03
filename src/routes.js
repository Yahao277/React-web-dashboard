import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';

import TextView from './views/Tools/TextView';
import AddPrefixSuffix from './views/Tools/TextTools/AddPrefixSuffix.text';
import CountCharacters from './views/Tools/TextTools/CountCharacters.text';
import FindReplaceText from './views/Tools/TextTools/FindReplaceText.text';
import HashGenerator from './views/Tools/TextTools/HashGenerator';
import RandomNumGenerator from './views/Tools/TextTools/RandomNumGenerator';
import MapsView from './views/Maps/MapsView';
import PlanningView from './views/Maps/PlanningView';
import Testear from './Testear'

const routes = [
  {
    path:'/t',
    element: <Testear />
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'tools', element: <TextView/>},
      { path: 'tools/add_prefix' ,element: <AddPrefixSuffix/>},
      { path: 'tools/count_characters', element: <CountCharacters/>},
      { path: 'tools/find_replace_text', element: <FindReplaceText/>},
      { path: 'tools/hash_calculator', element: <HashGenerator/>},
      { path: 'tools/number_generator', element: <RandomNumGenerator/>},
      { path: 'maps', element: <MapsView />},
      { path: 'planning', element: <PlanningView/>},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  { path: '/', element: <Navigate to="/app/tools" />,
    children:[
      { path:'*', element: <Navigate to="/404" />}
    ] },
];

export default routes;
