use tauri_plugin_shell::ShellExt;

#[tauri::command]
async fn run_flatpak(app: tauri::AppHandle, args: Vec<String>) -> Result<String, String> {
    let shell = app.shell();
    let output = shell
        .command("flatpak")
        .args(&args)
        .output()
        .await
        .map_err(|e| e.to_string())?;

    if output.status.success() {
        Ok(String::from_utf8_lossy(&output.stdout).to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![run_flatpak])
        .run(tauri::generate_context!())
        .expect("error while running Agora");
}
