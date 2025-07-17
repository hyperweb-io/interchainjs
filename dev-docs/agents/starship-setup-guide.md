# Starship Setup Guide for Development Environments

This guide provides complete setup instructions for running Starship integration tests in containerized and native development environments. It covers both Docker-based workflows and local development setups.

## Prerequisites Validation

### Kubernetes Tools
- **kubectl**: v1.33.2 - Kubernetes command-line tool
- **helm**: v3.18.3 - Kubernetes package manager
- **kind**: v0.22.0 - Kubernetes in Docker (for local clusters)

### Quick Setup Script
```bash
#!/bin/bash
# /workspace/debug/setup-starship.sh - Environment verification script

echo "=== Starship Environment Check ==="
echo "Node version: $(node --version)"
echo "Yarn version: $(yarn --version)"
echo "Kubectl version: $(kubectl version --client --short 2>/dev/null || echo 'Not found')"
echo "Helm version: $(helm version --short 2>/dev/null || echo 'Not found')"
echo "Kind version: $(kind version 2>/dev/null || echo 'Not found')"
echo ""
echo "=== Kubernetes Status ==="
kubectl cluster-info 2>/dev/null || echo "Kubernetes cluster not accessible"
echo ""
echo "=== Project Status ==="
cd /workspace
yarn --version && echo "✅ Yarn available" || echo "❌ Yarn not available"
yarn build --version && echo "✅ Build system ready" || echo "❌ Build system issues"
```

### Development Tools
- **yarn**: v1.22.19 - Package manager
- **node**: v22.16.0 - JavaScript runtime

## Environment Detection & Configuration

### Automatic Environment Detection
The setup process automatically detects the runtime environment:
- **Inside Docker/OpenHands**: Uses existing Docker Desktop cluster via KUBECONFIG
- **Native Development**: Can create new kind cluster if needed
- **CI/CD**: Uses provided Kubernetes configuration

### Kubernetes Configuration
> **Environment Check**: This configuration applies when running in containerized development environments
- **KUBECONFIG**: `/workspace/.cert/config` (auto-detected)
- **Cluster**: docker-desktop
- **Server**: https://kubernetes.docker.internal:6443
- **Status**: ✅ Accessible and running

**Environment Variables**:
```bash
export KUBECONFIG=/workspace/.cert/config
export CLUSTER_CONTEXT=docker-desktop
```

### Project Structure
```
/workspace/
├── .cert/config                    # Kubernetes configuration
├── debug/                          # Debug scripts
│   └── setup-starship.sh          # Environment verification script
├── dev-docs/agents/                # Development environment documentation
├── networks/cosmos/                # Cosmos network package
│   ├── starship/                   # Starship configuration
│   └── package.json               # Contains starship scripts
└── package.json                   # Root project configuration
```

## Setup Process Validation

### Phase 1: Environment Prerequisites
```bash
# Verify all tools are available
which kubectl helm kind node yarn || echo "Missing tools detected"
kubectl version --client --short 2>/dev/null || echo "kubectl not configured"
helm version --short 2>/dev/null || echo "helm not available"
kind version 2>/dev/null || echo "kind not available"
node --version
yarn --version
```

### Phase 2: Project Dependencies & Build
```bash
# From workspace root
cd /workspace

# Install dependencies (if not already done)
yarn install          # Install all dependencies
yarn build           # Build all 18 packages

# Verify build success
ls -la networks/*/dist/ 2>/dev/null || echo "Some packages may not have built"
```

### Phase 3: Starship Configuration Validation
```bash
# Navigate to cosmos package
cd /workspace/networks/cosmos

# Verify starship configuration exists
ls -la starship/
# Expected: config.yaml, jest.starship.config.js

# Check available starship commands
yarn run | grep starship: || echo "Starship scripts not found"

# Quick connectivity test
kubectl get nodes 2>/dev/null || echo "Kubernetes cluster not accessible"
```

## Available Starship Commands

