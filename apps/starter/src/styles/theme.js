const theme = {
  colors: {
    primary: {
      link: '#0070f3',
    },
  },
  fonts: {},
  breakpoints: {
    xxxsmall: { num: 400 }, // small phone width
    xxsmall: { num: 500 }, // large phone width
    xsmall: { num: 736 }, // height of iPhone 6/7/8 Plus, less than height of standard desktop browser
    small: { num: 930 }, // size at which our desktop content no longer fits. Less than this = use mobile layout
    medium: { num: 1024 }, // width of iPad Pro, or height of standard desktop window
    large: { num: 1200 },
    xlarge: { num: 1440 }, // width of standard 2015 Macbook Pro 15in
    xxlarge: { num: 1920 },
    /*
     example: (theme) => css`
       // styles for desktop (>= 901px wide) outside of media query
       ${theme.breakpoints.small.max} {
         // styles for mobile and small tablet (<= 900px wide) inside media query
         width: ${theme.breakpoints.small.num/2}px; // use just the number, without the media query
       }
     `
    */
  },
};
for (let size in theme.breakpoints) {
  let obj = theme.breakpoints[size];
  obj.str = obj.num + 'px';
  obj.max = `@media (max-width: ${obj.num}px)`;
  obj.min = `@media (min-width: ${obj.num + 1}px)`;
  obj.maxHeight = `@media (max-height: ${obj.num}px)`;
  obj.minHeight = `@media (min-height: ${obj.num + 1}px)`;
  theme.breakpoints[size] = obj;
}
theme.breakpoints.all = `@media (min-width: 0px)`;

export default theme;
