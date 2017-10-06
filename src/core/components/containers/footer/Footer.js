import React, {Component} from 'react';
export class Footer extends Component
{
    render()
    {
        return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <img src={require('../../../../assets/images/logos/logoFooter.png')} className="img-responsive logo-footer" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <h4>
                            QINO V.14.16.0 © Copyright
                        </h4>
                        <h4>
                            Learning One to One {(new Date().getFullYear())} Todos los derechos reservados .
                        </h4>
                    </div>
                    <div className="col-xs-3 col-xs-offset-2">
                        <h4>
                            Políticas de Privacidad
                        </h4>
                        <h4>
                            Términos y Condiciones
                        </h4>
                    </div>
                    <div className="col-xs-3">
                        <svg className="img-responsive-SVG" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50.994px" height="21.873px"
                            viewBox="0 0 50.994 21.873" enableBackground="new 0 0 50.994 21.873"  preserveAspectRatio="xMinYMin">
                            <path fill="#FF8A00" d="M11.381,0.004L8.544,0C5.358,0,3.298,2.113,3.298,5.383v2.482H0.445C0.2,7.865,0,8.064,0,8.311v3.597
                                c0,0.245,0.2,0.445,0.445,0.445h2.852v9.075c0,0.245,0.2,0.445,0.447,0.445h3.72c0.247,0,0.447-0.2,0.447-0.445v-9.075h3.335
                                c0.247,0,0.446-0.2,0.446-0.445l0.002-3.597c0-0.118-0.048-0.231-0.131-0.315c-0.083-0.083-0.197-0.13-0.315-0.13H7.911V5.761
                                c0-1.011,0.241-1.525,1.558-1.525l1.911-0.001c0.247,0,0.445-0.2,0.445-0.445V0.451C11.825,0.204,11.627,0.005,11.381,0.004
                                L11.381,0.004z M11.381,0.004" />
                            <path fill="#FF8A00" d="M48.436,16.055h-5.053c-0.702,0-1.3-0.245-1.791-0.739c-0.494-0.494-0.737-1.092-0.737-1.798V11.72h7.201
                                c0.649,0,1.209-0.233,1.673-0.697c0.465-0.468,0.698-1.026,0.698-1.677c0-0.652-0.233-1.21-0.699-1.675
                                c-0.466-0.464-1.028-0.698-1.68-0.698h-7.193V3.258c0-0.703-0.251-1.306-0.749-1.807c-0.495-0.502-1.095-0.754-1.791-0.754
                                c-0.717,0-1.326,0.248-1.822,0.74c-0.497,0.492-0.746,1.1-0.746,1.823v10.26c0,2.111,0.746,3.913,2.239,5.41
                                c1.493,1.499,3.294,2.247,5.4,2.247h5.051c0.702,0,1.304-0.252,1.806-0.754c0.501-0.5,0.751-1.103,0.751-1.806
                                c0-0.702-0.25-1.304-0.751-1.807C49.742,16.309,49.139,16.055,48.436,16.055L48.436,16.055z M48.436,16.055"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}