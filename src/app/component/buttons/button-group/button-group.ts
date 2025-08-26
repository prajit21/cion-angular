import { Component } from '@angular/core';

import { BasicButton } from './basic-button/basic-button';
import { CheckBoxButtonGroup } from './check-box-button-group/check-box-button-group';
import { EdgesButtonGroup } from './edges-button-group/edges-button-group';
import { FlatButtonGroup } from './flat-button-group/flat-button-group';
import { LargeButtonGroup } from './large-button-group/large-button-group';
import { LargeEdgesGroup } from './large-edges-group/large-edges-group';
import { Nesting } from './nesting/nesting';
import { OutlineButtonGroup } from './outline-button-group/outline-button-group';
import { OutlineCustomButtonGroup } from './outline-custom-button-group/outline-custom-button-group';
import { OutlineCustomButtonGroup2 } from './outline-custom-button-group2/outline-custom-button-group2';
import { OutlineEdgeButton } from './outline-edge-button/outline-edge-button';
import { OutlineFlatButton } from './outline-flat-button/outline-flat-button';
import { RadioButtonGroup } from './radio-button-group/radio-button-group';
import { Vertical } from './vertical/vertical';

@Component({
  selector: 'app-button-group',
  imports: [
    BasicButton,
    EdgesButtonGroup,
    FlatButtonGroup,
    LargeButtonGroup,
    LargeEdgesGroup,
    OutlineCustomButtonGroup,
    OutlineCustomButtonGroup2,
    OutlineButtonGroup,
    OutlineEdgeButton,
    RadioButtonGroup,
    CheckBoxButtonGroup,
    OutlineFlatButton,
    Nesting,
    Vertical,
  ],
  templateUrl: './button-group.html',
  styleUrls: ['./button-group.scss'],
})
export class ButtonGroup {}
