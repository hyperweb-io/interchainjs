#!/bin/bash

# Starship Port Redirection Script
# Redirects all starship exposed ports from host.docker.internal to localhost

# Define all starship ports based on kubectl port-forward output
declare -A STARSHIP_PORTS=(
    # Osmosis chain
    ["26657"]="osmosis-1 RPC"
    ["1317"]="osmosis-1 REST"
    ["8007"]="osmosis-1 Faucet"
    
    # Cosmos Hub chain  
    ["26653"]="cosmos-2 RPC"
    ["1313"]="cosmos-2 REST"
    ["8003"]="cosmos-2 Faucet"
    
    # Registry service
    ["8081"]="registry"
)

start_redirects() {
    echo "🚀 Starting starship port redirects..."
    echo "Redirecting all starship ports from host.docker.internal to localhost"
    echo ""
    
    # Kill any existing socat processes for starship ports
    for port in "${!STARSHIP_PORTS[@]}"; do
        sudo pkill -f "socat.*$port" 2>/dev/null || true
    done
    
    # Start redirects for all ports
    local pids=()
    for port in "${!STARSHIP_PORTS[@]}"; do
        local service="${STARSHIP_PORTS[$port]}"
        echo "🔗 Redirecting localhost:$port -> host.docker.internal:$port ($service)"
        sudo socat TCP-LISTEN:$port,fork,reuseaddr TCP:host.docker.internal:$port &
        local pid=$!
        pids+=($pid)
        echo "$pid" > "/tmp/starship-$port.pid"
    done
    
    echo ""
    echo "✅ All starship port redirects started:"
    echo "   🌌 Osmosis (osmosis-1):"
    echo "      RPC:    http://localhost:26657"
    echo "      REST:   http://localhost:1317" 
    echo "      Faucet: http://localhost:8007"
    echo ""
    echo "   🪐 Cosmos Hub (cosmos-2):"
    echo "      RPC:    http://localhost:26653"
    echo "      REST:   http://localhost:1313"
    echo "      Faucet: http://localhost:8003"
    echo ""
    echo "   📡 Registry:"
    echo "      REST:   http://localhost:8081"
    echo ""
    echo "Press Ctrl+C to stop all redirects..."
    
    # Wait for interrupt
    trap cleanup INT
    wait
}

stop_redirects() {
    echo "🛑 Stopping starship port redirects..."
    
    # Kill socat processes for all starship ports
    for port in "${!STARSHIP_PORTS[@]}"; do
        sudo pkill -f "socat.*$port" 2>/dev/null || true
        rm -f "/tmp/starship-$port.pid"
    done
    
    echo "✅ All starship port redirects stopped"
}

cleanup() {
    echo ""
    stop_redirects
    exit 0
}

status() {
    echo "🔍 Checking starship redirect status..."
    echo ""
    
    # Check if redirects are running
    local running_count=0
    local total_count=${#STARSHIP_PORTS[@]}
    
    for port in "${!STARSHIP_PORTS[@]}"; do
        local service="${STARSHIP_PORTS[$port]}"
        if pgrep -f "socat.*$port" > /dev/null; then
            echo "✅ $service (port $port): RUNNING"
            ((running_count++))
        else
            echo "❌ $service (port $port): STOPPED"
        fi
    done
    
    echo ""
    echo "📊 Status: $running_count/$total_count redirects running"
    
    # Test connectivity for key services
    echo ""
    echo "🧪 Testing connectivity..."
    
    # Test registry
    if curl -s http://localhost:8081/chains/osmosis-1 > /dev/null 2>&1; then
        echo "✅ Registry accessible at http://localhost:8081"
    else
        echo "❌ Registry not accessible at http://localhost:8081"
    fi
    
    # Test Osmosis RPC
    if curl -s http://localhost:26657/status > /dev/null 2>&1; then
        echo "✅ Osmosis RPC accessible at http://localhost:26657"
    else
        echo "❌ Osmosis RPC not accessible at http://localhost:26657"
    fi
    
    # Test Cosmos Hub RPC
    if curl -s http://localhost:26653/status > /dev/null 2>&1; then
        echo "✅ Cosmos Hub RPC accessible at http://localhost:26653"
    else
        echo "❌ Cosmos Hub RPC not accessible at http://localhost:26653"
    fi
}

case "$1" in
    start)
        start_redirects
        ;;
    stop)
        stop_redirects
        ;;
    status)
        status
        ;;
    restart)
        stop_redirects
        sleep 1
        start_redirects
        ;;
    *)
        echo "Usage: $0 {start|stop|status|restart}"
        echo ""
        echo "Commands:"
        echo "  start   - Start port redirects (localhost -> host.docker.internal)"
        echo "  stop    - Stop port redirects"
        echo "  status  - Check redirect status and connectivity"
        echo "  restart - Restart port redirects"
        exit 1
        ;;
esac