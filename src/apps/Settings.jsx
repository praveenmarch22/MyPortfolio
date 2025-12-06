import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Moon,
  Sun,
  Monitor,
  Eye,
  EyeOff,
  Palette,
  Sparkles,
  Zap,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Save,
  RotateCcw
} from 'lucide-react';

export default function Settings() {
  // Load settings from localStorage or use defaults
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('portfolioSettings');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      showAssistiveTouch: true,
      cursorGlow: true,
      animations: true,
      notifications: true,
      soundEffects: false,
      autoSave: true,
    };
  });

  const [isSaving, setIsSaving] = useState(false);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolioSettings', JSON.stringify(settings));

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('settingsChanged', { detail: settings }));
  }, [settings]);

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleThemeChange = (theme) => {
    setSettings(prev => ({
      ...prev,
      theme: theme
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  const handleReset = () => {
    const defaultSettings = {
      theme: 'dark',
      showAssistiveTouch: true,
      cursorGlow: true,
      animations: true,
      notifications: true,
      soundEffects: false,
      autoSave: true,
    };
    setSettings(defaultSettings);
    localStorage.setItem('portfolioSettings', JSON.stringify(defaultSettings));
  };

  const SettingItem = ({ icon: Icon, title, description, children }) => (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-gray-700/50 transition-colors">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full sm:w-auto">
          <div className="p-2 sm:p-3 bg-blue-500/20 rounded-lg shrink-0">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div className="ml-11 sm:ml-0 shrink-0">
          {children}
        </div>
      </div>
    </div>
  );

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={onChange}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${enabled ? 'bg-blue-500' : 'bg-gray-600'
        }`}
    >
      <motion.div
        layout
        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
        animate={{ x: enabled ? 30 : 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </button>
  );

  return (
    // Added pt-7 (28px) here to offset content from the fixed MenuBar
    <div className="h-full overflow-y-auto bg-gray-900 pt-7">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-sm sm:text-base text-gray-400">Customize your portfolio experience</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Appearance Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Palette className="w-6 h-6 text-blue-400" />
              Appearance
            </h2>

            {/* Theme Selector */}
            <SettingItem
              icon={settings.theme === 'dark' ? Moon : settings.theme === 'light' ? Sun : Monitor}
              title="Theme"
              description="Choose your preferred color scheme"
            >
              <div className="flex gap-2">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`p-3 rounded-lg border-2 transition-all ${settings.theme === 'light'
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                    }`}
                  title="Light Mode"
                >
                  <Sun className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`p-3 rounded-lg border-2 transition-all ${settings.theme === 'dark'
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                    }`}
                  title="Dark Mode"
                >
                  <Moon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleThemeChange('auto')}
                  className={`p-3 rounded-lg border-2 transition-all ${settings.theme === 'auto'
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                    }`}
                  title="Auto (System)"
                >
                  <Monitor className="w-5 h-5" />
                </button>
              </div>
            </SettingItem>

            {/* Cursor Glow */}
            <SettingItem
              icon={Sparkles}
              title="Cursor Glow Effect"
              description="Show decorative glow effect that follows your cursor (Desktop only)"
            >
              <Toggle
                enabled={settings.cursorGlow}
                onChange={() => handleToggle('cursorGlow')}
              />
            </SettingItem>
          </div>

          {/* Interface Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-blue-400" />
              Interface
            </h2>

            {/* AssistiveTouch */}
            <SettingItem
              icon={settings.showAssistiveTouch ? Eye : EyeOff}
              title="AssistiveTouch"
              description="Show floating assistive touch button for quick actions"
            >
              <Toggle
                enabled={settings.showAssistiveTouch}
                onChange={() => handleToggle('showAssistiveTouch')}
              />
            </SettingItem>

            {/* Animations */}
            <SettingItem
              icon={Zap}
              title="Animations"
              description="Enable smooth animations and transitions throughout the app"
            >
              <Toggle
                enabled={settings.animations}
                onChange={() => handleToggle('animations')}
              />
            </SettingItem>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Bell className="w-6 h-6 text-blue-400" />
              Notifications & Audio
            </h2>

            {/* Notifications */}
            <SettingItem
              icon={settings.notifications ? Bell : BellOff}
              title="Notifications"
              description="Receive notifications about updates and interactions"
            >
              <Toggle
                enabled={settings.notifications}
                onChange={() => handleToggle('notifications')}
              />
            </SettingItem>

            {/* Sound Effects */}
            <SettingItem
              icon={settings.soundEffects ? Volume2 : VolumeX}
              title="Sound Effects"
              description="Play sound effects for interactions and actions"
            >
              <Toggle
                enabled={settings.soundEffects}
                onChange={() => handleToggle('soundEffects')}
              />
            </SettingItem>
          </div>

          {/* Advanced Section */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Wifi className="w-6 h-6 text-blue-400" />
              Advanced
            </h2>

            {/* Auto Save */}
            <SettingItem
              icon={Save}
              title="Auto Save"
              description="Automatically save your settings and preferences"
            >
              <Toggle
                enabled={settings.autoSave}
                onChange={() => handleToggle('autoSave')}
              />
            </SettingItem>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-700/50">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Save className="w-4 h-4 sm:w-5 sm:h-5" />
              {isSaving ? 'Saved!' : 'Save Settings'}
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              Reset to Default
            </button>
          </div>

          {/* Info */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-300">
              💡 <strong>Tip:</strong> Your settings are automatically saved to your browser and will persist across sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}