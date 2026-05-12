import Button from './Button';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="flex flex-col items-start p-[33px] gap-[32px] w-[389px] bg-white border border-[#E5E7EB] rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 문구 */}
        <div className="w-full">
          <p className="text-center text-[18px] font-normal leading-[28px] text-black font-['Noto_Sans_KR']">
            문의를 삭제하시겠습니까?
          </p>
        </div>

        {/* 버튼 그룹 */}
        <div className="w-full flex justify-center gap-[12px]">
          <Button variant="secondary" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
