import React from 'react';
import { IconType } from 'react-icons';
import styled, { css } from 'styled-components';

interface AboutItemProps {
  icon: IconType;
  content: string;
  link?: string;
}

export default function AboutItem({ icon: Icon, content, link }: AboutItemProps) {
  return (
    <AboutItemContainer
      as={link ? 'a' : 'div'}
      href={link}
      target={link ? '_blank' : undefined}
      $isLink={!!link}
    >
      <IconWrapper $isLink={!!link}>
        <Icon size={16} />
      </IconWrapper>
      {content}
    </AboutItemContainer>
  );
}

const AboutItemContainer = styled.div<{ $isLink: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme, $isLink }) =>
    $isLink ? theme.colors.text.disabled : theme.colors.text.secondary};
  text-decoration: ${({ $isLink }) => ($isLink ? 'none' : 'inherit')};
  ${({ theme, $isLink }) =>
    $isLink &&
    css`
      cursor: pointer;
      &:hover {
        color: ${theme.colors.primary};
      }
    `}
`;

const IconWrapper = styled.div<{ $isLink: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
