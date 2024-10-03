export interface User {
  id: number;
  name: string;
  email: string;
  role?: 'Admin' | 'User'; // Phân quyền
  avatar?: string; // Đường dẫn ảnh đại diện
}
