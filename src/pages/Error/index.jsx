import PageContainer from "../../components/container/PageContainer";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <PageContainer>
      <div className="flex justify-center my-48">
        <div className="text-center">
          <div className="text-9xl font-bold">404 </div>
          <div className="mb-4 text-sm mt-5">PAGE NOT FOUND</div>
          <p>
            we are sorry but the page you are looking for does not exist You
            could return to{" "}
            <Link to="/" className="text-red-600">
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
