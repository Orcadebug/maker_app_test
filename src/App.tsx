/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  Bot, 
  CheckCircle2, 
  Wallet, 
  Cloud, 
  Code2, 
  BarChart3, 
  Utensils, 
  Play, 
  Plus, 
  Home, 
  LayoutGrid, 
  Settings, 
  ArrowLeft, 
  User, 
  Key, 
  Palette, 
  LogOut,
  ChevronRight,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Screen = 'dashboard' | 'create' | 'profile';

// --- Components ---

const Dashboard = ({ onNavigate, key }: { onNavigate: (screen: Screen) => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-32"
    >
      {/* Header */}
      <div className="pt-12 px-6 pb-6 flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Welcome back</p>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-serif font-semibold tracking-tight">Hello, Maker</h1>
            <button 
              onClick={() => onNavigate('profile')}
              className="size-8 rounded-full bg-cover bg-center border-2 border-white shadow-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>
        </div>
        <button className="size-10 rounded-full bg-pastel-beige/50 flex items-center justify-center text-dark-text hover:bg-pastel-beige transition-colors mt-2">
          <Settings className="size-5" />
        </button>
      </div>

      {/* Search */}
      <div className="px-6 pb-8">
        <div className="relative flex items-center w-full h-14 rounded-2xl bg-pastel-beige/40 focus-within:bg-pastel-beige/60 transition-all px-4 group">
          <input 
            className="w-full h-full bg-transparent border-none text-dark-text placeholder:text-gray-500 focus:ring-0 text-base font-medium" 
            placeholder="Search your projects..." 
            type="text"
          />
          <ArrowUpRight className="size-5 text-gray-500 group-focus-within:text-dark-text transition-colors" />
        </div>
      </div>

      {/* Featured Apps */}
      <div className="px-6 mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-serif font-semibold">Featured Apps</h2>
          <button className="text-gray-400 hover:text-dark-text transition-colors">
            <LayoutGrid className="size-5" />
          </button>
        </div>
        <div className="relative h-64 w-full rounded-4xl bg-white/50 p-6 overflow-hidden shadow-sm border border-white/20">
          {/* AI Chat Bubble */}
          <div className="absolute -top-4 -right-4 size-32 rounded-full bg-pastel-blue opacity-80 flex flex-col items-center justify-center shadow-sm text-white">
            <Bot className="size-8 mb-1" />
            <span className="text-xs font-medium">AI Chat</span>
          </div>
          {/* Habit Bubble */}
          <div className="absolute top-12 left-4 size-28 rounded-full bg-pastel-sage opacity-90 flex flex-col items-center justify-center shadow-sm text-white">
            <CheckCircle2 className="size-7 mb-1" />
            <span className="text-xs font-medium">Habit</span>
          </div>
          {/* Spendly Bubble */}
          <div className="absolute bottom-4 right-12 size-24 rounded-full bg-pastel-rose opacity-90 flex flex-col items-center justify-center shadow-sm text-white">
            <Wallet className="size-6 mb-1" />
            <span className="text-xs font-medium">Spendly</span>
          </div>
          {/* Weather Bubble */}
          <div className="absolute bottom-8 left-16 size-20 rounded-full bg-pastel-yellow opacity-80 flex flex-col items-center justify-center shadow-sm text-gray-800">
            <Cloud className="size-5 mb-1" />
            <span className="text-[10px] font-medium">Weather</span>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-serif font-semibold">Recent Projects</h2>
          <button className="text-gray-400">
            <span className="text-2xl font-light">...</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <ProjectItem 
            icon={<Code2 className="size-6" />} 
            title="E-commerce Assistant" 
            subtitle="Draft • 2h ago" 
            color="bg-pastel-rose/20 text-pastel-rose" 
            bgColor="bg-pastel-beige/30"
          />
          <ProjectItem 
            icon={<BarChart3 className="size-6" />} 
            title="Fitness Tracker Pro" 
            subtitle="Published v1.2" 
            color="bg-pastel-sage/30 text-pastel-sage" 
            bgColor="bg-pastel-sage/20"
          />
          <ProjectItem 
            icon={<Utensils className="size-6" />} 
            title="Recipe Generator" 
            subtitle="Draft • 3d ago" 
            color="bg-pastel-blue/30 text-pastel-blue" 
            bgColor="bg-pastel-blue/20"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectItem = ({ icon, title, subtitle, color, bgColor }: any) => (
  <button className={`flex items-center p-5 rounded-3xl ${bgColor} hover:opacity-80 transition-all group text-left w-full`}>
    <div className={`size-14 rounded-2xl ${color} flex items-center justify-center shrink-0 mr-4`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg font-medium truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate mt-0.5">{subtitle}</p>
    </div>
    <div className="shrink-0 ml-2 size-10 rounded-full bg-white/50 flex items-center justify-center">
      <Play className="size-5 text-gray-400 fill-gray-400" />
    </div>
  </button>
);

const Create = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-40 px-6 pt-12"
    >
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2 font-medium">Create</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight font-sans">
          What do you <br /> want to build?
        </h1>
      </div>

      <div className="mb-10">
        <div className="relative flex flex-col items-center justify-center gap-6 rounded-3xl bg-white shadow-soft p-8 min-h-[280px] overflow-hidden border border-white/20">
          <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-pastel-sage/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 bg-pastel-blue/20 rounded-full blur-3xl"></div>
          
          <div className="w-24 h-24 rounded-full bg-pastel-rose/10 flex items-center justify-center mb-2 shadow-inner relative z-10">
            <Sparkles className="size-10 text-dark-text animate-pulse" />
          </div>
          
          <div className="text-center max-w-[280px] relative z-10">
            <h2 className="text-xl font-semibold mb-3">AI Canvas</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Describe your app idea below, and I'll generate the interface right here.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-500 mb-4 px-1">Try these examples</h3>
        <div className="flex flex-col gap-3">
          <ExampleItem icon={<Zap className="size-5" />} title="Fitness Tracker" color="bg-[#f5e8e4]" />
          <ExampleItem icon={<Utensils className="size-5" />} title="Recipe Manager" color="bg-[#e2f2eb]" />
          <ExampleItem icon={<CheckCircle2 className="size-5" />} title="Habit Tracker" color="bg-[#e0e3ff]" />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-[100px] left-0 right-0 max-w-md mx-auto px-6 pointer-events-none">
        <div className="relative bg-white rounded-full shadow-lg pointer-events-auto flex items-center p-2 pl-6 border border-gray-100">
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 py-3 px-0 text-base text-dark-text placeholder-gray-400 font-medium" 
            placeholder="Describe your mini-app..." 
          />
          <button className="w-12 h-12 rounded-full bg-dark-text text-white hover:bg-gray-800 transition-colors shrink-0 flex items-center justify-center ml-2">
            <ArrowUpRight className="size-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ExampleItem = ({ icon, title, color }: any) => (
  <button className={`flex items-center p-4 rounded-3xl ${color} hover:opacity-90 transition-opacity w-full text-left group`}>
    <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center mr-4 shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-medium">{title}</h4>
    </div>
    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
      <ChevronRight className="size-4" />
    </div>
  </button>
);

const Profile = ({ onBack, key }: { onBack: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-12"
    >
      <div className="p-6 flex items-center justify-between sticky top-0 bg-pastel-bg/80 backdrop-blur-md z-10">
        <button 
          onClick={onBack}
          className="size-10 rounded-full bg-pastel-beige/50 flex items-center justify-center hover:bg-pastel-beige transition-colors"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button className="size-10 rounded-full bg-pastel-beige/50 flex items-center justify-center hover:bg-pastel-beige transition-colors">
          <Settings className="size-5" />
        </button>
      </div>

      <div className="flex flex-col items-center pt-8 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pastel-rose/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 left-[-4rem] w-64 h-64 bg-pastel-sage/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="size-36 rounded-full bg-cover bg-center border-4 border-white shadow-md mb-6 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Jane Smith" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight mb-2">Jane Smith</h1>
          <div className="bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30 text-sm text-gray-500 font-medium">
            jane.smith@example.com
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-4">
        <SettingsItem icon={<User className="size-6" />} title="Account Settings" color="bg-pastel-beige/40" />
        <SettingsItem icon={<Key className="size-6" />} title="API Keys" color="bg-pastel-sage/20" />
        <SettingsItem 
          icon={<Palette className="size-6" />} 
          title="Theme Preferences" 
          subtitle="Light Mode" 
          color="bg-pastel-blue/20" 
        />
        
        <div className="flex items-center justify-between bg-white px-5 py-5 rounded-[24px] border border-gray-100 shadow-sm mt-2">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
              <Code2 className="size-6 text-gray-600" />
            </div>
            <div>
              <p className="text-lg font-medium">Developer Mode</p>
              <p className="text-sm text-gray-400">Advanced features</p>
            </div>
          </div>
          <div className="w-12 h-7 bg-gray-200 rounded-full relative cursor-pointer">
            <div className="absolute left-1 top-1 size-5 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-pastel-rose/10 text-pastel-rose px-5 py-5 rounded-[24px] font-medium text-lg mt-4 hover:bg-pastel-rose/20 transition-colors">
          <LogOut className="size-5" />
          Sign Out
        </button>

        <p className="text-center text-sm text-gray-400 mt-8">Maker App v1.2.4</p>
      </div>
    </motion.div>
  );
};

const SettingsItem = ({ icon, title, subtitle, color }: any) => (
  <button className={`flex items-center justify-between p-5 rounded-[24px] ${color} hover:opacity-80 transition-all text-left w-full`}>
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-full bg-white/40 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
    <div className="size-8 rounded-full bg-white/40 flex items-center justify-center">
      <Play className="size-4 text-gray-600 fill-gray-600" />
    </div>
  </button>
);

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  return (
    <div className="min-h-screen bg-pastel-bg max-w-md mx-auto relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'dashboard' && (
          <Dashboard key="dashboard" onNavigate={setCurrentScreen} />
        )}
        {currentScreen === 'create' && (
          <Create key="create" />
        )}
        {currentScreen === 'profile' && (
          <Profile key="profile" onBack={() => setCurrentScreen('dashboard')} />
        )}
      </AnimatePresence>

      {/* Navigation Dock */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
        <div className="bg-white rounded-full p-2 shadow-xl flex items-center gap-2 pointer-events-auto border border-gray-100">
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className={`flex items-center justify-center size-12 rounded-full transition-all ${currentScreen === 'dashboard' ? 'bg-dock-bg text-white' : 'text-gray-400 hover:bg-gray-50'}`}
          >
            <Home className="size-6" />
          </button>
          
          <button 
            onClick={() => setCurrentScreen('create')}
            className={`flex items-center justify-center size-12 rounded-full transition-all ${currentScreen === 'create' ? 'bg-dock-bg text-white' : 'text-gray-400 hover:bg-gray-50'}`}
          >
            <Plus className="size-6" />
          </button>

          <button 
            onClick={() => setCurrentScreen('profile')}
            className={`flex items-center justify-center size-12 rounded-full transition-all ${currentScreen === 'profile' ? 'bg-dock-bg text-white' : 'text-gray-400 hover:bg-gray-50'}`}
          >
            <LayoutGrid className="size-6" />
          </button>
        </div>
      </div>

      {/* Floating Action Button (only on dashboard) */}
      {currentScreen === 'dashboard' && (
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setCurrentScreen('create')}
          className="fixed bottom-28 right-6 size-14 bg-dark-text text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
        >
          <Plus className="size-7" />
        </motion.button>
      )}
    </div>
  );
}
