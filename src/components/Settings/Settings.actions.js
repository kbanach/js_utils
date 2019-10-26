export const SettingsActions = {
  LOAD_PRESET: 'LOAD_PRESET',
  RESET_SETTINGS: 'RESET_SETTINGS',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  SHOW_ADVANCED: 'SHOW_ADVANCED_SETTINGS',
  HIDE_ADVANCED: 'HIDE_ADVANCED_SETTINGS',
};

export function loadSettingsPreset(preset) {
  return {
    type: SettingsActions.LOAD_PRESET,
    preset,
  };
}

export function resetSettings() {
  return {
    type: SettingsActions.RESET_SETTINGS,
  };
}

export function updateSettings(settings) {
  return {
    type: SettingsActions.UPDATE_SETTINGS,
    settings,
  };
}

export function showAdvancedSettings() {
  return {
    type: SettingsActions.SHOW_ADVANCED,
  };
}

export function hideAdvancedSettings() {
  return {
    type: SettingsActions.HIDE_ADVANCED,
  };
}
