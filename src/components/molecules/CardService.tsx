export default function CardService({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="phone:w-full w-[432px] border-[24px] border-white rounded-[24px] bg-white">
      <img src="/icons/Thumbs.png" className="phone:h-[56px] phone:w-[56px] h-[72px]" />
      <div className="phone:text-[16px] phone:mt-[40px] mt-[64px] text-[24px] h-[24px] leading-[24px] text-[#A02828] font-bold">
        {title}
      </div>
      <div className="phone:text-[16px] mt-[17px] text-[24px] leading-[30px]">{desc}</div>
    </div>
  );
}
