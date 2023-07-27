import logo from "./assets/logo.svg";
import arrow from "./assets/arrow.svg";
import bigArrow from "./assets/big-arrow.svg";

import "./App.css";

function App() {
  return (
    <>
      <nav id="nav" className="flex">
        <img src={logo} width={235} />
        <a
          href="/"
          className="cta flex items-center text-[#4bbd7b] text-[19px] font-semibold ml-auto"
        >
          Pitch to us
          <div className="arrow-box ml-[10px] relative top-[1px]">
            <img src={arrow} width={8} />
            <img
              src={arrow}
              width={8}
              className="hidden-arrow absolute left-0 top-0 transition-all duration-300"
            />
          </div>
        </a>
      </nav>
      <main className="h-screen w-screen">
        <div
          id="arrow-container"
          className="h-screen w-screen overflow-hidden absolute top-0 left-0 flex justify-center items-center -z-10"
        >
          <div>
            {Array(7)
              .fill("")
              .map((_, idx) => (
                <img
                  key={idx}
                  src={bigArrow}
                  className="big-arrow -rotate-45 mb-16"
                  width={300}
                />
              ))}
          </div>
        </div>

        <div className="h-full w-full flex place-items-center justify-center text-center text-[90px] uppercase font-medium leading-[90px] max-w-5xl mx-auto">
          <h1 className="text-white tracking-wide" id="main-text">
            Growing seeds <br /> into forests
          </h1>
        </div>

        <div className="absolute bottom-[80px] right-0 max-w-[445px] mx-[80px]">
          <p
            id="sub-text"
            className="text-[21px] leading-[34px] text-white font-medium"
          >
            We are a group of entrepreneurs who support startups to grow and
            expand globally.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
