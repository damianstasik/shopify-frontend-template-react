import ReactDOM from "react-dom";

import App from "./App";
import { initI18n } from "./utils/i18nUtil";

initI18n();

ReactDOM.render(<App />, document.getElementById("app"));
