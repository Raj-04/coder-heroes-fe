import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {
  UserOutlined,
  BarChartOutlined,
  ReadOutlined,
  DollarOutlined,
} from '@ant-design/icons';
import { getStats } from '../../../redux/actions/instructorActions';

const initialValues = [
  {
    icon: <UserOutlined />,
    title: 'My Students',
    value: 0,
  },
  {
    icon: <BarChartOutlined />,
    title: 'Active Course',
    value: 0,
  },
  {
    icon: <ReadOutlined />,
    title: 'Total Course',
    value: 0,
  },
  {
    icon: <BarChartOutlined />,
    title: 'Completed Course',
    value: 0,
  },
  {
    icon: <DollarOutlined />,
    title: 'Total Earnings',
    value: '$' + '0',
  },
];

function InstructorStats() {
  const { Meta } = Card;
  const [stats, setStats] = useState(initialValues);

  useEffect(() => {
    setStats(getStats());
  });

  return (
    <>
      <div class="stats-wrapper">
        {stats.map(stat => {
          return (
            <Card id="ant-card-stat">
              <Meta
                avatar={stat.icon}
                title={stat.title}
                description={stat.value}
              />
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default InstructorStats;
