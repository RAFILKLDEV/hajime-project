export default function EclipseNumber({ title }: { title: string }) {
  return (
    <div className="desktop:w-[83px] desktop:h-[83px] tablet:w-[42px] phone:h-[42px] h-[83px] w-[83px] flex justify-center items-center">
      <img
        className="desktop:w-[83px] desktop:h-[83px] tablet:w-[42px] phone:h-[42px]  absolute h-[83px] w-[83px] "
        src="/icons/Ellipse2.svg"
      />
      <div className="desktop:text-[40px] phone:text-[20px] z-10 text-white text-[40px] font-bold text-center">
        {title}
      </div>
    </div>
  );
}
