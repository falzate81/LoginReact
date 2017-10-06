import React, {Component} from 'react';

export class SomeNestedComponent extends Component
{
    render()
    {
        return (
            <div style={{ background: '#a7ff59'}}>
                <h2>Nested component</h2>

                <p>Username: {this.props.username}</p>
            </div>
        );
    }
}