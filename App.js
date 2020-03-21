import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloNavigtionScreen from './sample/HelloNavigation';
import MoveNavigationScreen from './sample/MoveNavigation';
import PassingNavigationScreen from './sample/PassingNavigation';
import ConfigHeaderScreen from './sample/ConfigHeader';
import HeaderButtonScreen from './sample/HeaderButton';
import NestingNavigatorScreen from './sample/NestingNavigator';
import OpenModalScreen from './sample/Modal';
/**
sample 보는순서
  1. HelloNavigtionScreen : Hello World!
  2. MoveNavigationScreen : 자유자재로 화면을 전환해봅시다!
  3. PassingNavigationScreen : 화면 전환시 데이터를 전달해 봅시다!
  4. ConfigHeaderScreen : 헤더설정
  5. HeaderButtonScreen : 헤더의 버튼 셋팅
  6. NestingNavigatorScreen : 네비게이션 안에 또 다른 네비게이션을 넣을 수 있어요! (feat. 탭)
  7. OpenModalScreen : 네비게이션에서 모달을 사용해 보아요
 */
export default function App() {
  return (
    <HelloNavigtionScreen/>
  );
}
