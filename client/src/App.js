import Sidebar from './components/sidebar/Sidebar';
import Nav from './components/nav/Nav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)


function App() {
  return (
		<div className="flex ">
			<Sidebar />
			<Nav />
		</div>
	);
}

export default App;
