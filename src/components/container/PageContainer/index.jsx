export default function PageContainer({children}){
    return(
        <div className="mx-auto mt-16 sm:mt-20 mb-10 w-11/12 flex flex-col">
            {children}
        </div>
    )
}