import React, {Component} from 'react'
import {connect} from 'react-redux'
import sessionActions from '../../../actions/sessionActions'
import {Footer} from "../footer/Footer";
import {HeaderLogin} from "../../headerLogin/HeaderLogin";
import PropTypes from 'prop-types';
import {loginSchema} from '../../../helpers/validationSchema';

import {BrowserRouter as Router, IndexRoute, Route, Link, Switch, Redirect} from 'react-router-dom'
import history from '../../../../history'
import Joi from 'joi-browser'

require('core-js/fn/map');

/*import { browserHistory } from './react-router'*/

const styles = {
    formlogin: {
        "backgroundColor": "#EDEDED",
        "paddingTop": "10px",
        "paddingBottom": "20px",
        "paddingLeft": "20px",
        "paddingRight": "20px",
        "borderRadius": "15px",
        "borderColor": "#d2d2d2",
        "borderWidth": "5px",
        "boxShadow":"0 1px 0 #cfcfcf",
    },
    formcontrol: {
        "borderRadius": "10px",
    },
    wrapper: {
        "textAlign": "center",
    },
    mess: {
        "color": "red",
    },
}

let userError = 'Ingrese un nombre de usuario';
let passError = 'Ingrese una contraseña';

class Login extends Component
{
    static contextTypes = {
        router: PropTypes.object,
    };

    constructor(props)
    {
        super(props);
        this.state = {
            username: '',
            password: '',
            requiredCamps: null,
            redirectTo: '',
            userMessage: '',
            passMessage: ''
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    validateInfo()
    {
        const {error, value} = Joi.validate({username: this.state.username, password: this.state.password}, loginSchema);

        if (error === null)
        {
            return true;
        }
        else
        {
            if(value.username === '')
            {
                this.setState({userMessage: userError});
            }

            if(value.password === '')
            {
                this.setState({passMessage: passError});
            }

            return false
        }
    }
    componentDidMount (){
        debugger;
        if (this.props.redirecter)
        {
            history.push('/home');
            {/*<Redirect to={{pathName = '/home', state}} />*/}
        }
    }

    handleClick(e){
        e.preventDefault();
        let validate = this.validateInfo()

        if(validate)
        {
            this.props.login(this.state.username, this.state.password)
        }
    }

    onUserChange = (event) =>
    {
        this.setState({userMessage: ''});
        this.setState({username: event.target.value});
    };

    onPasswordChange = (event) =>
    {
        this.setState({passMessage: ''});
        this.setState({password: event.target.value});
    };

    goToHome()
    {
        if (this.props.redirecter)
        {
            /*history.push('/home');*/
            {/*<Redirect to={{pathName = '/home', state}} />*/}
        }
    }

    render()
    {

        return (
            <div>
                {this.goToHome()}
                <HeaderLogin/>
                <div style={{ marginLeft: '300px', padding: '100px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-5 col-md-3">
                                <form style={styles.formlogin} onSubmit={this.handleClick}>
                                    {this.props.errorMessage ? <h5>{this.props.errorMessage}</h5> : null}


                                    <input style={styles.formcontrol} type="text" className="form-control input-sm chat-input" placeholder='Usuario' onChange={this.onUserChange}/><br/>
                                    {this.state.userMessage ? <span style={styles.mess}>{this.state.userMessage}</span> : null}
                                    <br/>

                                    <input style={styles.formcontrol} type="password" className="form-control input-sm chat-input" placeholder='Clave' onChange={this.onPasswordChange}/><br/>
                                    {this.state.passMessage ? <span style={styles.mess}>{this.state.passMessage}</span> : null}
                                    <br/>
                                    <div style={styles.wrapper}>
                                    <span className="group-btn">
                                        <button type="submit" className="btn btn-primary btn-md" value="Submit" >Login</button>
                                    </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        name: state.session.user,
        loggedInResp: state.session.loggedIn,
        errorMessage: state.session.errorMessage,
        redirecter: state.session.shouldRedirect
    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        login: (user, pass) =>
        {
            dispatch(sessionActions.login(user, pass))
        },
        logout: () =>
        {
            dispatch(sessionActions.logout())
        },
        loadAllPosts: () =>
        {
            dispatch(postsActions.fetchAll())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);