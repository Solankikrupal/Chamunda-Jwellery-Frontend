import { ColumnT, FilterT, TableDataT } from "@/app/common/constants/type";
import { Dispatch, SetStateAction } from "react";
import { BsSortDownAlt, BsSortUpAlt } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

type Props = {
  tableData: TableDataT;
  headerData: ColumnT[];
  tableFilter: FilterT;
  setTableFilter: Dispatch<SetStateAction<FilterT>>;
  tableHeading?: string;
  exportData?: boolean;
  exportFunction?: () => void;
  showRecords?: boolean;
  isSearch?: boolean;
  addBtnText?: string;
  addBtnAction?: () => void;
  showPagination?: boolean;
};

const CustomTable = ({
  headerData,
  tableData,
  tableFilter,
  setTableFilter,
  tableHeading,
  exportData,
  exportFunction,
  showRecords = false,
  isSearch = false,
  addBtnText,
  addBtnAction,
  showPagination = false,
}: Props) => {
  const { pageIndex, pageSize, sortBy, sortDirection } = tableFilter;
  const { isLoading, error, totalCount, data } = tableData;

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center h-5 gap-4">
        <CgSpinner className="animate-spin text-2xl" />
        <p>Loading please wait...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          {tableHeading && (
            <div className="font-bold text-xl">{tableHeading}</div>
          )}
          {exportData && (
            <button
              className="uppercase btn-primary px-4 text-sm md:text-base"
              onClick={() => exportFunction && exportFunction()}
            >
              Export
            </button>
          )}
        </div>

        <hr className="my-2 h-1" />

        <div className="flex w-full justify-between items-center flex-wrap gap-4 mb-2">
          <div className="flex gap-x-4 items-center">
            {showRecords && 20 > 10 && (
              <div className="w-[150px] ">
                <select
                  className="form-control py-2.5"
                  value={pageSize}
                  onChange={(e) => {
                    setTableFilter({
                      ...tableFilter,
                      pageIndex: 1,
                      pageSize: Number(e.target.value),
                    });
                  }}
                >
                  {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {isSearch && (
              <input
                placeholder="Search..."
                className="form-control py-2 w-full sm:w-[200px]"
                value={tableFilter?.search}
                onChange={(e) =>
                  setTableFilter({
                    ...tableFilter,
                    search: e?.target?.value,
                    pageIndex: 1,
                  })
                }
                onClick={() =>
                  setTableFilter({ ...tableFilter, search: "", pageIndex: 1 })
                }
              />
            )}
          </div>
          {addBtnText && (
            <button
              className="bg-gray-500 text-white px-3 py-2 rounded-md"
              onClick={addBtnAction}
            >
              {addBtnText}
            </button>
          )}
        </div>

        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left rtl:text-right border border-[#DDDDDD] rounded-md">
            <thead className="text-lg text-[#4F4F4F] font-normal capitalize bg-[#0087FF1A] h-10 leading-6">
              <tr>
                {headerData?.map((data) => (
                  <th scope="col" className="px-6 text-sm" key={data.name!}>
                    {data.header!}
                    {data?.filterable === true && (
                      <span className="cursor-pointer ml-1">
                        {sortBy === data?.name && sortDirection ? (
                          <BsSortDownAlt className="inline-block" />
                        ) : (
                          <BsSortUpAlt className="inline-block" />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data?.map((data, id) => (
                  <tr className="bg-white border-b border-[#DDDDDD]" key={id}>
                    {headerData?.map((item, i) => (
                      <td className="px-6 py-4" key={i}>
                        {item.value(data, id)}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={headerData?.length}
                    className="px-3 py-2 text-center h-12"
                  >
                    No Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showPagination && data.length > 0 && (
        <div className="flex flex-wrap md:justify-end justify-center items-center mr-0 mt-4 ">
          <div className="md:flex-[0_0_auto] md:w-auto">
            <div className="flex">
              <button
                type="button"
                onClick={() => setTableFilter({ ...tableFilter, pageIndex: 1 })}
                disabled={pageIndex === 1 ? true : false}
                className="bg-gray-500 text-white text-xs md:px-4 py-2 px-3 rounded mr-1 hover:cursor-pointer"
              >
                {"<<"}
              </button>
              <button
                type="button"
                onClick={() =>
                  setTableFilter({ ...tableFilter, pageIndex: pageIndex - 1 })
                }
                disabled={pageIndex === 1 ? true : false}
                className="bg-gray-500 text-white text-xs md:px-4 py-2 px-3 rounded hover:cursor-pointer"
              >
                {"<"}
              </button>
            </div>
          </div>
          <div className="md:flex-[0_0_auto] md:w-auto hidden md:block ml-1">
            <span>
              Page
              <strong>
                {pageIndex} of {Math.ceil(totalCount / pageSize)}
              </strong>
            </span>
          </div>

          <div className="md:flex-[0_0_auto] md:w-auto mx-2">
            <span>
              <input
                type="number"
                className="form-control  py-1.5 w-20 sm:w-36"
                value={pageIndex}
                onChange={(e) => {}}
              />
            </span>
          </div>

          <div className="md:flex-[0_0_auto] md:w-auto">
            <div className="flex">
              <button
                type="button"
                onClick={() =>
                  setTableFilter({ ...tableFilter, pageIndex: pageIndex + 1 })
                }
                disabled={
                  totalCount === 0 ||
                  pageIndex === Math.ceil(totalCount / pageSize)
                    ? true
                    : false
                }
                className="bg-gray-500 text-white text-xs md:px-4 py-2 px-3 rounded mr-1 hover:cursor-pointer"
              >
                {">"}
              </button>
              <button
                type="button"
                onClick={() =>
                  setTableFilter({
                    ...tableFilter,
                    pageIndex: Math.ceil(totalCount / pageSize),
                  })
                }
                disabled={
                  totalCount === 0 ||
                  pageIndex === Math.ceil(totalCount / pageSize)
                    ? true
                    : false
                }
                className="bg-gray-500 text-white text-xs md:px-4 py-2 px-3 rounded hover:cursor-pointer"
              >
                {">>"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomTable;
