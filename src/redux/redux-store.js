import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
}); /*Соединяем редьюсеры в один объект*/


let store = createStore(reducers); //создаем store, используя
                                   //функцию редакса createStore
                                   //и передаем туда скомбинированные редьюсеры
window.store = store;
export default store;

