import { useNavigate } from 'react-router-dom';
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

const InquiryCreate = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 추후 실제 등록 API 연동
    navigate('/inquiry');
  };

  return (
    <div className="relative w-screen h-screen bg-[#F9FAFB] overflow-hidden font-sans">

      <Header />
      <Sidebar />

      {/* Main Content */}
      <main className="absolute top-[60px] left-[240px] right-0 h-[calc(100%-120px)] overflow-y-auto p-8">
        <div className="max-w-[678px] mx-auto">

          <h1 className="text-[24px] font-bold text-black mb-5">문의 등록</h1>

          {/* Form Card */}
          <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

              <LabeledField label="이름">
                <TextInput type="text" placeholder="이름을 입력하세요" />
              </LabeledField>

              <LabeledField label="이메일">
                <TextInput type="email" placeholder="이메일을 입력하세요" />
              </LabeledField>

              <LabeledField label="제목">
                <TextInput type="text" placeholder="제목을 입력하세요" />
              </LabeledField>

              <LabeledField label="내용">
                <textarea
                  placeholder="내용을 입력하세요"
                  className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-[10px] px-4 py-3.5 text-[16px] outline-none resize-none transition-all placeholder:text-black/50 text-gray-900 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                  rows={7}
                />
              </LabeledField>

              {/* Button Row */}
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => navigate('/inquiry')}
                >
                  취소
                </Button>
                <Button variant="primary" type="submit">
                  등록
                </Button>
              </div>

            </form>
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
};

export default InquiryCreate;
