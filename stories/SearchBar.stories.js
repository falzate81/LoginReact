import React from 'react';
import {storiesOf, action, linkTo, addDecorator} from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

import {SearchBar} from '../src/core/components/searchBar/SearchBar';

storiesOf('SearchBar', module)
.add('Stage: Punto de partida y llegada', () => (
    <SearchBar
        topicNameClick={action('Click on topic name')}
        topicName={'Fotosíntesis'}
        totalMilestones={35}
        milestonesProgress={3}
        percentageProgress={3}
        topicState={'active'}
        completionPercentage={8}
        score={2}
        materialColor={'#53aa0f'}
    />
))