export function formatMoneyVND(number) {
    if (isNaN(number)) {
      return '0';
    }
  
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  
    // Lấy giá trị được định dạng và loại bỏ ký hiệu tiền tệ
    const formattedValue = formatter.format(number);
    const valueWithoutCurrencySymbol = formattedValue.replace(/₫/g, '');
  
    return valueWithoutCurrencySymbol.trim();
  }