### From `/workspace/networks/cosmos/`:
| Command | Purpose | Timeout |
|---------|---------|---------|
| `yarn starship:all` | Start complete starship environment | 20-30 min |
| `yarn starship:test` | Run integration test suite | 15-20 min |
| `yarn starship:debug` | Run tests in debug mode | Variable |
| `yarn starship:watch` | Run tests in watch mode | Continuous |
| `yarn starship:clean` | Stop and clean environment | 2-5 min |

### From `/workspace/networks/injective/`:
| Command | Purpose |
|---------|---------|
| `yarn starship:test` | Run Injective integration tests |
| `yarn injective:test` | Run tests against Injective testnet |

### From `/workspace/networks/ethereum/`:
| Command | Purpose |
|---------|---------|
| `yarn starship:test` | Run Ethereum integration tests |
| `yarn test:devnet` | Test against local devnet |
| `yarn run-ganache` | Start local ganache instance |

## Quick Start Guide

### Standard Startup (OpenHands/Docker)
```bash
cd /workspace/networks/cosmos
export KUBECONFIG=/workspace/.cert/config
yarn starship:all
```

### Native Development Startup
```bash
# Create cluster if needed
kind create cluster --name starship-test

# Then follow standard startup
cd /workspace/networks/cosmos
yarn starship:all
```

## Environment-Specific Notes

### Containerized Development Environment ✅
- **Docker**: Running in containerized environment, Docker Desktop cluster available
- **KUBECONFIG**: Auto-detected at `/workspace/.cert/config`
- **Timeout**: Extended timeouts recommended for kubectl/helm operations
- **Performance**: Initial starship startup: 20-30 minutes

### Native Development Environment
- **Cluster Options**: Docker Desktop, kind, or remote cluster
- **Configuration**: May need manual KUBECONFIG setup
- **Dependencies**: Ensure kubectl, helm, kind are in PATH

## Troubleshooting

### Environment Verification
Run the comprehensive debug script:
```bash
/workspace/debug/setup-starship.sh
```

### Common Issues & Solutions
| Issue | Symptom | Solution |
|-------|---------|----------|
| **Kubernetes not accessible** | `kubectl cluster-info` fails | Verify KUBECONFIG: `export KUBECONFIG=/workspace/.cert/config` |
| **Build failures** | `yarn build` errors | Run `yarn build` again - often succeeds on retry |
| **Starship startup slow** | Hanging on initialization | Normal behavior, wait for full initialization |
| **Port conflicts** | Starship services fail to start | Run `yarn starship:clean` before restart |
| **Docker issues** | Container creation fails | Check Docker Desktop is running and accessible |

### Diagnostic Commands
```bash
# Check cluster health
kubectl get nodes
kubectl get pods -A

# Check starship status
cd /workspace/networks/cosmos
kubectl get pods -n starship 2>/dev/null || echo "Starship namespace not found"

# Verify build
yarn build 2>&1 | grep -E "(error|Error)" || echo "Build successful"
```

## Environment Status Verification

### Automated Status Check
```bash
#!/bin/bash
# Comprehensive environment status

echo "=== Environment Status ==="
echo "Node: $(node --version)"
echo "Yarn: $(yarn --version)"
echo "Kubectl: $(kubectl version --client --short 2>/dev/null || echo '❌')"
echo "Helm: $(helm version --short 2>/dev/null || echo '❌')"
echo "Kind: $(kind version 2>/dev/null || echo '❌')"
echo ""
echo "=== Kubernetes Status ==="
kubectl cluster-info >/dev/null 2>&1 && echo "✅ Kubernetes accessible" || echo "❌ Kubernetes not accessible"
echo ""
echo "=== Project Status ==="
cd /workspace
yarn --version >/dev/null 2>&1 && echo "✅ Yarn available" || echo "❌ Yarn not available"
yarn build --version >/dev/null 2>&1 && echo "✅ Build system ready" || echo "❌ Build system issues"
```

### Final Environment Check ✅
- **All prerequisites**: Installed and configured
- **Project build**: Successfully built 18 packages
- **Kubernetes cluster**: Accessible and ready
- **Starship**: Ready for development and testing