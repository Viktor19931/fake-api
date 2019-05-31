import React from "react";
import { Provider } from "mobx-react";

import navigation from "./routing";
import stores from "./stores";

function App() {
  return <Provider {...stores}>{navigation()}</Provider>;
}

export default App;
