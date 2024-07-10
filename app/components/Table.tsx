import { CartItems } from "../(user)/cart/page";
import { ColumnT } from "../common/constants/type";
import { unstable_noStore as noStore } from "next/cache";

type Props = {
  tableData: CartItems[];
  updateData?: React.Dispatch<React.SetStateAction<CartItems[]>>;
  showFilterSection?: boolean;
  headerData: ColumnT[];
};

const Table = ({ tableData, showFilterSection = false, headerData }: Props) => {
  noStore();
  return (
    <div>
      {showFilterSection && (
        <>
          <div className="w-full">
            <div className="md:flex justify-between space-y-4 md:space-y-0">
              <div className="flex items-center justify-between sm:justify-normal gap-5">
                <div className="font-normal text-base text-nowrap text-[#00000066] hover:cursor-pointer">
                  Ongoing Orders
                </div>
                <div className="font-normal text-base text-nowrap text-[#00000066] hover:cursor-pointer">
                  Past Orders
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 my-3 sm:my-0">
                <div>
                  <p className="font-normal text-base text-nowrap text-[#00000066] mb-2 sm:mb-0">
                    No orders placed in
                  </p>
                </div>
                <div>
                  <select
                    className="form-select w-1/4 py-2 bg-transparent"
                    name=""
                    id=""
                  >
                    <option value="last-1-month">Last 1 month</option>
                    <option value="last-3-month">Last 3 month</option>
                    <option value="last-3-month">Last 6 month</option>
                    <option value="last-1-year">Last 1 year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-[2px] border-2 border-[#E0E0E0] my-5" />
        </>
      )}
      <div className="relative overflow-x-auto w-full">
        <table className="w-full text-sm text-left rtl:text-right border border-[#DDDDDD] rounded-md">
          <thead className="text-lg text-[#4F4F4F] font-normal capitalize bg-[#0087FF1A] h-14 leading-6">
            <tr>
              {headerData?.map((data) => (
                <th scope="col" className="px-6 py-3" key={data.name!}>
                  {data.header!}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, id) => (
              <tr className="bg-white border-b border-[#DDDDDD]" key={data.id}>
                {headerData.map((item, i) => (
                  <td className="px-6 py-4" key={i}>
                    {item.value(data, id)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
