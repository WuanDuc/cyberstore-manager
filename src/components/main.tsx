'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';


const app = [
  { name: 'Laptop', value: 789 },
  { name: 'PC', value: 676 },
  { name: 'Linh kiện', value: 564 },
  { name: 'Phụ kiện', value: 234 },
];

const data = [
  {
    category: 'Thống kê',
    stat: '2,543',
    data: app
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl text-black">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Tổng lượt mua</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Loại sản phẩm</Text>
              <Text className="text-right">Lượt mua</Text>
            </Flex>

            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}