// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
import {cx, css} from '@emotion/css';
// REPO-JS
import {state} from 'state.js';
import {
  desktop_small, desktop_medium, desktop_large,
  laptop_small, laptop_medium, laptop_large,
  tablet_small, tablet_medium, tablet_large,
  phone_small, phone_medium, phone_large,
} from 'breakpoints.js';
// REPO-JSX
import Header from 'layout/Header';
import Footer from 'layout/Footer';
// REPO-SCSS


const Layout = ({children}) => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);





  useEffect(() => {

    // ==========================================================
    // reading viewport's width and height (excluding scrollbars)
    // and assigning those values to valtio-state dynamically
    // after every and any viewport's resize

    // after browser is reloaded:
    state.width = document.documentElement.clientWidth;
    state.height = document.documentElement.clientHeight;

    // after browser is resized:
    const resizeWatcher = () => {
      state.width = document.documentElement.clientWidth;
      state.height = document.documentElement.clientHeight;
    };

    window.addEventListener('resize', resizeWatcher);

    // reading viewport's width and height (excluding scrollbars)
    // and assigning those values to valtio-state dynamically
    // after every and any viewport's resize
    // ==========================================================





    // ============================================
    // shifting <main> when hiding/showing <header>

    const mainSelector = document.querySelector("main");

    // reading current `scrollY` value dynamically
    // (state.vertical_scroll is dynamically updated in Header.jsx)
    let last_vertical_scroll = state.vertical_scroll;

    // if scrolling down, <main> must be shifted up
    const scrolling_watcher = () => {
      if (last_vertical_scroll < window.scrollY) {
        mainSelector.classList.add("main-is-shifted");
      } else {
        mainSelector.classList.remove("main-is-shifted");
      }
    };

    window.addEventListener('scroll', scrolling_watcher);

    // shifting <main> when hiding/showing <header>
    // ============================================

	}, []);










  // --------------------------------------------
  //    0 - 8888
  const ALL = css`

    // -----------------------------------------
    // hide/show <header> when scrolling up/down
    // JS-logic for this is in ~/layout/Header.jsx
    header {
      position: fixed;
      top: 0px;
      left: 0px;
      transition: transform 0.4s;
    }
    header.header-is-hidden {
      transform: translateY(-150px); // 3 * height of Nav.jsx
    }
    main {
      padding-top: 50px; // because in 'comps/Nav.jsx' height: 50px; (for ALL <nav> and <ul>)
      padding-bottom: 25px;
    }
    // hide/show <header> when scrolling up/down
    // -----------------------------------------




    // --------------------------------------------
    // shifting <main> when hiding/showing <header>
    // JS-logic for this is here, in ~/layout/Layout.jsx
    main {
      transition-property: padding-top;
      transition-duration: 0.3s;
    }
    main.main-is-shifted {
      padding-top: 20px;
    }
    // shifting <main> when hiding/showing <header>
    // --------------------------------------------





    main {
      margin-top: 0px;
      margin-bottom: 0px;
      border-style: solid;
      border-width: 0px;
      background-color: red;
      .jsx-content {
        margin-top: 20px;
      }
    }
  `;



  // -----------
  // 1801 - 8888
  const MAX = css`
    main {
      border-color: rgba(0, 0, 0, 1.0);
      background-color: rgba(255, 255, 255, 1.0);
    }
  `;










  // --------------------------------------------
  // 1201 - 1800
  const DESKTOP = css`
    main {
      border-color: rgba(0, 0, 0, 0.25);
    }
  `;

  // -----------
  // 1601 - 1800
  const DESKTOP_LARGE = css`
    main {
      background-color: rgba(0, 0, 0, 0.2);
    }
  `

  // -----------
  // 1401 - 1600
  const DESKTOP_MEDIUM = css`
    main {
      background-color: rgba(0, 0, 0, 0.25);
    }
  `;

  // -----------
  // 1201 - 1400
  const DESKTOP_SMALL = css`
    main {
      background-color: rgba(0, 0, 0, 0.3);
    }
  `;










  // --------------------------------------------
  //  901 - 1200
  const LAPTOP = css`
    main {
      border-color: rgba(0, 255, 0, 0.5);
    }
  `;

  // -----------
  // 1101 - 1200
  const LAPTOP_LARGE = css`
    main {
      background-color: rgba(255, 255, 0, 0.2);
    }
  `;

  // -----------
  // 1001 - 1100
  const LAPTOP_MEDIUM = css`
    main {
      background-color: rgba(255, 255, 0, 0.4);
    }
  `;

  // -----------
  //  901 - 1000
  const LAPTOP_SMALL = css`
    main {
      background-color: rgba(255, 255, 0, 0.7);
    }
  `;










  // --------------------------------------------
  //  601 -  900
  const TABLET = css`
    main {
      border-color: rgba(255, 0, 0, 0.5);
    }
  `;

  // -----------
  //  801 -  900
  const TABLET_LARGE = css`
    main {
      background-color: rgba(255, 0, 255, 0.2);
    }
  `;

  // -----------
  //  701 -  800
  const TABLET_MEDIUM = css`
    main {
      background-color: rgba(255, 0, 255, 0.3);
    }
  `;

  // -----------
  //  601 -  700
  const TABLET_SMALL = css`
    main {
      background-color: rgba(255, 0, 255, 0.4);
    }
  `;










  // --------------------------------------------
  //    0 -  600
  const PHONE = css`
    main {
      border-color: rgba(0, 0, 255, 0.5);
    }
  `;

  // -----------
  //  501 -  600
  const PHONE_LARGE = css`
    main {
      background-color: rgba(0, 255, 255, 0.2);
    }
  `;

  // -----------
  //  401 -  500
  const PHONE_MEDIUM = css`
    main {
      background-color: rgba(0, 255, 255, 0.4);
    }
  `;

  // -----------
  //    0 -  400
  const PHONE_SMALL = css`
    main {
      background-color: rgba(0, 255, 255, 0.6);
    }
  `;










  return (
    <div lang="pl" id="header-main-footer" className={cx(
      ALL,
      {[MAX]:            state.width >  desktop_large},

      {[DESKTOP]:        state.width >  laptop_large   && state.width <= desktop_large},
      {[DESKTOP_LARGE]:  state.width >  desktop_medium && state.width <= desktop_large},
      {[DESKTOP_MEDIUM]: state.width >  desktop_small  && state.width <= desktop_medium},
      {[DESKTOP_SMALL]:  state.width >  laptop_large   && state.width <= desktop_small},

      {[LAPTOP]:         state.width >  tablet_large   && state.width <= laptop_large},
      {[LAPTOP_LARGE]:   state.width >  laptop_medium  && state.width <= laptop_large},
      {[LAPTOP_MEDIUM]:  state.width >  laptop_small   && state.width <= laptop_medium},
      {[LAPTOP_SMALL]:   state.width >  tablet_large   && state.width <= laptop_small},

      {[TABLET]:         state.width >  phone_large    && state.width <= tablet_large},
      {[TABLET_LARGE]:   state.width >  tablet_medium  && state.width <= tablet_large},
      {[TABLET_MEDIUM]:  state.width >  tablet_small   && state.width <= tablet_medium},
      {[TABLET_SMALL]:   state.width >  phone_large    && state.width <= tablet_small},

      {[PHONE]:          state.width <= phone_large},
      {[PHONE_LARGE]:    state.width >  phone_medium   && state.width <= phone_large},
      {[PHONE_MEDIUM]:   state.width >  phone_small    && state.width <= phone_medium},
      {[PHONE_SMALL]:    state.width <= phone_small},
    )}>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;
