import { DataGrid, GridToolbar } from "@mui/x-data-grid";


const ProductTable = ({ product, columns }) => {

    return (
        <div className="container bg-white mx-4 md:mx-8 mt-2 w-[300px] md:w-full ">
            <DataGrid
                rows={product}
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

export default ProductTable;