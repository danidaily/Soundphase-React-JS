import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>

            <div className="app-wrapper-content">
                <Route exact path='/profile' render={() => <Profile store={props.store}
                />}/>
                <Route exact path='/dialogs'
                       render={() => <DialogsContainer store={props.store}
                       />}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/media' render={() => <Media/>}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/users' render={() => <UsersContainer state={props.store}/>}/>
            </div>
        </div>

    );
};

export default App;
