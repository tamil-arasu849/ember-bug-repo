import Component from '@ember/component';
import { action, setProperties } from "@ember/object";
import classic from 'ember-classic-decorator';

@classic
export default class ExampleComponent extends Component {
	showChild = true;

	@action
	toggleChild() {
		setProperties(this, { showChild: !this.showChild });
	}
}
