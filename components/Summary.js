import React, { memo } from 'react';

import { Title, SubTitle, Text, Label } from './Text';
import { useStateValue } from '../state';

const Summary = () => {
  const [{ profile }] = useStateValue();
  console.log(profile)
  return (
    <>
      <Title>{profile.firstName} {profile.lastName}</Title>
      <SubTitle>{profile.headline}</SubTitle>
    </>
  );
}

export default memo(Summary);
