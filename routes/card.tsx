import { Head } from "$fresh/runtime.ts";

import Footer from '../components/Footer.tsx'
export default function Card() {
  return (
    <>
      <Head>
        <link href="/card.css" rel="stylesheet"></link>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/howler.min.js"></script>
        <script src="/tasks.js"></script>
        <script src="/card.js"></script>
        <title>CardGame♣♦♥♠</title>
      </Head>
      <div class="w-full leading-8 min-h-screen text-shadow text-lg text-red-100" style="background-color: #5c6748;">
        <div class="max-w-screen-md mx-auto ">
          <div class="p-2 flex items-center w-full">
            <a class="flex-1" href="/">
              <img src="/logo.png" class="w-12 h-12" />
            </a>
            <div class="flex-auto text-center" ><span id="title">基础版</span>任务卡牌</div>
            <div class="flex-1 text-right" >
              
            </div>
          </div>
          <div class="flex my-4 justify-center">
            <input type="checkbox" id="card" checked />
            <label for="card">
              <div class="cardWrapper ">
                <div class="cardRandom h-full flex flex-col items-center">
                  <div class="flex-1"></div>
                  <div id="content" style="writing-mode: vertical-rl" class="p-4 flex-auto font-black text-3xl text-pink-600">
                  </div>
                  <div class="flex-1"></div>
                </div>
              </div>
            </label>
          </div>
          <div class="text-center">基本玩法：</div>
          <div class="text-center">轮流抽卡完成任务, 无法完成认输受惩罚</div>
        </div>
      </div>
    </>
  )
}