import React, { useState } from 'react';
import { Dialog, Button } from 'tdesign-react';
import type { DialogProps } from 'tdesign-react';

export default function BasicUsage() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  const onConfirm: DialogProps['onConfirm'] = (context) => {
    console.log('点击了确认按钮', context);
    setVisible(false);
  };
  const onCancel: DialogProps['onCancel'] = (context) => {
    console.log('点击了取消按钮', context);
  };
  const onClickCloseBtn: DialogProps['onCloseBtnClick'] = (context) => {
    console.log('点击了关闭按钮', context);
  };
  const onKeydownEsc: DialogProps['onEscKeydown'] = (context) => {
    console.log('按下了ESC', context);
  };
  const onClickOverlay: DialogProps['onOverlayClick'] = (context) => {
    console.log('点击了蒙层', context);
  };
  const handleClose: DialogProps['onClose'] = (context) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
    setVisible(false);
  };
  return (
    <>
      <Button theme="primary" onClick={handleClick}>
        Open Modal
      </Button>
      <Dialog
        header="Basic Modal"
        visible={visible}
        confirmOnEnter
        onClose={handleClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onEscKeydown={onKeydownEsc}
        onCloseBtnClick={onClickCloseBtn}
        onOverlayClick={onClickOverlay}
      >
        <p>This is a dialog</p>
      </Dialog>
    </>
  );
}
