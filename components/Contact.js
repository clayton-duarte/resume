import React, { memo } from 'react';
import Link from 'next/link';

import { Text } from './Text';

import { useStateValue } from '../state';

const Contact = () => {
  const [{ profile }] = useStateValue();

  return (
    <>
      <Text>{profile.locationName}</Text>
      <Link href="mailto:flexgh.us@gmail.com">
        <a>flexgh.us@gmail.com</a>
      </Link>
      <Link href="tel:+55 21 99088-2070">
        <a>+55 21 99088-2070</a>
      </Link>
    </>
  );
}

export default memo(Contact);
