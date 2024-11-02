import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SideBar() {
  return (
    <div className="sticky top-0 hidden h-screen w-full flex-col gap-10 bg-primary-300 px-8 pt-10 ipad:flex lg:px-[72px]">
      <Link href={"#"}>
        <Image
          src={"/enoverlab_logo_white.png"}
          width={150}
          height={0}
          alt="Enoverlab Logo"
        />
      </Link>

      <div className="flex flex-1 items-center overflow-hidden rounded-bl-[50px] rounded-tr-[50px]">
        <Image
          src={"/svg/step_2.png"}
          width={390}
          height={0}
          alt="Trainees"
          className="z-[1] mx-auto rounded-bl-[50px] rounded-tr-[50px] object-cover object-center"
        />
      </div>

      <Image
        src={"/side_t_line.png"}
        width={424}
        height={0}
        alt=""
        className="absolute -top-5 left-0 z-0"
      />
      <Image
        src={"/side_b_line.png"}
        width={1335}
        height={0}
        alt=""
        className="absolute -right-24 bottom-0 z-0"
      />
    </div>
  );
}
