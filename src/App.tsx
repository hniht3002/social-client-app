import "@/App.css"
import routes from "@/routes/routes"
import { Routes, Route, Redirect } from "react-router-dom";
import { registered } from "./data/GlobalState";

function App() {
  if(!registered) {
    return <Redirect/>
  } else {
    return (
      <div className="App">
          <Routes>
            {routes.map((route, index) => {
              let Element = route.component;
              let Layout = route.layout;
              return (
                  <Route key={index} path={route.path} element = {<Layout> {<Element/>} </Layout>}></Route>
              
                )
            })}
          </Routes>
      </div>
    );
  }
  
}

export default App;
