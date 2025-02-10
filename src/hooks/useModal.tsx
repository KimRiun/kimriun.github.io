import React from 'react';
import { useAtom } from 'jotai';
import { modalAtom } from '../store/stores';

export default function useModal(modalName: string) {
  const [isOpenStates, setIsOpenStates] = useAtom(modalAtom);
  const isOpen = isOpenStates[modalName];

  const onOpen = () => {
    setIsOpenStates((prevState: any) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const onClose = () => {
    setIsOpenStates((prevState: any) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return { isOpen, onOpen, onClose };
}
