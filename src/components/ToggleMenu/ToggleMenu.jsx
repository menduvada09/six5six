import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ToggleMenu.module.css";

export default function ToggleMenu({ isOpen, onClose }) {
  const location = useLocation();

  const [activeSport, setActiveSport] = useState("Cricket");
  const [activeGender, setActiveGender] = useState("Men");
  const [activeWear, setActiveWear] = useState("Activewear");
  const [activeType, setActiveType] = useState("Tops");

  const isHomePage = location.pathname === "/";
  const filterPages = ["/products", "/new-in", "/men", "/shop"];
  const hasFilterBar = filterPages.some((path) =>
    location.pathname.includes(path)
  );

  const headerHeight = isHomePage ? "4vw" : hasFilterBar ? "7.72vw" : "4vw";

  return (
    <div
      className={`${styles.menuOverlay} ${isOpen ? styles.open : ""}`}
      style={{
        "--header-height": headerHeight,
        "--left-gap": hasFilterBar ? "13vw" : "16.5vw",
        "--bottom-box-height": hasFilterBar ? "15.1vw" : "15.1vw",
        "--right-gap": hasFilterBar ? "5.5vw" : "9vw",
      }}
    >
      <button className={styles.mobileCloseBtn} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <ul className={styles.items}>
              <li>New arrivals</li>
              <li>Kolkata Knight Riders</li>
              <li>Oversized Tshirts</li>
              <li>
                Budwiser X Six5Six
                <span className={styles.limited}>Limited</span>
              </li>
              <li>Sale | 50% Site wide</li>
              <li>Shop All</li>
            </ul>
          </div>
          <div className={styles.leftBottom}>
            <div className={styles.cntr}>
              <button>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 19.296 19.273"
                  >
                    <g
                      id="Group_582"
                      data-name="Group 582"
                      transform="translate(0 -0.313)"
                    >
                      <path
                        id="Path_221"
                        data-name="Path 221"
                        d="M340.312,7.812h-4.754a.822.822,0,0,0-.822.822v2.378a.822.822,0,0,0,.822.822.48.48,0,0,1,.48.48v1.47a.184.184,0,0,0,.342.095l1.087-1.812a.48.48,0,0,1,.412-.233h2.434a.822.822,0,0,0,.822-.822V8.634A.822.822,0,0,0,340.312,7.812Z"
                        transform="translate(-322.121 -7.216)"
                        fill="#b3e59f"
                      ></path>
                      <path
                        id="Path_222"
                        data-name="Path 222"
                        d="M361.3,7.812h-2.462a.822.822,0,0,1,.822.822v2.378a.822.822,0,0,1-.822.822h-2.292a.48.48,0,0,1,.48.48v1.47a.184.184,0,0,0,.342.095l1.087-1.812a.48.48,0,0,1,.412-.233H361.3a.822.822,0,0,0,.822-.822V8.634A.822.822,0,0,0,361.3,7.812Z"
                        transform="translate(-343.11 -7.216)"
                        fill="#95d6a4"
                      ></path>
                      <path
                        id="Path_223"
                        data-name="Path 223"
                        d="M145.743,234.62a.823.823,0,0,1-.668-.808v-2.261h-3.147v2.261a.825.825,0,0,1-.668.808S145.956,234.661,145.743,234.62Z"
                        transform="translate(-135.937 -222.523)"
                        fill="#ffddce"
                      ></path>
                      <path
                        id="Path_224"
                        data-name="Path 224"
                        d="M23.67,316.949c-.224-.043-6.227,0-6.227,0a4.861,4.861,0,0,0-3.943,4.774v1.6a.658.658,0,0,0,.658.658H26.954a.658.658,0,0,0,.658-.658v-1.6A4.861,4.861,0,0,0,23.67,316.949Z"
                        transform="translate(-12.992 -304.684)"
                        fill="#ffd064"
                      ></path>
                      <path
                        id="Path_225"
                        data-name="Path 225"
                        d="M52.074,317.247H40.592l-.3-5.611a.868.868,0,0,1,.866-.915H51.512a.868.868,0,0,1,.866.915Z"
                        transform="translate(-38.768 -298.71)"
                        fill="#eaf2ff"
                      ></path>
                      <path
                        id="Path_226"
                        data-name="Path 226"
                        d="M275.265,310.722H272.8a.868.868,0,0,1,.866.915l-.3,5.611h2.462l.3-5.611A.868.868,0,0,0,275.265,310.722Z"
                        transform="translate(-262.522 -298.71)"
                        fill="#dbe8f9"
                      ></path>
                      <path
                        id="Path_227"
                        data-name="Path 227"
                        d="M21.456,471.934H8.108a.608.608,0,0,0,0,1.216H21.456a.608.608,0,0,0,0-1.216Z"
                        transform="translate(-7.217 -453.847)"
                        fill="#9bc4f9"
                      ></path>
                      <path
                        id="Path_228"
                        data-name="Path 228"
                        d="M163.377,369.2h-1.872v.608a.608.608,0,0,1-.608.608h2.48a.608.608,0,0,0,0-1.216Zm-5.916,0a2.014,2.014,0,0,1,.52-1.347l.007-.008a1.724,1.724,0,0,0-.435-2.648.148.148,0,0,0-.222.128v1.283a.389.389,0,0,1-.389.389h-.479a.389.389,0,0,1-.389-.389v-1.283a.148.148,0,0,0-.222-.128,1.724,1.724,0,0,0-.435,2.648l.007.008a2.014,2.014,0,0,1,.52,1.347Z"
                        transform="translate(-149.138 -351.113)"
                        fill="#7fb2f9"
                      ></path>
                      <path
                        id="Path_229"
                        data-name="Path 229"
                        d="M105.61,53.568h-.21l0-.847a3.085,3.085,0,0,0-6.168.026l0,.6v.25h-.21a.562.562,0,0,0-.556.567l0,.626a.562.562,0,0,0,.561.563h.211a2.919,2.919,0,0,0,.982,2.141,3.13,3.13,0,0,0,4.221-.018,2.92,2.92,0,0,0,.964-2.149h.211a.562.562,0,0,0,.556-.567l0-.626a.562.562,0,0,0-.56-.563Z"
                        transform="translate(-94.755 -47.531)"
                        fill="#ffddce"
                      ></path>
                      <path
                        id="Path_230"
                        data-name="Path 230"
                        d="M182.542,58.017a.562.562,0,0,0-.561-.563h-.21l0-.847a3,3,0,0,0-2.14-2.864,2.962,2.962,0,0,1,.409,1.508l.01,3.96a2.92,2.92,0,0,1-.964,2.149,3.3,3.3,0,0,1-1.255.7,3.1,3.1,0,0,0,2.986-.7,2.92,2.92,0,0,0,.964-2.149h.211a.562.562,0,0,0,.556-.567Z"
                        transform="translate(-171.126 -51.417)"
                        fill="#ffcbbe"
                      ></path>
                      <path
                        id="Path_231"
                        data-name="Path 231"
                        d="M93.195,138.669V141h.619a.628.628,0,0,0,.628-.628V139.3a.628.628,0,0,0-.628-.628Zm-6.17,0V141h-.619a.628.628,0,0,1-.628-.628V139.3a.628.628,0,0,1,.628-.628Z"
                        transform="translate(-82.545 -133.142)"
                        fill="#9bc4f9"
                      ></path>
                      <path
                        id="Path_232"
                        data-name="Path 232"
                        d="M106.112,37.2h-.032a.318.318,0,0,1-.318-.318.941.941,0,0,0-.941-.941h-2.993a2.412,2.412,0,0,0-2.412,2.412v1.594a.55.55,0,0,0,.369.52l.594.207a.319.319,0,0,0,.424-.3V39.25a.984.984,0,0,1,.974-.994h.012a1.562,1.562,0,0,1,.485.075,2.756,2.756,0,0,0,.844.142h.214a2.755,2.755,0,0,0,.854-.142,1.563,1.563,0,0,1,.485-.075h.012a.984.984,0,0,1,.974.994v1.124a.319.319,0,0,0,.424.3l.594-.207a.55.55,0,0,0,.369-.52V38.142A.941.941,0,0,0,106.112,37.2Z"
                        transform="translate(-95.669 -34.287)"
                        fill="#756e78"
                      ></path>
                      <path
                        id="Path_233"
                        data-name="Path 233"
                        d="M213.657,37.2h-.032a.318.318,0,0,1-.318-.318.941.941,0,0,0-.941-.941h-1.194a2.94,2.94,0,0,1,.952,2.179v.137q.05,0,.1,0h.012a.984.984,0,0,1,.974.994v1.124a.319.319,0,0,0,.424.3l.594-.207a.55.55,0,0,0,.369-.52V38.142A.941.941,0,0,0,213.657,37.2Z"
                        transform="translate(-203.214 -34.287)"
                        fill="#665e66"
                      ></path>
                      <path
                        id="Path_234"
                        data-name="Path 234"
                        d="M226.7,221.05h-.709a.49.49,0,1,1,0-.98h.709a.49.49,0,0,1,.031,.98Z"
                        transform="translate(-216.999 -211.475)"
                        fill="#db636e"
                      ></path>
                      <path
                        id="Path_235"
                        data-name="Path 235"
                        d="M17.748,28.773H15.282a.283.283,0,0,0,0,.565h2.466a.283.283,0,1,0,0-.565Zm-3.867.565h.3a.283.283,0,1,0,0-.565h-.3a.283.283,0,0,0,0,.565Zm0,1.328h3.867a.283.283,0,1,0,0-.565H13.881a.283.283,0,0,0,0,.565ZM14.9,44.106a5.163,5.163,0,0,0-1.064-3.132l.052-.965A1.15,1.15,0,0,0,12.744,38.8H9.649a.539.539,0,0,1-.229-.44v-.789a3.2,3.2,0,0,0,1.064-1.085h.547a1.149,1.149,0,0,0,1.148-1.148V33.224a.911.911,0,0,0-.514-.82V30.922A1.225,1.225,0,0,0,10.442,29.7h-.032a.035.035,0,0,1-.035-.035,1.225,1.225,0,0,0-1.223-1.223H6.159a2.7,2.7,0,0,0-2.695,2.695V32.4a.911.911,0,0,0-.514.82V34.3a.912.912,0,0,0,.911.911h.365a3.174,3.174,0,0,0,1.056,2.036,3.877,3.877,0,0,0,.427.32v.792a.54.54,0,0,1-.23.44H2.386a1.15,1.15,0,0,0-1.149,1.213l.052.965A5.163,5.163,0,0,0,.226,44.106v1.065A.89.89,0,0,0,.89,46.653H14.239a.89.89,0,0,0,.664-1.483Zm-.565,0v.772a.894.894,0,0,0-.1-.006h-.611l.16-2.939a4.593,4.593,0,0,1,.55,2.173ZM11.585,33.086a.344.344,0,0,1,.029.138V34.3a.346.346,0,0,1-.346.346h-.336V33.577l.174-.061A.833.833,0,0,0,11.585,33.086ZM9.7,36.361H8.989a.207.207,0,1,1,0-.415H9.7a.207.207,0,1,1,0,.415Zm1.334-.444h-.286a3.327,3.327,0,0,0,.164-.709h.359a.906.906,0,0,0,.346-.068v.195A.583.583,0,0,1,11.032,35.917Zm-7-4.781a2.132,2.132,0,0,1,2.13-2.13H9.152a.659.659,0,0,1,.658.658.6.6,0,0,0,.6.6h.032a.659.659,0,0,1,.658.658V32.73a.268.268,0,0,1-.18.253l-.594.207a.036.036,0,0,1-.049-.035V32.032a1.311,1.311,0,0,0-1.84-1.189,3,3,0,0,1-1.749,0,1.312,1.312,0,0,0-1.84,1.188v1.124a.036.036,0,0,1-.049.035l-.594-.207a.268.268,0,0,1-.18-.253V31.136ZM3.515,34.3V33.224a.344.344,0,0,1,.029-.138.833.833,0,0,0,.479.431l.174.061v1.066H3.861a.346.346,0,0,1-.346-.346Zm1.252.584c-.009-.372,0-.766-.005-1.127l.052,0a.6.6,0,0,0,.6-.6V32.029c0-.459.41-.871,1.1-.649a3.558,3.558,0,0,0,2.1,0c.659-.212,1.1.161,1.1.65v1.124a.6.6,0,0,0,.654.6V34.9a2.788,2.788,0,0,1-.117.709A.77.77,0,0,0,9.7,35.38H8.989a.773.773,0,1,0,0,1.545h.359a2.893,2.893,0,0,1-1.768.631,2.772,2.772,0,0,1-2.812-2.675Zm1.506,3.475v-.495a3.445,3.445,0,0,0,1.3.26h.006a3.449,3.449,0,0,0,1.27-.258v.492a1.1,1.1,0,0,0,.092.44H6.182a1.1,1.1,0,0,0,.092-.44ZM1.342,41.933l.045.822a.283.283,0,0,0,.564-.031L1.8,39.979a.585.585,0,0,1,.584-.617H12.744a.585.585,0,0,1,.584.617l-.266,4.894H8.63A1.736,1.736,0,0,1,9.053,44l.008-.009a2.008,2.008,0,0,0-.506-3.082.431.431,0,0,0-.644.374v1.283a.107.107,0,0,1-.107.107H7.326a.107.107,0,0,1-.107-.107V41.28a.431.431,0,0,0-.644-.374,2.008,2.008,0,0,0-.506,3.083L6.076,44a1.736,1.736,0,0,1,.423.875H2.067l-.045-.836a.283.283,0,1,0-.564.031l.044.805H.89a.9.9,0,0,0-.1.006v-.772A4.594,4.594,0,0,1,1.342,41.933Zm5.729,2.939A2.3,2.3,0,0,0,6.5,43.619l-.007-.008a1.442,1.442,0,0,1,.164-2.077v1.028a.673.673,0,0,0,.672.672H7.8a.673.673,0,0,0,.672-.672V41.535a1.442,1.442,0,0,1,.163,2.077l-.006.007a2.3,2.3,0,0,0-.574,1.254Zm7.168,1.216H.89a.325.325,0,1,1,0-.65H14.239a.325.325,0,1,1,0,.65Z"
                        transform="translate(0 -27.068)"
                      ></path>
                    </g>
                  </svg>
                </span>
                Guide & Support
              </button>
              <ul className={styles.guide}>
                <li>Track your order</li>
                <li>Request for returns</li>
                <li>Members login</li>
                <li>FAQs</li>
                <li>
                  Emails <span className={styles.offline}>OFFLINE</span>
                </li>
                <li>
                  Text/Whatsapp<span className={styles.livenow}>LIVE NOW</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightTop}>
            <div className={styles.box}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_196"
                      data-name="Group 196"
                      width="12"
                      height="12"
                      viewBox="0 0 20.022 20.025"
                    >
                      <path
                        id="Path_59"
                        data-name="Path 59"
                        d="M19.121,1.869a.668.668,0,0,0-.945,0l-2.9,2.924-.514-.257a.668.668,0,0,0-.748.11V2a.668.668,0,0,0-.668-.668V.668A.668.668,0,0,0,12.683,0H6.675a.668.668,0,0,0-.668.668v.668A.668.668,0,0,0,5.34,2V4.839A3.034,3.034,0,0,0,3,3.671a3.084,3.084,0,0,0-3,3,3.084,3.084,0,0,0,3,3a3.034,3.034,0,0,0,2.34-1.16v4.783L1.869,16.754a.668.668,0,0,0,0,.935l2.153,2.129a.668.668,0,0,0,.945,0l.374-.374a.668.668,0,0,0,.668.581h.668a.668.668,0,0,0,.668-.668V17.449l1.335-1.335v3.244a.668.668,0,0,0,.668.668h.668a.668.668,0,0,0,.668-.668V14.111l1.335-1.335v6.582a.668.668,0,0,0,.668.668h.668a.668.668,0,0,0,.668-.668V10.774L17.065,7.73a.667.667,0,0,0,.123-.771l-.257-.514,2.9-2.9a.668.668,0,0,0,0-.941ZM13.35,19.358h-.668V12.109l.668-.668ZM9.345,9.3V2h.668V8.634ZM10.68,2.336h1.335v4.3L10.68,7.97ZM13.35,2V5.3l-.668.668V2Zm-.668-.668a.668.668,0,0,0-.574.334H10.587a.668.668,0,0,0-.574-.334V.668h2.67ZM6.675.668h2.67v.668a.668.668,0,0,0-.574.334H7.249a.668.668,0,0,0-.574-.334ZM6.675,2v9.959l-.668.668V2ZM1.151,8.057a2.386,2.386,0,0,1-.274-.451L3.935,4.549a2.386,2.386,0,0,1,.451.274Zm3.7-2.763a2.474,2.474,0,0,1,.274.447L2.069,8.8a2.473,2.473,0,0,1-.447-.274ZM3.191,4.339.668,6.862A2.376,2.376,0,0,1,3.191,4.339ZM2.814,9.011,5.34,6.485A2.376,2.376,0,0,1,2.814,9.011ZM7.343,2.336H8.678V9.963L7.343,11.3ZM6.675,19.358H6.008v-.574l.668-.668Zm3.338,0H9.345V15.446l.668-.668Zm-5.52,0c-.02-.033.284.28-2.153-2.129,7.419-7.4-10.967,10.937,12.129-12.1l.668.334,1.1,1.1.334.668C4.042,19.808,4.526,19.358,4.492,19.358ZM16.527,5.907,15.817,5.2l2.83-2.86.711.738Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </span>
                  Cricket
                </button>
                <div className={styles.mobileTabSelectorRowCapsule}>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeSport === "Cricket"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveSport("Cricket")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_196"
                      data-name="Group 196"
                      width="12"
                      height="12"
                      viewBox="0 0 20.022 20.025"
                    >
                      <path
                        d="M19.121,1.869a.668.668,0,0,0-.945,0l-2.9,2.924-.514-.257a.668.668,0,0,0-.748.11V2a.668.668,0,0,0-.668-.668V.668A.668.668,0,0,0,12.683,0H6.675a.668.668,0,0,0-.668.668v.668A.668.668,0,0,0,5.34,2V4.839A3.034,3.034,0,0,0,3,3.671a3.084,3.084,0,0,0-3,3,3.084,3.084,0,0,0,3,3a3.034,3.034,0,0,0,2.34-1.16v4.783L1.869,16.754a.668.668,0,0,0,0,.935l2.153,2.129a.668.668,0,0,0,.945,0l.374-.374a.668.668,0,0,0,.668.581h.668a.668.668,0,0,0,.668-.668V17.449l1.335-1.335v3.244a.668.668,0,0,0,.668.668h.668a.668.668,0,0,0,.668-.668V14.111l1.335-1.335v6.582a.668.668,0,0,0,.668.668h.668a.668.668,0,0,0,.668-.668V10.774L17.065,7.73a.667.667,0,0,0,.123-.771l-.257-.514,2.9-2.9a.668.668,0,0,0,0-.941ZM13.35,19.358h-.668V12.109l.668-.668ZM9.345,9.3V2h.668V8.634ZM10.68,2.336h1.335v4.3L10.68,7.97ZM13.35,2V5.3l-.668.668V2Zm-.668-.668a.668.668,0,0,0-.574.334H10.587a.668.668,0,0,0-.574-.334V.668h2.67ZM6.675.668h2.67v.668a.668.668,0,0,0-.574.334H7.249a.668.668,0,0,0-.574-.334ZM6.675,2v9.959l-.668.668V2ZM1.151,8.057a2.386,2.386,0,0,1-.274-.451L3.935,4.549a2.386,2.386,0,0,1,.451.274Zm3.7-2.763a2.474,2.474,0,0,1,.274.447L2.069,8.8a2.473,2.473,0,0,1-.447-.274ZM3.191,4.339.668,6.862A2.376,2.376,0,0,1,3.191,4.339ZM2.814,9.011,5.34,6.485A2.376,2.376,0,0,1,2.814,9.011ZM7.343,2.336H8.678V9.963L7.343,11.3ZM6.675,19.358H6.008v-.574l.668-.668Zm3.338,0H9.345V15.446l.668-.668Zm-5.52,0c-.02-.033.284.28-2.153-2.129,7.419-7.4-10.967,10.937,12.129-12.1l.668.334,1.1,1.1.334.668C4.042,19.808,4.526,19.358,4.492,19.358ZM16.527,5.907,15.817,5.2l2.83-2.86.711.738Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Cricket
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeSport === "Football"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveSport("Football")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 122.88 122.88"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M61.44,0c16.97,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44c0,16.97-6.88,32.33-18,43.44 c-11.12,11.12-26.48,18-43.44,18S29.11,116,18,104.88C6.88,93.77,0,78.41,0,61.44C0,44.47,6.88,29.11,18,18 C29.11,6.88,44.47,0,61.44,0L61.44,0z M76.85,117.08L76.73,117l6.89-23.09L69.41,78.15L52.66,78L39.38,94.62l6.66,22.32l-0.15,0.1 c4.95,1.38,10.16,2.12,15.55,2.12C66.78,119.16,71.95,118.44,76.85,117.08L76.85,117.08z M12.22,91.61l24.34,0.12L49.28,75.8 l-5.26-16.12l-21.42-9.3L3.78,64.08C4.23,74.14,7.26,83.53,12.22,91.61L12.22,91.61z M16.77,24.88l7.4,22.14l19.98,8.68 l15.44-11.97V20.94L40.51,7.63c-7.52,2.93-14.28,7.39-19.89,13C19.27,21.98,17.98,23.4,16.77,24.88L16.77,24.88z M81.7,7.37 L63.3,20.77V43.7L77.8,54.91l20.81-8.92l7.18-21.49c-1.12-1.35-2.3-2.64-3.54-3.88C96.48,14.85,89.49,10.29,81.7,7.37L81.7,7.37z M119.09,64.36l-0.02,0.01L99.09,49.82l-19.81,8.49l-6.08,18.03l13.73,15.23c0.06,0.06,0.09,0.13,0.11,0.21l23.6-0.11 C115.56,83.65,118.59,74.34,119.09,64.36L119.09,64.36z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                    Football
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeSport === "E-sports"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveSport("E-sports")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="12" x2="10" y2="12" />
                      <line x1="8" y1="10" x2="8" y2="14" />
                      <line x1="15" y1="13" x2="15.01" y2="13" />
                      <line x1="18" y1="11" x2="18.01" y2="11" />
                      <rect x="2" y="6" width="20" height="12" rx="3" />
                    </svg>
                    E-sports
                  </button>
                </div>
                <div className={styles.desktopOnlyList}>
                  <ul className={styles.text}>
                    <li>
                      <img
                        src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                        alt=""
                        height="35px"
                        width="30px"
                      />
                      Kolkata Knight Riders
                    </li>
                    <li>
                      <img
                        src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                        alt=""
                        height="25px"
                        width="20px"
                      />
                      Punjab Kings
                    </li>
                    <li>
                      <img
                        src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                        alt=""
                        height="25px"
                        width="20px"
                      />
                      Los Angeles Knight Riders
                    </li>
                  </ul>
                </div>
                <div className={styles.mobileOnlyList}>
                  <ul className={styles.text}>
                    {activeSport === "Cricket" && (
                      <>
                        <li>Kolkata Knight Riders</li>
                        <li>Punjab Kings</li>
                        <li>Los Angeles Knight Riders</li>
                      </>
                    )}
                    {activeSport === "Football" && (
                      <>
                        <li>Kolkata Knight Riders</li>
                        <li>Punjab Kings</li>
                        <li>Los Angeles Knight Riders</li>
                        <li>Team India Store</li>
                      </>
                    )}
                    {activeSport === "E-sports" && (
                      <>
                        <li>Kolkata Knight Riders</li>
                        <li>Punjab Kings</li>
                        <li>Los Angeles Knight Riders</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_577"
                      data-name="Group 577"
                      width="12.062"
                      height="12.062"
                      viewBox="0 0 12.062 12.062"
                    >
                      <path
                        id="Path_212"
                        data-name="Path 212"
                        d="M12.056.438a.5.5,0,0,0-.031-.124.014.014,0,0,1,0,0h0A.512.512,0,0,0,11.955.2l-.02-.024a.511.511,0,0,0-.1-.087l0,0a.5.5,0,0,0-.114-.054L11.692.02A.5.5,0,0,0,11.559,0H8.041a.5.5,0,0,0,0,1.005h2.3l-3,3a4.526,4.526,0,1,0,.711.711l3-3v2.3a.5.5,0,1,0,1.005,0V.5c0-.011,0-.021,0-.031s0-.023,0-.034ZM4.523,11.057A3.52,3.52,0,1,1,8.041,7.539,3.522,3.522,0,0,1,4.523,11.057Zm0,0"
                        fill="#000"
                      ></path>
                    </svg>
                  </span>
                  Men
                </button>
                <div className={styles.mobileTabSelectorRowCapsule}>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeGender === "Men" ? styles.mobileActiveCapsule : ""
                    }`}
                    onClick={() => setActiveGender("Men")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Group_577"
                      data-name="Group 577"
                      width="12.062"
                      height="12.062"
                      viewBox="0 0 12.062 12.062"
                    >
                      <path
                        d="M12.056.438a.5.5,0,0,0-.031-.124.014.014,0,0,1,0,0h0A.512.512,0,0,0,11.955.2l-.02-.024a.511.511,0,0,0-.1-.087l0,0a.5.5,0,0,0-.114-.054L11.692.02A.5.5,0,0,0,11.559,0H8.041a.5.5,0,0,0,0,1.005h2.3l-3,3a4.526,4.526,0,1,0,.711.711l3-3v2.3a.5.5,0,1,0,1.005,0V.5c0-.011,0-.021,0-.031s0-.023,0-.034ZM4.523,11.057A3.52,3.52,0,1,1,8.041,7.539,3.522,3.522,0,0,1,4.523,11.057Zm0,0"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Men
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeGender === "Women" ? styles.mobileActiveCapsule : ""
                    }`}
                    onClick={() => setActiveGender("Women")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="9" r="6" />
                      <line x1="12" y1="15" x2="12" y2="23" />
                      <line x1="8" y1="19" x2="16" y2="19" />
                    </svg>
                    Women
                  </button>
                </div>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>Activewear</button>
                <div className={styles.mobileTabSelectorRowCapsule}>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeWear === "Activewear"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveWear("Activewear")}
                  >
                    Activewear
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeWear === "Lifestyle"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveWear("Lifestyle")}
                  >
                    Lifestyle
                  </button>
                </div>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>

            <div className={styles.box} id={styles.desktopFootballBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 122.88 122.88"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M61.44,0c16.97,0,32.33,6.88,43.44,18c11.12,11.12,18,26.48,18,43.44c0,16.97-6.88,32.33-18,43.44 c-11.12,11.12-26.48,18-43.44,18S29.11,116,18,104.88C6.88,93.77,0,78.41,0,61.44C0,44.47,6.88,29.11,18,18 C29.11,6.88,44.47,0,61.44,0L61.44,0z M76.85,117.08L76.73,117l6.89-23.09L69.41,78.15L52.66,78L39.38,94.62l6.66,22.32l-0.15,0.1 c4.95,1.38,10.16,2.12,15.55,2.12C66.78,119.16,71.95,118.44,76.85,117.08L76.85,117.08z M12.22,91.61l24.34,0.12L49.28,75.8 l-5.26-16.12l-21.42-9.3L3.78,64.08C4.23,74.14,7.26,83.53,12.22,91.61L12.22,91.61z M16.77,24.88l7.4,22.14l19.98,8.68 l15.44-11.97V20.94L40.51,7.63c-7.52,2.93-14.28,7.39-19.89,13C19.27,21.98,17.98,23.4,16.77,24.88L16.77,24.88z M81.7,7.37 L63.3,20.77V43.7L77.8,54.91l20.81-8.92l7.18-21.49c-1.12-1.35-2.3-2.64-3.54-3.88C96.48,14.85,89.49,10.29,81.7,7.37L81.7,7.37z M119.09,64.36l-0.02,0.01L99.09,49.82l-19.81,8.49l-6.08,18.03l13.73,15.23c0.06,0.06,0.09,0.13,0.11,0.21l23.6-0.11 C115.56,83.65,118.59,74.34,119.09,64.36L119.09,64.36z"
                          fill="#000"
                        />
                      </g>
                    </svg>
                  </span>
                  Football
                </button>
                <ul className={styles.text}>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="35px"
                      width="30px"
                    />
                    Kolkata Knight Riders
                  </li>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="25px"
                      width="20px"
                    />
                    Punjab Kings
                  </li>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="25px"
                      width="20px"
                    />
                    Los Angeles Knight Riders
                  </li>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="25px"
                      width="20px"
                    />
                    Team India Store
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.box} id={styles.desktopWomenBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="9" r="6" />
                      <line x1="12" y1="15" x2="12" y2="23" />
                      <line x1="8" y1="19" x2="16" y2="19" />
                    </svg>
                  </span>
                  Women
                </button>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>

            <div className={styles.box} id={styles.desktopLifestyleBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>Lifestyle</button>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>

            <div className={styles.box} id={styles.desktopEsportsBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="6" y1="12" x2="10" y2="12" />
                      <line x1="8" y1="10" x2="8" y2="14" />
                      <line x1="15" y1="13" x2="15.01" y2="13" />
                      <line x1="18" y1="11" x2="18.01" y2="11" />
                      <rect x="2" y="6" width="20" height="12" rx="3" />
                    </svg>
                  </span>
                  E-Sports
                </button>
                <ul className={styles.text}>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="35px"
                      width="30px"
                    />
                    Kolkata Knight Riders
                  </li>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="25px"
                      width="20px"
                    />
                    Punjab Kings
                  </li>
                  <li>
                    <img
                      src="//six5six.in/cdn/shop/files/656-Client-Logos-01.png?v=1743060602"
                      alt=""
                      height="25px"
                      width="20px"
                    />
                    Los Angeles Knight Riders
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.rightBottom}>
            <div className={styles.bottomBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>Tops</button>
                <div className={styles.mobileTabSelectorRowCapsule}>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeType === "Tops" ? styles.mobileActiveCapsule : ""
                    }`}
                    onClick={() => setActiveType("Tops")}
                  >
                    Tops
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeType === "Bottoms" ? styles.mobileActiveCapsule : ""
                    }`}
                    onClick={() => setActiveType("Bottoms")}
                  >
                    Bottoms
                  </button>
                  <button
                    className={`${styles.mobileTabBtnCapsule} ${
                      activeType === "Accessories"
                        ? styles.mobileActiveCapsule
                        : ""
                    }`}
                    onClick={() => setActiveType("Accessories")}
                  >
                    Accessories
                  </button>
                </div>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>
            <div className={styles.bottomBox} id={styles.desktopBottomsBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>Bottoms</button>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>
            <div className={styles.bottomBox} id={styles.desktopAccessoriesBox}>
              <div className={styles.cricket}>
                <button className={styles.clogo}>Accessories</button>
                <ul className={styles.text2}>
                  <li>T-shirts & Tops</li>
                  <li>Hoodies</li>
                  <li>Shorts/Jorts</li>
                  <li>Polos</li>
                  <li>Jackets</li>
                  <li>Sweatshirts</li>
                  <li>Cargos & Trousers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
