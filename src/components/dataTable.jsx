import { DataGrid, GridToolbar } from "@mui/x-data-grid";


const DataTable = ({ userData, columns }) => {

    return (
        <div className="container bg-white mx-4 md:mx-8 mt-2 w-[300px] md:w-full ">
            <DataGrid
                rows={userData}
                getRowId={(row) => row.id}
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