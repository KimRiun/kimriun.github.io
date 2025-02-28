import { useAtomValue } from 'jotai';
import { modalAtom } from '../store/stores';
import InfoModal from '../components/InfoModal';

function Switch({ modals }: { modals: { [key: string]: React.ReactNode } }) {
  const modalKeys = useAtomValue(modalAtom);
  const openedModal = Object.keys(modalKeys).find((key) => modalKeys[key] === true);

  return openedModal ? modals[openedModal] : null;
}

// 선언적으로 사용할 수 있는 모달
export default function Modals() {
  return (
    <Switch
      modals={{
        info: <InfoModal />,
      }}
    />
  );
}
