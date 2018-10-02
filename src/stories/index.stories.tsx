import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

import { NickComponent } from '../components/NickComponent';
import { FAB } from '../components/mdcButton';
import { Inputs_Select } from '../components/mdcSelect';
import { Inputs_Checkbox } from '../components/mdcCheckbox';
import { Card } from '../components/mdcCard';

storiesOf('FramerX components', module)
  .add('nickComponent', (() => <NickComponent text={'Hi there.'} viewCount={10} />))
  .add('FAB', (() => <FAB></FAB>))
  .add('Material Select', (() => <Inputs_Select></Inputs_Select>))
  .add('Material Checkbox', (() => <Inputs_Checkbox></Inputs_Checkbox>))
  .add('Material Card', (() => <Card action1={' '} action2={' '}></Card>))
