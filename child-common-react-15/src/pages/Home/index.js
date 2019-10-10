import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@alifd/next';
import { appHistory } from '@ice/stark-app';
import IceContainer from '@icedesign/container';
import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <IceContainer>
      <PageTitle title="首页" />
      <Link to="/about">子应用内跳转</Link>
      <br />
      <Button type="primary" onClick={() => {
        appHistory.push('/seller');
      }}>子应用间跳转</Button>
      <br />
    </IceContainer>
  );
}
