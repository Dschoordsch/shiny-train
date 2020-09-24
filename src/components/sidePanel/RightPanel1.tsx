import React from 'react';

import { SidePanelContainer } from './SidePanelContainer';

interface Props {
  open: boolean;
}

export const RightPanel1 = (props: Props) => {
  return (
    <SidePanelContainer open={props.open}>
      RightPanel1
    </SidePanelContainer>
  );
};
