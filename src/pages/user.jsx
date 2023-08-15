import DataTable from '../components/dataTable';
import { userRows } from '../constants';
import { noavatar, deleteUser, view } from "../assets";

const User = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 100,
            renderCell: (params) => {
                return <img className="w-10 h-10 rounded-full object-cover" src={userRows.img || noavatar} alt="avatar" />
            }

        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'email',
            width: 180,
        },

        {
            field: 'phone',
            headerName: 'phone',
            width: 100,
        },

        {
            field: 'createdAt',
            headerName: 'Created At',
            width: 100,
        },
        {
            field: 'verified',
            headerName: 'Verified',
            width: 100,
            type: "boolean",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: () => {
                return (
                    <div className="flex space-x-2 items-center text-sm">
                        <img className='w-6 h-6' src={view} alt="view" />
                        <img className='w-6 h-6' src={deleteUser} alt="view" />
                    </div>
                )
            }
        },

    ];

    return (
        <div>
            <DataTable userRows={userRows} columns={columns} />
        </div>
    );
}

export default User;