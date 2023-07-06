import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import AppUI from "./AppUI";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   transition: transitions.SCALE,
// };

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate}>
        {/* <AlertProvider template={AlertTemplate} {...options}> */}
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>
// );
