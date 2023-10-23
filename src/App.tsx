import "@/App.css";
import routes from "@/routes/routes";
import { Routes, Route, Navigate,redirect } from "react-router-dom";
function App() { 

    return (
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            let Element = route.component;
            let Layout = route.layout;
            return (
              <Route key={index} path={route.path} element={ <Layout>{<Element/>}</Layout>}></Route>
            );
          })}
        </Routes>
      </div>
    );
  }


export default App;
