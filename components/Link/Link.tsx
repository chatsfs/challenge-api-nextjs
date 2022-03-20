import React, { FC } from 'react';
import NextLink from 'next/link';

type PropTypes = {
  href: string;
  styles?: React.CSSProperties;
  className?: string;
};

const Link: FC<PropTypes> = ({ children, href, styles, className }) => {
  return (
    <NextLink href={href}>
      <a className={className || ''} style={{ ...(styles || {}) }}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
