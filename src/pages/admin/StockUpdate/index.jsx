import Button from "../../../components/atoms/Buttons";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import AdminContainer from "../../../components/container/adminContainer";

export default function StockUpdate() {
  return (
    <>
      <AdminContainer>
        <Breadcrumb
          list={[
            { url: "/Dashboard", name: "Admin" },
            { url: "/Dashboard", name: "Stock Update" },
          ]}
        />
        <div className="w-full flex justify-between items-center border-2 rounded-lg p-4">
          <div className="flex items-center p-2 gap-4 sm:gap-8">
            <img
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt="product"
              className="h-12 sm:h-24 w-12 sm:w-24"
            />
            <div className="flex flex-col">
              {/* nama produk */}
              <div className="text-sm sm:text-xl line-clamp-1">
                product title
              </div>
              {/* harga produk */}
              <div className="font-medium text-sm sm:text-xl">US$ xxx</div>
              <div className="text-red-700  text-xs sm:text-lg ">
                Remaining stock: x
              </div>
            </div>
          </div>
          <div className="flex p-2 gap-2 md:gap-10">
            <input
              type="number"
              className="border-2 text-center sm:text-lg w-10 sm:w-20"
            />
            <Button className="bg-[#242582] text-white p-1 sm:p-2 rounded-lg">
              Update
            </Button>
          </div>
        </div>
      </AdminContainer>
    </>
  );
}
