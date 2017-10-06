import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Isvg from 'react-inlinesvg';

var items = [

    {
        name: 'Home',
        code: 'home'
    }, {
        name: 'Agenda',
        code: 'calendar'
    }, {
        name: 'Mi Plan',
        code: 'myPlan'
    }, {
        name: 'Mis Trabajos',
        code: 'myWorks'
    }, {
        name: 'Indicadores',
        code: 'indicators'
    }, {
        name: 'Mis Grupos',
        code: 'myGroups'
    }, {
        name: 'Eduteca',
        code: 'eduteca'
    }, {
        name: 'Notificaciones',
        code: 'notifications'
    }, {
        name: 'Mi Ser+',
        code: 'miSer'
    }, {
        name: 'Ayuda',
        code: 'help'
    }
];

const styles = {
    ItemMenu: {
        width: 'calc(100% / ' + items.length + ')'
    }
}

export class MainMenu extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedCode: 'home'
        };
    }

    render()
    {
        return (
            <nav>
                <div className="container">
                    {items.map(u =>
                        {
                        return (
                            <Link key={u.code} to={u.code}>
                            <div
                                className={u.code === this.state.selectedCode ? 'item-menu active':'item-menu'}
                                style={styles.ItemMenu}
                                onClick={() => 
                                {
                                    {/*if(u.code == 'eduteca' || u.code == 'notifications' || u.code == 'miSer' || u.code == 'help')
                                    {
                                        alert('Esta ventana se encuentra en construcción, por favor disculpe las molestias');
                                    }*/}
                                    this.setState({selectedCode: u.code});
                                }}>
                                <Isvg src={require('../../../assets/images/mainMenu/' + u.code + '.svg')}/>
                                <p>
                                    {u.name}
                                </p>
                            </div>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        );
    }
}