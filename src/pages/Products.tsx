import { ReactElement, useCallback, useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Photo',
    accessor: 'photo',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];
const img = 'https://m.media-amazon.com/images/I/61cATpT6pQL._AC_SL1500_.jpg';

const img2 = 'https://m.media-amazon.com/images/I/41Sep4yOJ2S.jpg';

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: 'Studio Box',
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: 'Backdrop',
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: 'Studio Box',
    price: 2100,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: 'Backdrop',
    price: 2100,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: 'Studio Box',
    price: 1000,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: 'Backdrop',
    price: 600,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: 'Backdrop',
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      'dashboard-product-box',
      'Products',
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main>{Table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
