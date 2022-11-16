export default function CardSales({ title, rating, total, icon, className }) {
  return (
    <div className={className}>
      <div className="bg-white border rounded-xl text-black p-3 px-4 w-full md:w-96 mt-2 ">
        <div className="flex justify-between ">
          <div className="bg-bluedark p-2 px-3 rounded-lg">{icon}</div>
          <div>
            <div>{title}</div>
            <div className="font-bold">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
