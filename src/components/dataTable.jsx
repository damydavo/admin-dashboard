import { DataGrid, GridToolbar } from "@mui/x-data-grid";


const DataTable = ({ userRows, columns }) => {

    return (
        <div className="container bg-white mx-4 md:mx-8 mt-8 w-[300px] md:w-full ">
            <DataGrid
                rows={userRows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    }
                }}
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
}

export default DataTable;