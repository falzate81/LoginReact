import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {View3} from '../view3/View3'
import {View4} from '../view4/View4'

export class View2 extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div style={{background: '#87ff68', padding: '10px'}}>
                <h1>Hello from view 2</h1>

                <ul>
                    <li>
                        <Link to="/view2/view3">
                            Rendering view 3
                        </Link>
                    </li>
                    <li>
                        <Link to="/view2/view4">
                            Render view 4
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/view2/view4" component={View4}/>
                    <Route component={View3}/>
                </Switch>
            </div>
        );
    }
}
