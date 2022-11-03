export default function CardContainer({children}){
    return(
        <div className="mt-4 grid gap-4 mb-3 md:mb-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white">
            {children}
        </div>
    )
}