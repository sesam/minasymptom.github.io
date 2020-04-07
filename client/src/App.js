import React from "react";
import "./App.css";
import { Start } from "./components/Start";
import { Checkup } from "./components/Checkup";
import { ONE_HOUR } from "@cocheck/api";
import { COVID19symptoms } from "@cocheck/checks";

function App() {
  const [nextCheckup, setNextCheckup] = React.useState();
  const [userData, setUserData] = React.useState();

  const enableCheckup = React.useCallback(
    (data) => {
      setUserData(data);
      setNextCheckup(new Date() + ONE_HOUR);
    },
    [setUserData]
  );

  const saveCheckup = React.useCallback((data) => {
    console.log("save checkup...", data);
    setNextCheckup(new Date() + ONE_HOUR);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!userData && <Start onSave={enableCheckup} />}
        {!!userData && (
          <Checkup
            checks={COVID19symptoms}
            nextCheckup={nextCheckup}
            onSave={saveCheckup}
          />
        )}
      </header>
    </div>
  );
}

export default App;
