/**
 * Created by Giovanni Correa on 23/8/2017.
 */
import React from 'react';
import {storiesOf, action, linkTo, addDecorator} from '@kadira/storybook';


import {Progess} from '../src/core/components/learningPlan/Progess';


storiesOf('Progress', module)
    .add('progess', () => (
        <Progess
            actionOneClick={action('Action 1')}
            actionTwoClick={action('action 2')}>
        </Progess>
    ));
