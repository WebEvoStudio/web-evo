import React from 'react';

const DashboardLayout = (props: {children: React.ReactNode}) => {
  const {children} = props;
  return (
    <>
      {children}
    </>
  );
};
export default DashboardLayout;
