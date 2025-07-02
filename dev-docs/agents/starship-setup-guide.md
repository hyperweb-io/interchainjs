# Starship Setup Guide for OpenHands

This guide documents the complete setup process for running Starship in the OpenHands environment.

## Prerequisites Installed

### Kubernetes Tools
- **kubectl**: v1.33.2 - Kubernetes command-line tool
- **helm**: v3.18.3 - Kubernetes package manager  
- **kind**: v0.22.0 - Kubernetes in Docker (for local clusters)

### Development Tools
- **yarn**: v1.22.19 - Package manager
- **node**: v22.16.0 - JavaScript runtime

## Environment Configuration

### Kubernetes Configuration
- **KUBECONFIG**: `/workspace/.cert/config`
- **Cluster**: docker-desktop
- **Server**: https://kubernetes.docker.internal:6443
- **Status**: ✅ Accessible and running

### Project Structure
```
/workspace/
├── .cert/config                    # Kubernetes configuration
├── debug/                          # Debug scripts
│   └── setup-starship.sh          # Environment verification script
├── dev-docs/openhands/             # OpenHands documentation
├── networks/cosmos/                # Cosmos network package
│   ├── starship/                   # Starship configuration
│   └── package.json               # Contains starship scripts
└── package.json                   # Root project configuration
```

## Setup Process Completed

1. ✅ **Installed Kubernetes Tools**
   - Downloaded and installed kubectl, helm, and kind
   - Verified installations and versions

2. ✅ **Configured Kubernetes Access**
   - Set KUBECONFIG to use existing Docker Desktop cluster
   - Verified cluster connectivity

3. ✅ **Installed Project Dependencies**
   - Ran `yarn install` in root directory
   - All dependencies installed successfully

4. ✅ **Built Project**
   - Ran `yarn build` to compile all packages
   - Built 18 packages successfully

5. ✅ **Created Debug Infrastructure**
   - Created `/workspace/debug/` folder for debug scripts
   - Created `/workspace/dev-docs/openhands/` for documentation

## Available Starship Commands

From `/workspace/networks/cosmos/`:

- `yarn starship:all` - Start the complete starship environment
- `yarn starship:test` - Run the test suite
- `yarn starship:debug` - Run tests in debug mode
- `yarn starship:watch` - Run tests in watch mode
- `yarn starship:clean` - Stop and clean up the starship environment

## Next Steps

To start Starship:

```bash
cd /workspace/networks/cosmos
export KUBECONFIG=/workspace/.cert/config
yarn starship:all
```

## Important Notes

- **Docker**: We're running inside Docker, so Docker itself is already available
- **Timeout**: Never use `is_input=true` with timeout for kubectl/helm installation
- **Build Time**: Initial starship startup can take 20+ minutes
- **Cleanup**: Always run `yarn starship:clean` before starting a new environment

## Troubleshooting

### Debug Script
Run the debug script to verify environment:
```bash
/workspace/debug/setup-starship.sh
```

### Common Issues
1. **Kubernetes not accessible**: Verify KUBECONFIG is set correctly
2. **Build failures**: Run `yarn build` again, it should succeed on retry
3. **Starship startup slow**: This is normal, wait for full initialization

## Environment Status

✅ All prerequisites installed and configured
✅ Project built successfully  
✅ Kubernetes cluster accessible
✅ Ready to start Starship

The environment is now fully prepared for Starship development and testing.