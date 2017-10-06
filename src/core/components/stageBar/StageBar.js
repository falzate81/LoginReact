import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';
import subjectHelper from '../../helpers/subjectHelper';
import {connect} from 'react-redux'
import commentActions from '../../actions/commentActions'

class StageBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value: 0,
        };
    }

    componentDidMount()
    {
        if (this.props.progressPercentage <= 10)
        {
            this.setState({value: 1});
        }
        else if (this.props.progressPercentage <= 40)
        {
            this.setState({value: 2});
        }
        else if (this.props.progressPercentage <= 80)
        {
            this.setState({value: 3});
        }
        else if (this.props.progressPercentage <= 100)
        {
            this.setState({value: 4});
        }
    }
    onClickStage(numberStage)
    {
        this.props.loadUnitComment(numberStage, this.props.id, 'df4s6dg5a+4ewt4ae/45t');
    }

    onClickComment()
    {
        this.props.loadUnitComment(null, this.props.id, 'df4s6dg5a+4ewt4ae/45t');
    }

    render()
    {
        return (
            <div className="stage-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-9 stage">
                            <svg className="img-responsive-SVG" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                 width="843.278px" height="70.312px" viewBox="-38.973 0.674 843.278 70.312"
                                 enableBackground="new -38.973 0.674 843.278 70.312" preserveAspectRatio="xMinYMin">
                                <path fill="#C9C9C9" d="M798.136,18.401l-0.053-0.324c-1.484-8.066-8.74-14.102-16.945-14.102c-8.204,0-15.463,6.036-16.945,14.102
                                        H578.338h-0.552h-32.559h-0.056c-1.474-8.022-8.497-14.102-16.945-14.102s-15.472,6.08-16.945,14.102H324.873h-32.249h-0.056
                                        c-1.474-8.022-8.497-14.102-16.945-14.102s-15.472,6.08-16.945,14.102H38.212h-0.056C36.682,10.055,29.658,3.975,21.21,3.975
                                        c-9.519,0-17.235,7.716-17.235,17.235c0,9.518,7.716,17.235,17.235,17.235c8.448,0,15.466-6.048,16.94-14.07l220.53-0.015
                                        c1.481,8.013,8.5,14.085,16.942,14.085c8.448,0,15.466-6.048,16.94-14.07l18.519-0.018l200.199-0.013
                                        c1.474,8.022,8.497,14.102,16.945,14.102c8.448,0,15.466-6.048,16.94-14.07l19.416-0.018l199.612-0.013
                                        c1.483,8.065,8.741,14.102,16.945,14.102c7.737,0,14.711-5.35,16.664-12.847c0.106-0.404,0.2-0.813,0.275-1.224l0-0.027
                                        C798.438,22.384,798.459,20.371,798.136,18.401z"/>
                                <g>
                                    <circle  fill={this.state.value<1?'#f8f8f8':subjectHelper.getSubjectColor(this.props.subjectCode)} cx="21.21" cy="21.21" r="11.511"/>
                                    <circle  fill={this.state.value<2?'#f8f8f8':subjectHelper.getSubjectColor(this.props.subjectCode)} cx="275.65" cy="21.21" r="11.511"/>
                                    <circle  fill={this.state.value<3?'#f8f8f8':subjectHelper.getSubjectColor(this.props.subjectCode)} cx="528.225" cy="21.21" r="11.511"/>
                                    <circle  fill={this.state.value<4?'#f8f8f8':subjectHelper.getSubjectColor(this.props.subjectCode)} cx="781.137" cy="21.21" r="11.511"/>
                                </g>

                                <g>
                                    <path fill="none" stroke={this.state.value<1?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M39.469,12.957C36.324,6.009,29.334,1.171,21.21,1.171c-11.067,0-20.039,8.972-20.039,20.039s8.972,20.039,20.039,20.039
                                        c8.124,0,15.114-4.837,18.259-11.786"/>

                                    <path fill="none" stroke={this.state.value<2?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M39.469,29.463"/>


                                    <path fill="none" stroke={this.state.value<2?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M39.469,12.957"/>

                                    <path fill="none" stroke={this.state.value<2?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M293.909,29.463c-3.146,6.949-10.135,11.786-18.259,11.786c-8.127,0-15.125-4.838-18.269-11.792v0.006H39.469"/>

                                    <path fill="none" stroke={this.state.value<2?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M255.611,21.21"/>

                                    <path fill="none" stroke={this.state.value<2?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M293.909,12.957c-3.146-6.949-10.135-11.786-18.259-11.786c-8.125,0-15.121,4.836-18.266,11.786v0H39.469"/>
                                    <line fill="none" x1="275.65" y1="1.171" x2="275.65" y2="43.838"/>

                                    <path fill="none" stroke={this.state.value<3?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M546.559,29.463c-3.146,6.949-10.135,11.786-18.259,11.786c-8.127,0-15.125-4.838-18.269-11.792v0.006H293.909"/>
                                    <path fill="none" stroke={this.state.value<3?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M546.559,12.957C543.414,6.009,536.424,1.171,528.3,1.171c-8.125,0-15.121,4.836-18.266,11.786v0H293.909"/>

                                    <path fill="none" stroke={this.state.value<4?'#fff':subjectHelper.getSubjectColor(this.props.subjectCode)} strokeWidth="0.9951" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                                        M546.559,12.957h216.314c3.13-6.985,10.115-11.781,18.264-11.781c11.064,0,20.034,8.969,20.034,20.034s-8.97,20.034-20.034,20.034
                                        c-8.136,0-15.127-4.815-18.264-11.781H546.559"/>
                                </g>

                                <g>
                                    <text transform="matrix(1 0 0 1 16.3336 28.1778)"  fill={this.state.value<1?'#b5b4b4':'#fff'} fontFamily="'Roboto-Bold'" fontSize="17" onClick={()=>this.onClickStage(1)} cursor="pointer">1</text>
                                    <text transform="matrix(1 0 0 1 270.7729 28.1778)" fill={this.state.value<2?'#b5b4b4':'#fff'} fontFamily="'Roboto-Bold'" fontSize="17" onClick={()=>this.onClickStage(2)} cursor="pointer">2</text>
                                    <text transform="matrix(1 0 0 1 523.3481 28.1778)" fill={this.state.value<3?'#b5b4b4':'#fff'} fontFamily="'Roboto-Bold'" fontSize="17" onClick={()=>this.onClickStage(3)} cursor="pointer">3</text>
                                    <text transform="matrix(1 0 0 1 775.4479 28.1778)" fill={this.state.value<4?'#b5b4b4':'#fff'} fontFamily="'Roboto-Bold'" fontSize="17" onClick={()=>this.onClickStage(4)} cursor="pointer">4</text>
                                </g>

                                <g>
                                    <text transform="matrix(1, 0, 0, 1, 20.0622, 66.6498)"  textAnchor="middle" fill={this.state.value<1?'#B2B2B2':subjectHelper.getSubjectColor(this.props.subjectCode)} style={{fontWeight:this.state.value<1?500: 700,fontSize:this.state.value<1?12: 16}}>
                                        Punto de Partida
                                    </text>
                                    <text transform="matrix(1 0 0 1 274.734 66.6493)"  textAnchor="middle" fill={this.state.value<2?'#B2B2B2':subjectHelper.getSubjectColor(this.props.subjectCode)} style={{fontWeight:this.state.value<2?500: 700,fontSize:this.state.value<2?12: 16}}>
                                        Investigación
                                    </text>
                                    <text transform="matrix(1 0 0 1 527.763 66.6498)"  textAnchor="middle" fill={this.state.value<3?'#B2B2B2':subjectHelper.getSubjectColor(this.props.subjectCode)} style={{fontWeight:this.state.value<3?500: 700,fontSize:this.state.value<3?12: 16}}>
                                        Desarrollo de  la Habilidad
                                    </text>
                                    <text transform="matrix(1 0 0 1 781.969 66.6498)"  textAnchor="middle" fill={this.state.value<4?'#B2B2B2':subjectHelper.getSubjectColor(this.props.subjectCode)} style={{fontWeight:this.state.value<4?500: 700,fontSize:this.state.value<4?12: 16}}>
                                        Relación
                                    </text>
                                </g>
                            </svg>
                        </div>
                        <div className="col-xs-3 comments" onClick={() => this.onClickComment()}>
                            <svg className="img-responsive-SVG" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px" width="37.993px" height="32.917px" viewBox="0 0 37.993 32.917" enableBackground="new 0 0 37.993 32.917"
                                 preserveAspectRatio="xMinYMin">
                                <path fill="#53AA0F" d="M19.005,0C8.509,0,0,6.68,0,14.92c0,3.911,1.907,7.463,5.034,10.127c-0.119,2.595-0.661,6.083-2.558,7.871
                                c3.634,0,7.345-2.385,9.543-4.108c2.161,0.675,4.519,1.048,6.986,1.048c10.479,0,18.987-6.693,18.987-14.937
                                C37.993,6.68,29.484,0,19.005,0z M9.508,18.342c-1.553,0-2.812-1.259-2.812-2.812s1.259-2.812,2.812-2.812s2.812,1.259,2.812,2.812
                                S11.061,18.342,9.508,18.342z M19.091,18.342c-1.553,0-2.812-1.259-2.812-2.812s1.259-2.812,2.812-2.812s2.812,1.259,2.812,2.812
                                S20.645,18.342,19.091,18.342z M28.674,18.342c-1.553,0-2.812-1.259-2.812-2.812s1.259-2.812,2.812-2.812
                                c1.553,0,2.812,1.259,2.812,2.812S30.228,18.342,28.674,18.342z"/>
                            </svg>
                            <p>
                                Comentarios Generales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        loadUnitComment: (stageId, unitPlanSubjectId, token) =>
        {
            dispatch(commentActions.fetchComment(stageId, unitPlanSubjectId, token))
        },
    };
};

export default connect(null, mapDispatchToProps)(StageBar);