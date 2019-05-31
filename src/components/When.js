// @flow

import * as React from "react";

type Props = {
  children: React.Node,
  is: boolean
};

const When = ({ is, children }: Props) => (is ? children : null);

export default When;
