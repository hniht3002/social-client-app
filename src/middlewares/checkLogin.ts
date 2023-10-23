
export const checkAuthen = () => {
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
  
    return !!token; // Trả về true nếu token tồn tại, ngược lại trả về false
  };
  