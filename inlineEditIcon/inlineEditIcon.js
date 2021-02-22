import { LightningElement,api } from 'lwc';

export default class InlineEditIcon extends LightningElement {
    @api show
    editMode() {
        var cE = new CustomEvent('edit')
        this.dispatchEvent(cE)
    }
}