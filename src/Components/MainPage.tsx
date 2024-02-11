// import "../Styles/MainPage.css";
import Header from './Header'
import Home from "./Main Page/Home";
import Info from "./Main Page/Info";
import Team from "./Main Page/Team";

function MainPage() {

  return (
    <> 
      <Header/>
      <div id="home"/>
      <Home/>
      <div id="info"/>
      <Info/>
      <div id="team"/>
      <Team/>
    </>
  )
}
export default MainPage;