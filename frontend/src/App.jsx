import routers from '@/routers';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const routing = useRoutes(routers(isLoggedIn));

  return <>{routing}</>;
}

export default App;
