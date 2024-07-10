"use client";
import { ColumnT, FilterT, TableDataT } from "@/app/common/constants/type";
import { useMemo, useState } from "react";
import { AxiosPost } from "@/app/configs/common/axiosService";
import { toast } from "react-toastify";
import CustomTable from "../../components/CustomTable";

type Props = {};

const AdminHome = (props: Props) => {
  const [tableFilter, setTableFilter] = useState<FilterT>({
    pageSize: 10,
    pageIndex: 1,
    sortBy: "",
    sortDirection: true,
    search: "",
    updateData: true,
  });

  const [tableData, setTableData] = useState<TableDataT>({
    data: [],
    totalCount: 0,
    isSuccess: false,
    error: "",
    isLoading: false,
  });

  const Columns = useMemo<ColumnT[]>(
    () => [
      {
        header: "#",
        name: "index",
        filterable: false,
        value: (i) => <span>{i + 1}</span>,
        width: "5%",
      },
      {
        header: "Maxus Code",
        name: "maxusCode",
        width: "10%",
        maxWidth: "15rem",
        filterable: true,
        value: (cell) => (
          <span className="table-span">
            {cell.maxusCode ? cell.maxusCode : "--"}
          </span>
        ),
      },
      {
        header: "Vendor Name",
        name: "fullName",
        maxWidth: "20rem",
        filterable: false,
        value: (cell) => (
          <span className="capitalize table-span">
            {cell?.fullName ? cell?.fullName : "--"}
          </span>
        ),
      },

      {
        header: "Contract Title",
        name: "title",
        maxWidth: "20rem",
        filterable: false,
        value: (cell) => (
          <span className="capitalize table-span">
            {cell?.title ? cell?.title : "--"}
          </span>
        ),
      },
      {
        header: "Start Date",
        name: "startDate",
        filterable: false,
        value: (cell) => (
          <span className="capitalize table-span">{cell.name}</span>
        ),
      },
      {
        header: "Status",
        name: "status",
        width: "12%",
        filterable: false,
        value: (cell) => (
          <div
            className={`capitalize w-full xxl:w-3/4 p-2  text-center ${
              cell?.status === "approved"
                ? "bg-success-450"
                : cell?.status === "rejected"
                ? "bg-button-500"
                : "bg-warning-500"
            } text-white rounded-lg`}
          >
            {cell.status}
          </div>
        ),
      },
    ],
    []
  );

  const handleClick = async () => {
    console.log("clicked");
  };

  return (
    <div className="">
      <CustomTable
        tableData={tableData}
        headerData={Columns}
        tableFilter={tableFilter}
        setTableFilter={setTableFilter}
        tableHeading="Test Table"
        addBtnText="Add Product"
        addBtnAction={handleClick}
        showPagination={true} 
      />
    </div>
  );
};

export default AdminHome;
