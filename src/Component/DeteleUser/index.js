import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

import { usersService } from "../../service";

const DeleteUser = ({ id }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      await usersService.deleteUser(id);
      // không nên load lại cả page, fetch data mới cho bảng thôi --> 
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete User
      </Button>
      <Modal
        title="CẢNH BÁO"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn xóa ?</p>
      </Modal>
    </>
  );
};
export default DeleteUser;
