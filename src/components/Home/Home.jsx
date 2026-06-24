import Menu from "../Menu/Menu";
import NewArrivals from "../NewArrival/NewArrivals";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="overlay">
          <div className="header">
            <img src="/img/Layer 1.svg" alt="logo" className="logo" />
            <div className="icons">
              <div className="round-icon-wrapper">
                <img
                  src="img/Group 181.svg"
                  alt="icon"
                  className="round-icon"
                />
              </div>

              <svg
                className="bookmark-icon"
                viewBox="0 0 24 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0H4C1.79 0 0 1.79 0 4V29.5C0 30.98 1.66 31.85 2.87 31.01L11.29 25.11C11.71 24.82 12.29 24.82 12.71 25.11L21.13 31.01C22.34 31.85 24 30.98 24 29.5V4C24 1.79 22.21 0 20 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="content">
            <p>New Items Live Now</p>

            <h2>New Arrivals</h2>

            <div className="buttons">
              <button>Shop Now</button>
              <button>Woman's Exclusive</button>
            </div>
          </div>

          <div className="pagination-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active-pill"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <Menu />
      <NewArrivals />
    </>
  );
};

export default Home;
