export default function Ellipse({
  nameIcon,
  title,
  colorTitle,
}: {
  nameIcon: string;
  title: string;
  colorTitle: boolean;
}) {
  return (
    <div className="phone:w-[112px] phone:h-[112px]  tablet:h-[112px] tablet:w-[112px]  flex justify-center items-center">
      <img
        className="phone:w-[112px] phone:h-[112px] absolute tablet:h-[112px] tablet:w-[112px] "
        src={`/icons/${nameIcon}`}
      />
      <div
        className={`phone:text-[14px] z-10 w-[60px] flex justify-center text-center ${
          colorTitle ? "text-[#A02828]" : "text-[#F7F7F7]"
        } tablet:text-[16px]`}
      >
        {title}
      </div>
    </div>
  );
}
