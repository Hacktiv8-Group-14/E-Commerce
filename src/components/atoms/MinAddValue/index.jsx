import Button from "../../atoms/Buttons"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export default function MinAddValue({width, widthSm, onClickMin, onClickPlus, value, onChangeValue, minValue, maxValue, onBlur}) {
    return(
        <div>
            <div className={`w-[${widthSm}] sm:w-[${width}] flex justify-between rounded-lg border-2`}>
                {/* tombol ngurangi 1 jumlah item */}
                <Button 
                    className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-l-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
                    onClick={onClickMin}
                    disabled={value <= minValue ? true : false}
                > 
                    <AiOutlineMinus /> 
                </Button>
                <input 
                    type="number"
                    placeholder="0" 
                    min={minValue} 
                    max={maxValue} 
                    className="text-center text-sm sm:text-xl" 
                    value={value} 
                    onChange={onChangeValue}
                    onBlur={onBlur} // saat keluar dari input
                    onKeyDown={(e) => ['-', '+', 'e', 'E'].includes(e.key) && e.preventDefault()}
                    onInput={(event) => event.target.value = event.target.value.replace(/[e\+\-\E]/ig, "")}
                />
                {/* tombol nambah 1 jumlah item */}
                <Button 
                    className="text-sm sm:text-xl hover:bg-[#242582] p-2 rounded-r-lg bg-[#242582] disabled:bg-[#242582]/50 text-white"
                    onClick={onClickPlus}
                    disabled={value >= maxValue ? true : false}
                > 
                    <AiOutlinePlus /> 
                </Button>
            </div>
            <div className=" text-red-500 text-xs">
                {value < minValue && `*Minimum item is ${minValue}`}
                {value > maxValue && `*Maximum item is ${maxValue}`}
            </div>
        </div>
    )
}