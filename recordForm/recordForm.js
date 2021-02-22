import { LightningElement, track, api} from 'lwc';

export default class RecordForm extends LightningElement {
    @api recordId
    @api sections
    @api headerName
    @api objectName
    @track editMode = false
    get allsections() {
        try {
        const all = []
        this.sections.forEach(section => {
            all.push(section.id)
        })
        return all
        } catch (e) {
            console.log(e)
        }
    }

    onLoad() {
        console.log(this.sections)
    }

    handleSuccess() {

    }

    // rerenderedCallBack
    renderedCallback() {
        // make section header has a gray background color and a porper height & padding
        const style = document.createElement('style');
        style.innerText = `.slds-accordion__summary-action {
        background: rgb(238, 241, 246);
        height: 2rem;
        padding: 0 0 0 0.5rem;
    }`
        // make output-field has a border-bottom line (same as standard compoent)
        this.template.querySelector('.text') && this.template.querySelector('.text').appendChild(style);
        const style_output = document.createElement('style');
        style_output.innerText = `
        .field-output > lightning-output-field > .slds-form-element__control{
            border-bottom: 1px solid rgb(221, 219, 218)
    }
    }`
        // make section part without border-top line.
        this.template.querySelector('lightning-accordion') && this.template.querySelector('lightning-accordion').appendChild(style_output);
        const style_topline = document.createElement('style');
        style_topline.innerText = `.slds-accordion__list-item {
        border-top: none;
    }`
        this.template.querySelector('lightning-accordion') && this.template.querySelector('lightning-accordion').appendChild(style_topline);
    }
}