import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Default from "./components/Default";

function App() {
  const pages = [
    {
      Data: {
        Description: "Home Description.",
        title: "Home Title",
        keyword: "Keyword",
      },
      PageName: "Home",
    },
    {
      Data: {
        Description: "About Description",
        title: "About Title",
        keyword: "Keyword",
      },
      PageName: "About",
    },
    {
      Data: {
        Description: "Service Description.",
        title: "Service Title",
        keyword: "Keyword",
      },
      PageName: "Service",
    },
    {
      Data: {
        Description: "Contact Description",
        title: "Contact title",
        keyword: "Keyword",
      },
      PageName: "Contact",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Default />}></Route>
        {pages.map((page, index) => (
          <Route
            key={index}
            path={`/${page.PageName.toLowerCase()}`}
            element={<DynamicComponent pageData={page} />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Default />}></Route>
    //     <Route
    //       exact
    //       path="/home"
    //       element={<Home pageData={pages[0]} />}
    //     ></Route>
    //     <Route
    //       exact
    //       path="/about"
    //       element={<About pageData={pages[1]} />}
    //     ></Route>
    //     <Route
    //       exact
    //       path="/service"
    //       element={<Service pageData={pages[2]} />}
    //     ></Route>
    //     <Route
    //       exact
    //       path="/contact"
    //       element={<Contact pageData={pages[3]} />}
    //     ></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

function DynamicComponent({ pageData }) {
  // Implement the logic to render the component based on pageData
  switch (pageData.PageName) {
    case "Home":
      return <Home pageData={pageData} />;
    case "About":
      return <About pageData={pageData} />;
    case "Service":
      return <Service pageData={pageData} />;
    case "Contact":
      return <Contact pageData={pageData} />;
    default:
      return <Default />;
  }
}

export default App;
