import { useSignal } from "@preact/signals";
import React from 'react';
import Footer from '../components/Footer.tsx'
import RandImage from '../islands/img.tsx'

export default function Home() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow text-lg text-red-100" style="background-color: #5c6748;">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-16">情侣游戏</h1>
        <RandImage></RandImage>

        <h5 class="my-4">↑</h5>
        <h5 class="my-4">这素我女朋友</h5>
        <div class="text-left leading-8 font-black mt-8">
        </div>
        <div class="text-center mt-8">
          {/* <div class="font-black my-4">游戏列表</div> */}
          <a href="/card" class="block px-4 my-4 border rounded underline w-60" style="background-color: #171a12;">任务卡牌</a>
          <a href="/fxq/index.html" class="block px-4 my-4 border roundedunderline w-60" style="background-color: #171a12;">飞行棋</a>
          
        </div>
      </div>
    </div>
  );
}
