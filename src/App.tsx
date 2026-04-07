import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Music, Camera, Mic, Users, CreditCard, Phone, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const CherryBlossom = ({ delay, duration, x }: { delay: number, duration: number, x: number }) => (
  <motion.div
    initial={{ y: -50, x: `${x}vw`, opacity: 0, rotate: 0 }}
    animate={{ 
      y: '100vh', 
      x: `${x + (Math.random() * 20 - 10)}vw`,
      opacity: [0, 1, 1, 0],
      rotate: 360 
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity,
      ease: "linear" 
    }}
    className="fixed top-0 w-3 h-3 md:w-4 md:h-4 bg-pink-300 rounded-full blur-[1px] z-0 pointer-events-none"
    style={{
      boxShadow: '0 0 10px 2px rgba(244, 114, 182, 0.6)'
    }}
  />
);

export default function App() {
  const [blossoms, setBlossoms] = useState<Array<{id: number, delay: number, duration: number, x: number}>>([]);

  useEffect(() => {
    const newBlossoms = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      x: Math.random() * 100
    }));
    setBlossoms(newBlossoms);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative font-sans selection:bg-pink-500 selection:text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      {blossoms.map(b => (
        <CherryBlossom key={b.id} delay={b.delay} duration={b.duration} x={b.x} />
      ))}

      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            SPRING PARTY
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-200 mb-4 tracking-widest">
            포항댄스사랑
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            SINCE 2000, 봄을 맞이하여 열리는 특별한 댄스 파티입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Date & Location */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-pink-500/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-pink-300 flex items-center gap-3">
              <Calendar className="w-6 h-6" /> 일시 및 장소
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500/20 p-3 rounded-2xl">
                  <Calendar className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">날짜</p>
                  <p className="text-lg font-medium">2026년 4월 10일 (금)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-2xl">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">시간</p>
                  <p className="text-lg font-medium">오후 9시 (PM 9)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">장소</p>
                  <p className="text-lg font-medium">포항댄스사랑 4층</p>
                  <p className="text-sm text-gray-500 mt-1">포항시 남구 중앙로 112, 4층</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Program & Lineup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-purple-500/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-3">
              <Sparkles className="w-6 h-6" /> 주요 프로그램 및 출연진
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500/20 p-3 rounded-2xl">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">공연</p>
                  <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">난다 & 나라 필댄스팀</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-4">라인업</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
                    <Music className="w-5 h-5 text-pink-400" />
                    <div>
                      <p className="text-xs text-gray-500">DJ</p>
                      <p className="font-medium">마이클</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
                    <Camera className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-xs text-gray-500">포토</p>
                      <p className="font-medium">도베르만</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
                    <Mic className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-xs text-gray-500">MC</p>
                      <p className="font-medium">뿌까</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl">
                <p className="text-sm text-purple-200 text-center">
                  ✨ 초대 게스트: 동호회 시샵님, 강사 및 프로 댄스님 환영 ✨
                </p>
              </div>
            </div>
          </motion.div>

          {/* Registration & Fee */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-blue-500/20 p-8 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-shadow duration-300 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
              <CreditCard className="w-6 h-6" /> 참가 신청 및 비용
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50">
                <div>
                  <p className="text-sm text-gray-400 mb-1">예매</p>
                  <p className="text-2xl font-bold text-blue-400">1.5<span className="text-lg text-blue-300 font-medium">만원</span></p>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">현매</p>
                  <p className="text-2xl font-bold text-gray-300">2.0<span className="text-lg text-gray-400 font-medium">만원</span></p>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-2xl">
                <p className="text-sm text-yellow-500 mb-1">입금 계좌</p>
                <p className="text-lg font-medium text-yellow-300 tracking-wider">카카오뱅크 3333-35794-9768</p>
                <p className="text-sm text-yellow-500/80 mt-1">예금주: 이미란</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">신청 방법</p>
                  <p className="text-lg font-medium">네이버 카페</p>
                </div>
                <div className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-bold border border-pink-500/30">
                  120명 한정
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-xl border border-pink-500/30 p-8 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] transition-shadow duration-300 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
            
            <div className="bg-pink-500/20 p-4 rounded-full mb-6 relative z-10">
              <Phone className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">문의처</h3>
            <p className="text-gray-300 mb-6 relative z-10">궁금한 점이 있으신가요?</p>
            
            <div className="bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 w-full max-w-sm relative z-10">
              <p className="text-sm text-pink-300 mb-1">담당자: 나미리</p>
              <p className="text-2xl font-bold tracking-wider text-white">010-3314-6666</p>
            </div>
          </motion.div>

        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="https://cafe.naver.com/pohangdancelove/1952" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full skew-x-12 transition-transform duration-700 ease-out"></div>
            <Sparkles className="w-6 h-6 animate-pulse" />
            파티 신청하러 가기
            <Sparkles className="w-6 h-6 animate-pulse" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center text-gray-600 text-sm"
        >
          <p>© 2026 포항댄스사랑. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
