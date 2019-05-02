import React, { Component, Fragment } from "react";

import Navbar from "./Navbar/Navbar";
import Notification from "./Notification/Notification";
import { Severity } from "./Severity";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Notification severity={Severity.Info}>
          Drogi Użytkowniku, Niniejsza strona korzysta z plików cookies dla celów statystycznych i marketingowych.
          “Dowiedz się więcej” lub kliknij “Akceptuję”, w celu zaakceptowania wszystkich rodzajów cookies.
        </Notification>
      </Fragment>
    );
  }
}

export default App;
