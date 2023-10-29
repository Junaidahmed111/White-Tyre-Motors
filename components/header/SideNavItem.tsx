import React from "react";
import { BiChevronRight } from "react-icons/bi";

interface SideNavItemProps {
  title: string;
  // isSubCategory: boolean;
}

const SideNavItem = ({ title }: SideNavItemProps) => {
  return (
    <>
      <hr className="border-blue-800 border-[1px]" />
      <div className="flex justify-between content-center items-center text-white pt-4">
        <span>{title}</span>
        <div>
        {title !== 'Offers' && title !== 'Careers' && title !== 'Free Tyre Check'&& title !== 'Express Tyre Fitting' ? <BiChevronRight size={25} /> : null}
        </div>
      </div>
    </>
  );
};

export default SideNavItem;
