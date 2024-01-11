import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-open-sans: 'Open Sans';
--font-poppins: Poppins;
--font-source-sans-pro: 'Source Sans Pro';
--font-roboto: Roboto;

/* font sizes */
--font-size-mini: 15px;
--font-size-2xl: 21px;
--font-size-37xl: 56px;
--font-size-3xl: 22px;
--font-size-mini-7: 14.7px;
--font-size-lgi: 19px;
--font-size-lg-8: 18.8px;

/* Colors */
--color-darkslategray-100: #424961;
--body: #444957;
--primary: #0e2368;
--color-white: #fff;
--color-lightsteelblue: rgba(147, 162, 211, 0.38);
--b9c: #828b9c;
--color-dimgray: #646874;
--color-whitesmoke: #f8f8f8;

/* Gaps */
--gap-8xl-4: 27.4px;
--gap-sm-7: 13.7px;
--gap-sm: 14px;

/* Border radiuses */
--br-2xl: 21px;
--br-xl-9: 20.9px;
--br-8xs: 5px;

}
`;
}
