// NEXT
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
import {
  phone_small, phone_medium, phone_large,
  tablet_small, tablet_medium, tablet_large,
  laptop_small, laptop_medium, laptop_large,
  desktop_small, desktop_medium, desktop_large,
} from 'breakpoints.js';
// REPO-JSX
// REPO-SCSS


const Index = () => {

  useSnapshot(state);

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

        <h2>ALL</h2>

        {state.width > desktop_large && <h2>MAX</h2>}

        {state.width > laptop_large && state.width <= desktop_large && <h2>DESKTOP</h2>}
        {state.width > desktop_medium && state.width <= desktop_large && <h2>desktop large</h2>}
        {state.width > desktop_small && state.width <= desktop_medium && <h2>desktop medium</h2>}
        {state.width > laptop_large && state.width <= desktop_small && <h2>desktop small</h2>}

        {state.width > tablet_large && state.width <= laptop_large && <h2>LAPTOP</h2>}
        {state.width > laptop_medium && state.width <= laptop_large && <h2>laptop large</h2>}
        {state.width > laptop_small && state.width <= laptop_medium && <h2>laptop medium</h2>}
        {state.width > tablet_large && state.width <= laptop_small && <h2>laptop small</h2>}

        {state.width > phone_large && state.width <= tablet_large && <h2>TABLET</h2>}
        {state.width > tablet_medium && state.width <= tablet_large && <h2>tablet large</h2>}
        {state.width > tablet_small && state.width <= tablet_medium && <h2>tablet medium</h2>}
        {state.width > phone_large && state.width <= tablet_small && <h2>tablet small</h2>}

        {state.width <= phone_large && <h2>PHONE</h2>}
        {state.width > phone_medium && state.width <= phone_large && <h2>phone large</h2>}
        {state.width > phone_small && state.width <= phone_medium && <h2>phone medium</h2>}
        {state.width <= phone_small && <h2>phone small</h2>}

      </div>
    </div>
  );
}

export default Index;
