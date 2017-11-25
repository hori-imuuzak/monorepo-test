import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Button,
  Text,
} from '../web/components';

storiesOf('Button', module)
  .add('with text', () => <Button>Click me</Button>)

storiesOf('Text', module)
  .add('hello', () => <Text>Hello</Text>)
  .add('button hello', () => <Button><Text>Hello</Text></Button>)
