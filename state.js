// YARN
import {proxy} from 'valtio';

// writing state
const state = proxy({
  width: 0, // viewport's width (excluding any scrollbar)
  height: 0, // viewport's height (excluding any scrollbar)

  vertical_scroll: 0, // number of pixels scrolled vertically

  how_many_links_in_navbar: 0, // self explanatory: counting Links in <nav>
  all_links_width_combined: 0, // I will loop through all Links and aggregate offsetWidth of each Link
  space_between_two_links: 0,
});

export {state};
