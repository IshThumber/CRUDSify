/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        'sans': ["Urbanist", "sans-serif"],
      },
    },
    plugins: [
      prelinePlugin,
    ],
  }
});
