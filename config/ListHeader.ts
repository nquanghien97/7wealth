interface ListHeaderType {
  id: number;
  title: string;
  path: string;
  children?: ListHeaderType[]
}

export const ListHeader: ListHeaderType[] = [
  {
    id: 1,
    title: 'Về chúng tôi',
    path: '/ve-chung-toi'
  },
  {
    id: 2,
    title: 'Sản phẩm',
    path: '/san-pham',
    children: [
      {
        id: 21,
        title: 'Thực phẩm chức năng Vitamin khoáng chất',
        path: '#',
        children: [
          {
            id: 211,
            title: 'Dinh dưỡng thiết yếu hàng ngày',
            path: '#'
          },
          {
            id: 212,
            title: 'Thực phẩm quản lý cân nặng',
            path: '#'
          }
        ]
      },
      {
        id: 22,
        title: 'Thực phẩm chức năng hỗ trợ bệnh lý',
        path: '#',
        children: [
          {
            id: 221,
            title: 'Ngủ ngon',
            path: '#'
          }
        ]
      },
      {
        id: 23,
        title: 'Mỹ phẩm chăm sóc cá nhân',
        path: '#',
        children: [
          {
            id: 231,
            title: 'Chăn sóc da',
            path: '#'
          },
          {
            id: 232,
            title: 'Chăn sóc tóc',
            path: '#'
          },
          {
            id: 233,
            title: 'Chăn sóc body',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Hiểu biết về sức khỏe',
    path: '/kien-thuc',
    children: [
      {
        id: 31,
        title: 'Hiểu về cơ thể của bạn',
        path: '#',
        children: [
          {
            id: 311,
            title: 'Nam giới',
            path: '#'
          },
          {
            id: 312,
            title: 'Nữ giới',
            path: '#'
          }
        ]
      },
      {
        id: 32,
        title: 'Thấu hiểu tâm thức',
        path: '#',
        children: [
          {
            id: 321,
            title: 'Cấu trúc con người',
            path: '#'
          },
          {
            id: 322,
            title: 'Công thức cội nguồn cuộc sống',
            path: '#'
          },
          {
            id: 323,
            title: '7 sự giàu toàn diện',
            path: '#'
          }
        ]
      },
      {
        id: 33,
        title: 'Dinh dưỡng',
        path: '#',
        children: [
          {
            id: 331,
            title: 'Thể chất',
            path: '#'
          },
          {
            id: 332,
            title: 'Nguồn nguyên liệu',
            path: '#'
          },
          {
            id: 333,
            title: 'Làm đẹp',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Tin tức',
    path: '/tin-tuc',
    children: [
      {
        id: 41,
        title: 'Hoạt động xã hội',
        path: 'tin-tuc-xa-hoi',
        children: [
          {
            id: 411,
            title: 'Từ thiện',
            path: '#'
          },
          {
            id: 412,
            title: 'Ký kết chuyển giao công nghệ',
            path: '#'
          },
          {
            id: 413,
            title: 'Nhà máy',
            path: '#'
          }
        ]
      },
      {
        id: 42,
        title: 'Phát triển con người',
        path: '#',
        children: [
          {
            id: 421,
            title: 'Phát triển con người',
            path: '#'
          },
          {
            id: 422,
            title: 'Du lịch',
            path: '#'
          },
          {
            id: 423,
            title: 'YEP',
            path: '#'
          }
        ]
      },
    ]
  },
  {
    id: 5,
    title: 'Cơ hội kinh doanh',
    path: '/co-hoi-kinh-doanh',
    children: [
      {
        id: 51,
        title: 'Trở thành đại lý',
        path: '#'
      },
      {
        id: 52,
        title: 'Nhận vốn đầu tư',
        path: '#'
      },
      {
        id: 53,
        title: 'Gia nhập đơn vị 7WEALTH',
        path: '#'
      }
    ]
  },
]