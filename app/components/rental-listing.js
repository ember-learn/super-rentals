import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class RentalListingComponent extends Component {
  @tracked isWide = false;

  @action
  toggleImageSize() {
    this.isWide = !this.isWide;
  }
}
