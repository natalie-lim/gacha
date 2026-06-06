import { useEffect, useState } from "react";
import Gotcha from "./components_3D/gotcha";
import Welcome from "./components_3D/welcome";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-green-50 flex items-center justify-center" style={{ height: "100vh" }}>
      {/* {visible && <Welcome text="hi, my name is natalie!" />} */}
      <div style={{ width: "85vw", height: "85vh" }}>
        <Gotcha />
      </div>
    </div>
  );
}

export default App;
