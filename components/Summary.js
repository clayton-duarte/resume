import React, { memo } from 'react';

import { Title, SubTitle, Text, Label } from './Text';
import { useStateValue } from '../state';

const Summary = () => {
  const [{ profile }] = useStateValue();

  return (
    <>
      <Title>{profile.firstName} {profile.lastName}</Title>
      <SubTitle>{profile.headline}</SubTitle>
      <Text>{profile.locationName}</Text>
      <Label>{profile.summary}</Label>
    </>
  );
}

export default memo(Summary);
