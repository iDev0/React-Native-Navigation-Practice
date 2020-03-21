import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloNavigtionScreen from './sample/HelloNavigation';
import MoveNavigationScreen from './sample/MoveNavigation';
import PassingNavigationScreen from './sample/PassingNavigation';
import ConfigHeaderScreen from './sample/ConfigHeader';


/**
sample 보는순서
  1. HelloNavigtionScreen : Hello World!
  2. MoveNavigationScreen : 자유자재로 화면을 전환해봅시다!
  3. PassingNavigationScreen : 화면 전환시 데이터를 전달해 봅시다!
  4. ConfigHeaderScreen : 헤더설정
 */
export default function App() {
  return (
    <HelloNavigtionScreen/>
  );
}
