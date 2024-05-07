import { ReactElement } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Column } from 'react-table';
import { useState, useCallback } from 'react';
import TableHOC from '../components/TableHOC';
import { FaTrash } from 'react-icons/fa';

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: 'Photo',
    accessor: 'avatar',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
];
const img =
  'https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-1/283757205_3107637869552360_520929035391470363_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Un_lH7F2GZAQ7kNvgEHjntj&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfCpb67K7PukoCUahXqp7KAgRZhJtzPlVO96oI5MTxM1oQ&oe=6639446C';
const img2 =
  'https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/93234288_2511684822481004_4233038965717860352_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=juQaBn0brm4Q7kNvgFlB5dq&_nc_oc=Adg0oKvafIQuOsCjpZYfLQER6B2wsyqYkW2UmcavBf7d7y57nyYaNHd2Ow7wG1GHhPMkFBmPYFcpEck4t5cGmqSN&_nc_ht=scontent.fpkr1-1.fna&oh=00_AfBzlCAEMagBZgVp6c4x3RvUzadlSOO6Yf5qkg3NtUJT9w&oe=665AE871';

const Customers = () => {
  const [data] = useState<DataType[]>([
    {
      avatar: (
        <img
          style={{
            borderRadius: '50%',
          }}
          src={img}
          alt="Shoes"
        />
      ),
      name: 'arbin Khadka',
      email: 'arbin.com',
      gender: 'Male',
      role: 'user',
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },

    {
      avatar: (
        <img
          style={{
            borderRadius: '50%',
          }}
          src={img2}
          alt="Shoes"
        />
      ),
      name: 'Arbin Khadka',
      email: 'arbin.com',
      gender: 'Male',
      role: 'admin',
      action: (
        <button>
          <FaTrash />
        </button>
      ),
    },
  ]);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      'dashboard-product-box',
      'Customers',
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Customers;
