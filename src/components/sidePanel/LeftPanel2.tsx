import React from 'react';

import { Box } from '@material-ui/core';
import { SidePanelContainer } from './SidePanelContainer';

interface Props {
  open: boolean;
}
export const LeftPanel2 = (props: Props) => {
  return (
    <SidePanelContainer open={props.open}>
      <Box>
        LeftPanel2
      </Box>
    </SidePanelContainer>
  );
};
