import {render, screen} from '@testing-library/svelte'
import {describe, test, vi} from "vitest";
import Form from '../lib/Form.svelte'
import type {InputField} from "../lib/types/inputField";

describe('Form', ()=> {

     beforeEach(() => {
       vi.useFakeTimers()
     })

    test('second field should be displayed', () => {
        const inputFields: Array<InputField> = [{
            label: 'Field 1',
            id: 'field1',
            type: 'string',
            value: undefined
        }, {
            label: 'Field 2',
            id: 'field2',
            type: 'string',
            value: undefined
        }];
        render(Form, {inputFields});
        vi.advanceTimersByTime(2000)
            const heading = screen.getByTestId('field1');
            console.log('heading', heading);
        // const inputField1BeforeValueInField1 = screen.getByText(inputFields[0].label);
        // const inputField2BeforeValueInField1 = screen.getByTestId(inputFields[2].id);

        inputFields[1].value = 'value';

    })

     afterEach(() => {
       vi.useRealTimers()
     })

})

