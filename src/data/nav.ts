import FirstPage from '../pages/First';
import HomePage from '../pages/Home';
import SecondPage from '../pages/Second';

const navData = [
  { name: 'Home', to: '/Home', component: HomePage },
  { name: 'First', to: '/First', component: FirstPage },
  { name: 'Second', to: '/Second', component: SecondPage },
];

export default navData;
