import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import LabeledField from '../components/LabeledField';

const CARD_STYLE = 'bg-white border border-[#E5E7EB] rounded-[10px] p-5 flex flex-col gap-3';

/* ── 이름 변경 카드 ── */
const NameChangeCard = () => (
  <div className={CARD_STYLE}>
    <h2 className="text-[18px] font-bold text-black">이름 변경</h2>
    <div className="flex flex-col items-end gap-3">
      <TextInput type="text" placeholder="텍스트를 입력하세요" />
      <Button variant="primary" type="button">저장</Button>
    </div>
  </div>
);

/* ── 비밀번호 변경 카드 ── */
const PasswordChangeCard = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isMismatch = confirmPassword.length > 0 && newPassword !== confirmPassword;

  const handleSave = () => {
    if (isMismatch) return;
    // 실제 API 연동 시 이곳에 로직 추가
    console.log('비밀번호 변경 저장:', { currentPassword, newPassword });
  };

  return (
    <div className={CARD_STYLE}>
      <h2 className="text-[18px] font-bold text-black">비밀번호 변경</h2>
      <div className="flex flex-col gap-3">
        <LabeledField label="현재 비밀번호">
          <TextInput
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </LabeledField>
        <LabeledField label="새 비밀번호">
          <TextInput
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </LabeledField>
        <LabeledField label="비밀번호 확인">
          <TextInput
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={isMismatch}
            helperText={isMismatch ? '비밀번호가 일치하지 않습니다.' : ''}
          />
        </LabeledField>
        <div className="flex justify-end pt-1">
          <Button
            variant="primary"
            type="button"
            onClick={handleSave}
            disabled={isMismatch || !currentPassword || !newPassword || !confirmPassword}
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ── 마이페이지 ── */
const MyPage = () => {
  return (
    <PageLayout className="flex justify-center">
      <div className="w-full max-w-[672px]">
        <h1 className="text-[24px] font-bold text-black mb-5">마이페이지</h1>
        <div className="flex flex-col gap-7">
          <NameChangeCard />
          <PasswordChangeCard />
        </div>
      </div>
    </PageLayout>
  );
};

export default MyPage;
