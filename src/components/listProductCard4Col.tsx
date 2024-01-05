import React from 'react';
import { Tabs } from 'flowbite-react';
import { ProductCard } from '@/components/productCard';

const sampleProduct = {
  name: 'Sample Product',
  src: 'https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
  price: 19.99,
  brand: 'Sample Brand',
  sale: 10,
};

const ProductGridTab4Col: React.FC = () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const cellWidth = 32;  // Giả sử w-32
const desiredTotalItems = 12;

// Tính số lượng item trong mỗi hàng dựa trên kích thước chiều rộng màn hình và chiều rộng của mỗi ô
const itemsPerRow = Math.floor(screenWidth / cellWidth / 2);

// Tính số hàng để đảm bảo tổng số lượng item là 20
const numberOfRows = Math.ceil(desiredTotalItems / itemsPerRow);

// Tạo mảng 2 chiều dựa trên số lượng item trong mỗi hàng và số hàng
const gridData = Array.from({ length: numberOfRows }, (_, rowIndex) =>
  Array.from({ length: itemsPerRow }, (_, colIndex) => colIndex + rowIndex * itemsPerRow)
);

  return (
    <Tabs.Item title="Sản phẩm bán">
      <div className="grid grid-cols-4 gap-2 mb-6">
        {gridData.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((colIndex) => (
              <div key={colIndex}>
                <ProductCard product={sampleProduct} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </Tabs.Item>
  );
};

export default ProductGridTab4Col;

