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
    <div className="phone:w-[82px]  h-[112px] w-[112px]  flex justify-center items-center">
      <img
        className="phone:w-[82px] phone:h-[82px] absolute h-[112px] w-[112px] "
        src={`/icons/${nameIcon}`}
      />
      <div
        className={`phone:text-[14px] z-10 w-[60px] flex justify-center text-center ${
          colorTitle ? "text-[#A02828]" : "text-[#F7F7F7]"
        } text-[16px]`}
      >
        {title}
      </div>
    </div>
  );
}
