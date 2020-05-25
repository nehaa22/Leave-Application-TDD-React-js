import React from 'react';
import {render} from '@testing-library/react';

import LeaveApplication from './leave';

describe("The Leave Application form ",() =>{
    test('render the empty leave form',() =>{
        const {getByText,getByLabelText } = render(<LeaveApplication/>);
    });
});