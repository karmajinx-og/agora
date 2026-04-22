import { invoke } from '@tauri-apps/api/core'

export type InstallStatus = 'idle' | 'installing' | 'success' | 'error'

export interface InstallResult {
  success: boolean
  message: string
}

// Install a Flatpak app by ID
export async function installFlatpak(appId: string): Promise<InstallResult> {
  try {
    await invoke('run_flatpak', {
      args: ['install', '--user', '--noninteractive', '--assumeyes', 'flathub', appId]
    })
    return { success: true, message: `${appId} installed successfully.` }
  } catch (err) {
    return { success: false, message: String(err) }
  }
}

// Check if flatpak is available on the system
export async function isFlatpakAvailable(): Promise<boolean> {
  try {
    await invoke('run_flatpak', { args: ['--version'] })
    return true
  } catch {
    return false
  }
}

// Check if an app is already installed
export async function isAppInstalled(appId: string): Promise<boolean> {
  try {
    await invoke('run_flatpak', { args: ['info', '--user', appId] })
    return true
  } catch {
    return false
  }
}
