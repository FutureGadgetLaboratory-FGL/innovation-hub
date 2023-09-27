import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

library.add(fas, faTwitter, faFontAwesome);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
