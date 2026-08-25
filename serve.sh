#!/usr/bin/env bash
# Lance un serveur local de prévisualisation sur http://localhost:8080
set -e
cd "$(dirname "$0")"
PORT="${1:-8080}"
echo "Portfolio disponible sur http://localhost:${PORT}"
python3 -m http.server "$PORT"
