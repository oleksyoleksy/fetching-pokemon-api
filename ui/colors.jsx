// NEXT
// REACT
// YARN
import Color from 'color';
// REPO-JS
// REPO-JSX
// REPO-SCSS


// https://hexcolor.co/pantone-colors
// https://github.com/Qix-/color#manipulation

// 16 32 48 64 80 96 112 128 144 160 176 192 208 224 240 256
//  1  2  3  4  5  6   7   8   9  10  11  12  13  14  15  16

const rgb_8_8_8 = `rgb(128, 128, 128)`;

const p423 = `rgb(143, 143, 143)`;
const p423_f05 = `${Color(p423).fade(0.5).rgb().string()}`;


// ======
// export

const rgb = {
  rgb_8_8_8: rgb_8_8_8,
  p423_f05: p423_f05,
};

export {
  rgb
};
