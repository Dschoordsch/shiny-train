import React from 'react';
import { SidePanelContainer } from './SidePanelContainer';

interface Props {
  open: boolean;
}

export const LeftPanel1 = (props: Props) => {
  return (
    <SidePanelContainer open={props.open}>
      LeftPanel1
    </SidePanelContainer>
  )
};
