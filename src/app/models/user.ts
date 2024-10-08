export interface User {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    ip_address?: string;
    phone?: string;
    role?: "Admin" | "User"; // Phân quyền
    address?: string; // Địa chỉ
    avatar?: string; // Đường dẫn ảnh đại diện
    userId?: number; // ID của người dùng
    number?: string; // Số nhà
}
