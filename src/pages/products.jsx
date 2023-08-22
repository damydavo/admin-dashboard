import { noavatar, deleteUser, view } from "../assets";
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { products } from '../constants';
import ProductTable from './../components/productTable';

const Product = () => {

    const [modal, setModal] = useState(false)
    const [product, setProductData] = useState(products)

    const [formData, setFormData] = useState({
        img: '',
        title: '',
        color: '',
        producer: '',
        price: '',
        createdAt: '',
        inStock: '',
    })

    const { img, title, color, producer, price, createdAt, inStock } = formData

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value,
        }))
    }

    const addProduct = (newProduct) => {
        newProduct.id = uuidv4()
        setProductData([newProduct, ...product])
    }

    const deleteProductData = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setProductData(product.filter(item => {
                return item.id !== id
            })
            )
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            img,
            title,
            color,
            producer,
            price,
            createdAt,
            inStock,
        }
        addProduct(newProduct)
        setFormData('')
        setModal(false)

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 100,
            renderCell: (params) => {
                return <img className="w-10 h-10 rounded-full object-cover" src={params.row.img || noavatar} alt="avatar" />
            }

        },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
        },
        {
            field: 'color',
            headerName: 'color',
            width: 150,
        },

        {
            field: 'producer',
            headerName: 'producer',
            width: 180,
        },

        {
            field: 'price',
            headerName: 'price',
            width: 100,
        },

        {
            field: 'createdAt',
            headerName: 'Created At',
            width: 100,
        },
        {
            field: 'instock',
            headerName: 'In Stock',
            width: 100,
            type: "boolean",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="flex space-x-2 items-center text-sm">
                        <img className='w-6 h-6' src={view} alt="view" />
                        <img onClick={() => deleteProductData(params.row.id)} className='w-6 h-6 cursor-pointer' src={deleteUser} alt="delete" />
                    </div>
                )
            }
        },

    ];

    return (
        <div className=''>
            <div className='relative flex ml-8 space-x-4 my-2 z-20'>
                <h2 className='flex items-center text-sm font-poppins font-semibold text-white'>Products</h2>
                <button onClick={() => setModal(!modal)} type="button" className="flex px-4 py-1 font-semibold z-20 rounded-md border gap-1 items-center text-white">Add new</button>
                {modal && (
                    <div className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.724)]'>
                        <div className='relative container mx-auto mt-48 w-[470px] h-[340px] bg-slate-700 text-white rounded-lg shadow-md'>
                            <div className='p-6'>
                                <h2 className='text-lg font-semibold mb-4'>Add new product</h2>
                                <span onClick={() => setModal('')} className='absolute top-2 right-4 font-bold cursor-pointer'>X</span>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row gap-4 items-center flex-wrap">
                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>Avatar</span>
                                            <input
                                                type='text'
                                                name='img'
                                                value={img}
                                                onChange={handleChange}
                                                placeholder="avatar"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>

                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>Title</span>
                                            <input
                                                type='text'
                                                name='title'
                                                required
                                                value={title}
                                                onChange={handleChange}
                                                placeholder="title"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>

                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>Color</span>
                                            <input
                                                type='text'
                                                name='color'
                                                required
                                                value={color}
                                                onChange={handleChange}
                                                placeholder="color"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>

                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>Producer</span>
                                            <input
                                                type='text'
                                                name='producer'
                                                required
                                                value={producer}
                                                onChange={handleChange}
                                                placeholder="producer"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>
                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>Price</span>
                                            <input
                                                type='text'
                                                name='price'
                                                required
                                                value={price}
                                                onChange={handleChange}
                                                placeholder="price"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>
                                        <label className='flex flex-col'>
                                            <span className='text-[12px] mb-1'>CreatedAt</span>
                                            <input
                                                type='text'
                                                name='createdAt'
                                                required
                                                value={createdAt}
                                                onChange={handleChange}
                                                placeholder="createdAt"
                                                className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                            />
                                        </label>

                                        <div className='flex justify-between w-80 items-center'>
                                            <label className='flex flex-col'>
                                                <span className='text-[12px] mb-1'>In Stock</span>
                                                <input
                                                    type='text'
                                                    name='inStock'
                                                    value={inStock}
                                                    onChange={handleChange}
                                                    placeholder="in stock"
                                                    className='bg-transparent px-2 w-32 outline-none border rounded-sm py-1 text-sm'
                                                />
                                            </label>
                                            <div className=''><h2>Upload a new image</h2></div>

                                        </div>

                                    </div>

                                    <button type='submit' className='py-1 w-full bg-white outline-none text-primary font-bold border my-6'
                                    >Send</button>
                                </form>
                            </div>

                        </div>

                    </div>
                )}
            </div>

            <ProductTable product={product} columns={columns} />

        </div>
    );
}

export default Product;