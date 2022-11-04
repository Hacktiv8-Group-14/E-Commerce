import PageContainer from "../../components/container/PageContainer";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <PageContainer>
      <div className="flex justify-center my-48">
        <div className="text-center">
          <div className="text-6xl">EROR 404 </div>
          <div className="mb-4">PAGE NOT FOUND</div>
          <Link to="/" className="bg-[#242582] p-2 rounded-lg text-white">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
