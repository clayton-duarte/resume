import React, { memo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Icon = styled.img`
filter: drop-shadow(0 0 .25rem ${props => props.theme.shadow});
max-height: 2rem;
margin: 1rem;
height: auto;
width: 4rem;
`;

const Social = () => (
  <>
    <Link href="https://linkedin.com/in/clayton-duarte">
      <a target="_blank">
        <Icon alt="linkedin" src="static/linkedin.svg" />
      </a>
    </Link>
    <Link href="https://github.com/clayton-duarte">
      <a target="_blank">
        <Icon alt="github" src="static/github.svg" />
      </a>
    </Link>
    <Link href="https://www.npmjs.com/~clayton-duarte">
      <a target="_blank">
        <Icon alt="npm" src="static/npm.svg" />
      </a>
    </Link>
  </>
);

export default memo(Social);
