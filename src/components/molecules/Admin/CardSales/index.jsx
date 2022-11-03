export default function CardSales({ title, rating, total, icon, className }) {
  return (
    <div className={className}>
      <div className="bg-white border rounded-xl text-black p-8 drop-shadow-md">
        <div className="flex justify-between mb-4 ">
          <div className="bg-[#242582] p-2 px-3 rounded-lg">{icon}</div>
          <div>
            <div>{title}</div>
            <div>{total}</div>
          </div>
        </div>
        <div className="border-t">{rating} than last week</div>
      </div>
    </div>
  );
}
