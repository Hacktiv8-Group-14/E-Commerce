import PageContainer from "../../components/container/PageContainer";
import Header from "../../components/molecules/Header/index.";
import { RowContainer } from "../../components/container/RowContainer";
import BottomBarContainer from "../../components/container/BottomBarContainer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Breadcrumb from "../../components/molecules/Breadcrumb";

export default function RecapPage() {

    const products = useSelector((state) => state.products.products)
    const admin = useSelector((state) => state.login.admin)

    const [totalSold, setTotalSold] = useState(0)

    useEffect(() => {
        const setTotal = () => {
            let temp = 0
            products.forEach((product) => {
                temp += (product.productSold * product.price)
            })
            setTotalSold(temp)
        }
        setTotal()
    }, []);

    if(admin){
        return(
            <PageContainer>
                <Breadcrumb 
                    list={[
                        { url: "/", name: "Admin" },
                        { url: "/sales", name: "Sales Recap" },
                    ]}
                />
                <Header>Sales Recap</Header>
                <RowContainer>
                    {products?.map((item, index) => (
                        <div key={index} className="w-11/12 sm:w-4/5 flex justify-between items-center border-2 rounded-lg p-4">
                            <div className="flex items-center p-2 gap-4 sm:gap-8">
                                <img
                                    src={item.image}
                                    alt="product"
                                    className="h-12 sm:h-24 w-12 sm:w-24"
                                />
                                <div className="flex flex-col sm:w-96">
                                    <div className="text-sm sm:text-xl line-clamp-1">{item.title}</div>
                                    <div className="font-medium text-sm sm:text-xl">US$ {item.price}</div>
                                </div>
                            </div>
                            <div className="flex p-2 gap-2 md:gap-20">
                                <div className="text-sm sm:text-xl font-medium">{item.productSold} sold</div>
                                <div className="text-sm sm:text-xl">Total: <b>US$ {item.price * item.productSold}</b></div>
                            </div>
                        </div>
                    ))}
                    <BottomBarContainer>
                        <div className="flex justify-center sm:gap-10 items-center">
                            <div className="text-xl sm:text-2xl">
                                Total sales: <b>US$ {totalSold}</b>
                            </div>
                        </div>
                    </BottomBarContainer>
                </RowContainer>
            </PageContainer>
        )
    } else{
        return <Navigate to="/" />
    }
    
}