import EllipseNumber from "components/atoms/EllipseNumber";

export default function CardDiferencial({
  title,
  desc,
  number,
}: {
  title: string;
  desc: string;
  number: string;
}) {
  return (
    <div className="phone:w-full phone:gap-[16px] flex gap-[36px] w-[660px]">
      <EllipseNumber title={number} />
      <div className="phone:w-full w-[540px]">
        <div className="phone:text-[16px] phone:leading-[20px] font-bold text-[22px] leading-[22px]">
          {title}
        </div>
        <div className="phone:text-[16px] phone:leading-[20px] mt-[19px] text-[22px] leading-[27px] ">
          {desc}
        </div>
      </div>
    </div>
  );
}
