import Controller from '@ember/controller';
import { action, setProperties } from "@ember/object";

export default class ApplicationController extends Controller {
	data = 0;

	@action
	incrementData() {
		setProperties(this, { data: this.data + 1 });
	}

	@action
	decrementData() {
		setProperties(this, { data: this.data - 1 });
	}
}
