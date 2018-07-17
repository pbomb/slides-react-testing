import * as React from 'react';
import styled from 'react-emotion';

type Props = {
  clicks: number;
};

const StyledCount = styled('span')(
  {
    margin: '1em',
  },
  ({ clicks }: Props) => ({
    color: clicks < 0 ? 'red' : clicks > 0 ? 'green' : 'black',
  })
);

const Display = ({ clicks }: Props) => (
  <StyledCount data-testid="count" clicks={clicks}>
    {clicks}
  </StyledCount>
);

export default Display;
