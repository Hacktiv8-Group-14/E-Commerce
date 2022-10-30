export default function BottomBarContainer({children}){
    return(
        <div className="fixed bottom-0 bg-[#242582] w-4/5 sm:w-1/2 text-white p-2 sm:p-4 rounded-t-lg">
            {children}
        </div>
    )
}