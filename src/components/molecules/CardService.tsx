export default function CardService({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="desktop:w-full desktop:h-[340px] tablet:h-[305px] tablet:w-[221px] phone:w-full w-[432px] border-[24px] border-white rounded-[24px] bg-white">
      <img
        src={`/icons/${icon}`}
        className="desktop:h-[72px] desktop:w-[72px] phone:h-[56px] phone:w-[56px]"
      />
      <div className="desktop:mt-[64px] desktop:h-[24px] desktop:leading-[30px] desktop:text-[24px] phone:leading-[16px] phone:text-[16px] phone:mt-[40px]  text-[#A02828] font-bold">
        {title}
      </div>
      <div className="desktop:text-[24px] desktop:leading-[30px] phone:leading-[16px] phone:text-[16px] mt-[17px] text-[24px] leading-[30px]">
        {desc}
      </div>
    </div>
  );
}
