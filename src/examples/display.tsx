import glamorous from 'glamorous';
import * as React from 'react';

type Props = {
  clicks: number;
};

const StyledDiv = glamorous.div(({ clicks }: Props) => ({
  color: clicks < 0 ? 'red' : clicks > 0 ? 'green' : 'black',
}));

export default ({ clicks }: Props) => (
  <StyledDiv data-testid="count" clicks={clicks}>
    {clicks}
  </StyledDiv>
);
