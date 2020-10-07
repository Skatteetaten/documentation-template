import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type SkeLinkProps = NavLinkProps;

export const SkeLink: FC<SkeLinkProps> = ({ children, ...rest }) => (
  <NavLink {...rest}>{children}</NavLink>
);
