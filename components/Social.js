import React, { memo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import LogoNodejs from 'react-ionicons/lib/LogoNodejs';

const IconLink = styled.a`
margin: 1rem;
svg {
  fill: ${props => props.theme.primary};
}
`;

const Social = () => (
  <>
    <Link href="https://linkedin.com/in/clayton-duarte">
      <a target="_blank">
        <IconLink>
          <LogoLinkedin fontSize="2rem" />
        </IconLink>
      </a>
    </Link>
    <Link href="https://github.com/clayton-duarte">
      <a target="_blank">
        <IconLink>
          <LogoGithub fontSize="2rem" />
        </IconLink>
      </a>
    </Link>
    <Link href="https://www.npmjs.com/~clayton-duarte">
      <a target="_blank">
        <IconLink>
          <LogoNodejs fontSize="2rem" />
        </IconLink>
      </a>
    </Link>
  </>
);

export default memo(Social);
