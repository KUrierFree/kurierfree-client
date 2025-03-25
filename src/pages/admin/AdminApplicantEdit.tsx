import React from "react";
import StudentTable from "../../components/admin/StudentTable";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const AdminApplicantEdit: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StudentTable />
      <Footer />
    </div>
  );
};

export default AdminApplicantEdit;
