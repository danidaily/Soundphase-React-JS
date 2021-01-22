import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import withRouter from "react-router-dom/es/withRouter";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

//контейнерный компонент для профиля
class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        //если нет userID, то загружаем второго пользователя
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}//получаем пропсы которые пришли
                //и добавить их в компонент
            />
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

/*//контейнерная компонента для ProfileContainer, содержащая редирект
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/


/*
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
connect(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);*/
