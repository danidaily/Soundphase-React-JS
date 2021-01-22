import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer

}); /*Соединяем редьюсеры в один объект*/

//applyMiddleWare - применить thunk mw
let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); //создаем store, используя
//функцию редакса createStore
//и передаем туда скомбинированные редьюсеры
window.store = store;
export default store;

