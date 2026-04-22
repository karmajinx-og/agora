#!/bin/bash
# ============================================================
# Agora Linux — Pi 5 Dev Setup
# Ubuntu 24.04 LTS / 4GB RAM
# Run once after first boot: bash agora-pi-setup.sh
# ============================================================

set -e
echo ""
echo "╔══════════════════════════════════════╗"
echo "║   Agora Linux — Pi 5 Bootstrap       ║"
echo "╚══════════════════════════════════════╝"
echo ""

# --- 1. System update ---
echo "▶ Updating system packages..."
sudo apt-get update -qq && sudo apt-get upgrade -y -qq

# --- 2. Core build tools ---
echo "▶ Installing build essentials..."
sudo apt-get install -y -qq \
  build-essential curl wget git \
  pkg-config libssl-dev

# --- 3. Tauri system dependencies ---
echo "▶ Installing Tauri dependencies..."
sudo apt-get install -y -qq \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  patchelf \
  libglib2.0-dev \
  libxdo-dev \
  libxcb-shape0-dev \
  libxcb-xfixes0-dev

# --- 4. Flatpak + Flathub ---
echo "▶ Setting up Flatpak + Flathub..."
sudo apt-get install -y -qq flatpak
flatpak remote-add --if-not-exists flathub \
  https://flathub.org/repo/flathub.flatpakrepo
echo "   Flatpak ready."

# --- 5. Rust via rustup ---
echo "▶ Installing Rust (this takes a few minutes)..."
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \
  | sh -s -- -y --quiet
source "$HOME/.cargo/env"
echo "   Rust $(rustc --version) installed."

# --- 6. Tauri CLI ---
echo "▶ Installing Tauri CLI (compiling — slowest step ~10-15 min)..."
cargo install tauri-cli --version "^2.0" --quiet
echo "   Tauri CLI ready."

# --- 7. Node via nvm ---
echo "▶ Installing Node.js via nvm..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh \
  | bash -s -- --no-use
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 22 --silent
nvm use 22
echo "   Node $(node --version) / npm $(npm --version) ready."

# --- 8. Add paths to .bashrc ---
echo "" >> "$HOME/.bashrc"
echo "# Agora dev environment" >> "$HOME/.bashrc"
echo 'source "$HOME/.cargo/env"' >> "$HOME/.bashrc"
echo 'export NVM_DIR="$HOME/.nvm"' >> "$HOME/.bashrc"
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> "$HOME/.bashrc"

# --- 9. Swap (helps with 4GB RAM during Rust compilation) ---
echo "▶ Configuring 2GB swap for Rust compilation..."
if [ ! -f /swapfile ]; then
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile -q
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab > /dev/null
  echo "   2GB swap enabled."
else
  echo "   Swap already exists, skipping."
fi

# --- 10. Clone / copy project placeholder ---
echo "▶ Creating Agora project directory..."
mkdir -p "$HOME/AGORA"
echo "   Place your project files in: $HOME/AGORA"

# --- Done ---
echo ""
echo "╔══════════════════════════════════════╗"
echo "║   Setup complete!                    ║"
echo "╚══════════════════════════════════════╝"
echo ""
echo "Versions installed:"
rustc --version
cargo --version
node --version
npm --version
flatpak --version
echo ""
echo "Next steps:"
echo "  1. Copy Agora project to ~/AGORA on this Pi"
echo "  2. cd ~/AGORA && npm install"
echo "  3. npm run tauri dev"
echo ""
