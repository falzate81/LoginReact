import React from 'react';
import {storiesOf, action, linkTo, addDecorator} from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';

import {@COMPONENT@} from '../src/core/components/@COMPONENT_LW@/@COMPONENT@';
import @COMPONENT@Readme from '../src/core/components/@COMPONENT_LW@/readme.md';

storiesOf('@COMPONENT@', module)
.addDecorator(withReadme(@COMPONENT@Readme))
.add('template', () => (
    <@COMPONENT@/>
));