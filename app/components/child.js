import Component from '@ember/component';
import classic from 'ember-classic-decorator';

@classic
export default class ChildComponent extends Component {
	didInsertElement() {
		super.didInsertElement(...arguments);
		this.incrementData();
	}

	willDestroyElement() {
		super.willDestroyElement();
		this.decrementData();
	}
}
