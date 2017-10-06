import React, {Component} from 'react';
export class TitleSection extends Component
{
    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="title-section">
                        <div className="col-xs-12">
                            <h3>
                            <span style={{color:this.props.materia, margin: '30px 0 6px'}}>> </span>
                            {this.props.text}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}