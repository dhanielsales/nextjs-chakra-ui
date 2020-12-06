import { BoxProps, Divider as ChakraDivider, Grid, GridProps } from '@chakra-ui/core';
import React from 'react';

interface DividerProps extends BoxProps {
  containerProps?: GridProps;
}

function Divider({ containerProps, ...rest }: DividerProps) {
  return (
    <Grid gridTemplateColumns="1fr 1fr" columnGap={12} opacity={0.4} {...containerProps}>
      <ChakraDivider marginY={6} {...rest} />
      <ChakraDivider marginY={6} {...rest} />
    </Grid>
  );
}

export default Divider;
