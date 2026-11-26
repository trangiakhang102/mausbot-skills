#!/bin/bash
# Chạy CLI openmausbot đi kèm app (không cần cài thêm)
# Tự dùng ~/.AI không — token nằm cạnh script: .omb-token (chmod 600), không in ra.
DIR="$(cd "$(dirname "$0")" && pwd)"
APP=/Applications/OpenMausBot.app/Contents
TOKEN_FILE="$DIR/.omb-token"
PORT="${OMB_PORT:-8799}"
args=("$@")
# Gắn --token-file / --port sau verb, trừ khi lệnh đã có hoặc là help/--version
if [[ -f "$TOKEN_FILE" && ${#args[@]} -gt 0 ]]; then
  case "${args[0]}" in
    help|--help|-h|--version) ;;
    *)
      has_tf=0; has_port=0
      for a in "${args[@]}"; do
        [[ "$a" == "--token-file" ]] && has_tf=1
        [[ "$a" == "--port" || "$a" == "--url" ]] && has_port=1
      done
      extra=()
      [[ $has_tf -eq 0 ]] && extra+=(--token-file "$TOKEN_FILE")
      [[ $has_port -eq 0 ]] && extra+=(--port "$PORT")
      args+=("${extra[@]}")
      ;;
  esac
fi
export ELECTRON_RUN_AS_NODE=1
exec "$APP/MacOS/OpenMausBot" "$APP/Resources/server/openmausbot.js" "${args[@]}"
