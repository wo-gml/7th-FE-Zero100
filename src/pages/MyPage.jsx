import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const LabeledField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-[14px] font-medium text-[#364153]">{label}</label>
    {children}
  </div>
);

const MyPage = () => {
  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8 flex justify-center">
        <div className="w-full max-w-[672px]">

          <h1 className="text-[24px] font-bold text-black mb-5">마이페이지</h1>

          <div className="flex flex-col gap-7">

            {/* Card 1: 이름 변경 */}
            <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-5 flex flex-col gap-3">
              <h2 className="text-[18px] font-bold text-black">이름 변경</h2>
              <div className="flex flex-col items-end gap-3">
                <TextInput
                  type="text"
                  placeholder="텍스트를 입력하세요"
                />
                <Button variant="primary" type="button">
                  저장
                </Button>
              </div>
            </div>

            {/* Card 2: 비밀번호 변경 */}
            <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-5 flex flex-col gap-3">
              <h2 className="text-[18px] font-bold text-black">비밀번호 변경</h2>
              <div className="flex flex-col gap-3">
                <LabeledField label="현재 비밀번호">
                  <TextInput type="password" placeholder="텍스트를 입력하세요" />
                </LabeledField>
                <LabeledField label="새 비밀번호">
                  <TextInput type="password" placeholder="텍스트를 입력하세요" />
                </LabeledField>
                <LabeledField label="비밀번호 확인">
                  <TextInput type="password" placeholder="텍스트를 입력하세요" />
                </LabeledField>
                <div className="flex justify-end pt-1">
                  <Button variant="primary" type="button">
                    저장
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default MyPage;
