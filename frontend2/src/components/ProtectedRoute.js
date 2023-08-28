import Login from "../Dashboard/Login/Login";
//import SignIn from "./pages/SignIn";
import { Route } from "react-router-dom";
function ProtectedRoute(props)
{
    var isUserLoggedIn = 
    window.sessionStorage.getItem("isUserLoggedIn")

 
    if(isUserLoggedIn != null && 
       isUserLoggedIn!=='undefined' && isUserLoggedIn==="true")
    {
        return <Route exact path={props.path} 
        component={props.component}/>;
    }
    else
    {
        return <Login/>
    }
}

export default ProtectedRoute