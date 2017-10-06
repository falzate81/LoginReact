import React, {Component} from 'react';

export class SearchBar extends Component
{
    render()
    {
        return (
            <div className="search-bar"> 
                <div className="container">
                    <div className="col-xs-3">
                        <img  src={require('../../../assets/images/logos/logo.png')} className="img-responsive logo" alt=""/>
                    </div>
                    <div className="col-xs-5 col-xs-offset-4">
                        <div className="language-container">
                                <p className="active icon-language">
                                    ESP
                                </p>
                                <p className="icon-language">
                                    ING
                                </p>
                        </div>
                        <form className="search-form">
                            <input type="search" className="search-field" placeholder="Buscar"/>
                            <button className="search-submit"><i className="material-icons">search</i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}