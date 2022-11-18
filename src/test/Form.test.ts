import {render, screen} from '@testing-library/svelte'
import {describe,test} from "vitest";
import Form from '../lib/Form.svelte'
import type {InputField} from "../lib/types/inputField";

describe('Form', ()=> {
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
        const inputField2BeforeValueInField1 = screen.getByTestId(inputFields[2].id);
        ex
        inputFields[1].value = 'value';

    })
})

