import React, { memo } from 'react';

import { Text } from './Text';
import { useStateValue } from '../state';

const Contact = () => {
  const [{ profile }] = useStateValue();

  return (
    <>
      <Text>{profile.locationName}</Text>
      <Text>flexgh.us@gmail.com</Text>
      <Text>+55 21 99088-2070</Text>
    </>
  );
}

export default memo(Contact);
