import { IconType } from "react-icons";
import { FaFileContract, FaRegFileAlt } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";

export type AdminRoutesT = {
  path: string
  icon: IconType
  label: string;
}

export const vendorData:AdminRoutesT[] = [
  {
    path: '/admin/products',
    icon: HiOutlineIdentification,
    label: 'KYC',
  },
  {
    path: '/admin/orders',
    icon: FaFileContract,
    label: 'Contract Details',
  },
  {
    path: '/admin/user',
    icon: FaRegFileAlt,
    label: 'Upload Documents',
  }
];