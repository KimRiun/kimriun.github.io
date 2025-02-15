import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface SectionHeadProps {
  title: string;
  color?: 'primary' | 'default';
}

export default function SectionHead({ title, color = 'primary' }: SectionHeadProps) {
  return <Title color={color}>{title}</Title>;
}

const Title = styled.div<{ color: 'primary' | 'default' }>`
  padding: 4rem;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: ${(props) => (props.color === 'primary' ? theme.colors.primary : 'white')};
`;
