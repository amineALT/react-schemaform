﻿import * as React from "react";
import { UpFormControl } from "../UpForm/UpFormControl";
import { UpNumber } from "@up-group-ui/react-controls";
import { style } from "typestyle";

export default class NumberField extends UpFormControl<number> {
  constructor(p, c) {
    super(p, c);
  }

  renderField() {
    const { additionalProps: { hideButtons, objectStyles } = {} } = this.props;

    return (
      <UpNumber
        className={objectStyles && style(objectStyles)}
        name={this.props.name}
        value={this.state.value}
        showError={this.props.showError}
        isRequired={this.props.isRequired}
        onChange={this.handleChangeEventGlobal}
        max={this.props.schema.maximum}
        min={this.props.schema.minimum}
        floatingLabel={this.props.floatingLabel}
        hideButtons={hideButtons}
      />
    );
  }
}
