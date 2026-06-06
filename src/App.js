import { useEffect, useState } from "react";
import Gotcha from "./components_3D/gacha";
import Welcome from "./components_3D/welcome";
import Nav from "./components_2D/Navigation";


function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#f9f9f7]">
      {visible ? <Welcome text="hi, my name is natalie!" /> 
      :
      <div>
        <div className="flex flex-row items-center p-24">

          <div className="">
            <Gotcha />
          </div>
          
        </div>
        <Nav />
      </div>
      }
    </div>

  );
}

export default App;
