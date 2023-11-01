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
    <div className="phone:w-[82px] phone:h-[82px]  tablet:h-[82px] tablet:w-[82px]  flex justify-center items-center">
      <img
        className="phone:w-[82px] phone:h-[82px] absolute tablet:h-[82px] tablet:w-[82px] "
        src={`/icons/${nameIcon}`}
      />
      <div
        className={`phone:text-[14px] z-10 w-[60px] flex justify-center text-center ${
          colorTitle ? "text-[#A02828]" : "text-[#F7F7F7]"
        } tablet:text-[14px]`}
      >
        {title}
      </div>
    </div>
  );
}
