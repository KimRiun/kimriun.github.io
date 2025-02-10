import { atom } from 'jotai';

export const modalAtom = atom<Record<string, boolean>>({
  info: false,
});
