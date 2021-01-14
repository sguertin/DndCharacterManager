import BindableElement from './bindable.js';
import './AbilityScore.js';
import './characterInformation.js';

/**
 * The Root Element of the application
 *
 * @export
 * @class RootElement
 *
 * @extends {BindableElement}
 */
export default class RootElement extends BindableElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            
            <div id="Portrait"></div><character-information></character-information>
            
        `;
    }
}
