export default function BottomBarContainer({children}){
    return(
        <div className="sticky bottom-0 w-full text-white flex justify-center">
            {children}
        </div>
    )
}