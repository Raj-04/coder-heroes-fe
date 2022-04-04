import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import InstructorAddedCoursesList from './InstructorAddedCoursesList';
import { Layout } from 'antd';
import Banner from '../../common/Banner';
import InstructorAddCourseForm from './InstructorAddCourseForm';

const { Content } = Layout;
const InstructorAddCourse = () => {
  return (
    <Layout>
      <InstructorSidebar />
      <Content>
        <Banner />
        <InstructorAddCourseForm />
        <InstructorAddedCoursesList />
      </Content>
    </Layout>
  );
};

export default InstructorAddCourse;
