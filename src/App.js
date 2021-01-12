import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <HeaderContainer/>

            <div className="app-wrapper-content">
                <Route path='/profile/:userId?' render={() => <ProfileContainer
                />}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                       />}/>
                <Route path='/news' component={News}/>
                <Route path='/media' render={() => <Media/>}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
};

export default App;
