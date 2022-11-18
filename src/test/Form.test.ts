import {render, RenderResult} from '@testing-library/svelte'
import {describe, test, vi, beforeEach, afterEach, expect} from "vitest";
import Form from '../lib/Form.svelte'
import type {InputField} from "../lib/types/inputField";
import type {
    QueryByBoundAttribute
} from "@testing-library/dom/types/queries";

describe('Form', () => {
    beforeEach(()=>{
        vi.useFakeTimers();
    });

    afterEach(()=>{
        vi.useRealTimers();
    });

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
        const form : RenderResult<Form>= render(Form, {props:{inputFields}});
        const inputField1: ReturnType<QueryByBoundAttribute> = form.queryByTestId(inputFields[0].id);
        const inputField2: ReturnType<QueryByBoundAttribute> = form.queryByTestId(inputFields[1].id);
        expect(inputField1).not.toBeNull();
        expect(inputField2).toBeNull();
        // const inputField1HtmlElement: ReturnType<GetByBoundAttribute> = form.getByTestId(inputFields[0].id);
        // fireEvent.input(inputField1HtmlElement, {target: {value: 'a'}})
        //
        // const inputField2AfterValueChange: ReturnType<QueryByBoundAttribute> = form.queryByTestId(inputFields[1].id);
        // expect(inputField2AfterValueChange).not.toBeNull();
    })

})

