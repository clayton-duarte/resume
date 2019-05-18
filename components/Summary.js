import React, { memo } from 'react';

import { Title, Text } from './Text';

import { useStateValue } from '../state';

const Summary = () => {
  const [{ profile }] = useStateValue();

  return (
    <>
      <Title>{profile.firstName} {profile.lastName}</Title>
      <Text>Fullstack Javascript Developer</Text>
      <Text>{profile.headline}</Text>
    </>
  );
}

export default memo(Summary);
