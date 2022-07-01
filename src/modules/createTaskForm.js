import { elementCreator } from "./elementCreator";

export function createTaskForm() {

    const main = document.querySelector('main');
    const form = elementCreator('form', 'task-form');

    const lableTitle = elementCreator('label', undefined, 'Task:');
    lableTitle.setAttribute('for', 'task')

    const lableDesc = elementCreator('label', undefined, 'Description:');
    lableDesc.setAttribute('for', 'desc');

    const lableDueDate = elementCreator('label', undefined, 'Due date:');
    lableDueDate.setAttribute('for', 'due-date');

    const inputTitle = elementCreator('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'task');
    inputTitle.setAttribute('id', 'task');

    const textAreaDesc = elementCreator('textarea');
    textAreaDesc.setAttribute('name', 'desc');
    textAreaDesc.setAttribute('id', 'desc');
    textAreaDesc.setAttribute('cols', '30');
    textAreaDesc.setAttribute('rows', '10');

    const inputDate = elementCreator('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('name', 'due-date');
    inputDate.setAttribute('id', 'due-date');

    const fieldsetPriority = elementCreator('fieldset');
    const legendPriority = elementCreator('legend', undefined, 'Priority:');

    const lableLow = elementCreator('label', undefined, 'Low');
    lableLow.setAttribute('for', 'low');

    const lableMed = elementCreator('label', undefined, 'Medium');
    lableMed.setAttribute('for', 'med');

    const lableHigh = elementCreator('label', undefined, 'High');
    lableHigh.setAttribute('for', 'high');

    const inputLow = elementCreator('input');
    inputLow.setAttribute('type', 'radio');
    inputLow.setAttribute('id', 'low');
    inputLow.setAttribute('name', 'priority');
    inputLow.setAttribute('value', 'Low');

    const inputMed= elementCreator('input');
    inputMed.setAttribute('type', 'radio');
    inputMed.setAttribute('id', 'med');
    inputMed.setAttribute('name', 'priority');
    inputMed.setAttribute('value', 'Medium');

    const inputHigh = elementCreator('input');
    inputHigh.setAttribute('type', 'radio');
    inputHigh.setAttribute('id', 'high');
    inputHigh.setAttribute('name', 'priority');
    inputHigh.setAttribute('value', 'High');

    const submitBtn = elementCreator('button', 'task-form-submit', 'Submit');
    submitBtn.setAttribute('type', 'submit');

    form.append(lableTitle);
    form.append(inputTitle);
    form.append(lableDesc);
    form.append(textAreaDesc);
    form.append(lableDueDate);
    form.append(inputDate);
    fieldsetPriority.append(legendPriority);
    fieldsetPriority.append(lableLow);
    fieldsetPriority.append(inputLow);
    fieldsetPriority.append(lableMed);
    fieldsetPriority.append(inputMed);
    fieldsetPriority.append(lableHigh);
    fieldsetPriority.append(inputHigh);
    form.append(fieldsetPriority);
    form.append(submitBtn);

    main.append(form);

    return form;
}