import React from 'react';
import {storiesOf} from '@kadira/storybook';

import {Welcome} from '../.storybook/welcome';

storiesOf('Welcome', module)
.add('To Storybook', () => (
    <Welcome/>
));
