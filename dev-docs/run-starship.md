# Running Starship Tests

Starship enables users to start a virtual environment to simulate queries and transactions without cost. This guide walks you through the process of running starship tests.

## Overview

Starship provides a local Kubernetes-based testing environment that simulates blockchain networks, allowing developers to test their applications without incurring real transaction costs.

## Prerequisites

Before running starship tests, ensure you have the following prerequisites installed on your VM:

1. **Docker** - Required to run Kubernetes containers
2. **Kubernetes (KIND)** - Kubernetes in Docker for local development
3. **kubectl** - Kubernetes command-line tool
4. **Helm** - Kubernetes package manager
5. **Node.js and Yarn** - For running the test scripts

For detailed installation instructions, refer to the [starship prerequisites documentation](https://docs.hyperweb.io/starship#prerequisites).

### Starship Dependencies

This project uses the latest starship dependencies:
- `@starship-ci/cli`: ^4.0.0-alpha.0
- `@starship-ci/client`: ^4.0.0-alpha.0  
- `starshipjs`: ^4.0.0-alpha.0

These are automatically installed when you run `yarn install` in the project root.

## Setup Steps

### 1. Start Docker

Ensure Docker is running on your system:

```bash
# Start Docker daemon (if not already running)
sudo dockerd > /tmp/docker.log 2>&1 &

# Verify Docker is working
sudo docker run hello-world
```

### 2. Navigate to the Cosmos Network Directory

```bash
cd networks/cosmos
```

### 3. Install Dependencies

Install all required dependencies:

```bash
yarn
```

### 4. Clean Previous Starship Environment

**Always** clean any previous starship environment before starting a new one:

```bash
yarn starship:clean
```

**Important:** This step should **always** be run before `yarn starship:all` to ensure a clean state and prevent conflicts from previous runs.

### 5. Start the Starship Virtual Environment

Run the starship environment (this process can take a very long time to initialize):

```bash
yarn starship:all
```

**Important Note:** The starship environment startup can take **20+ minutes** to fully initialize. This is normal behavior as it needs to:
- Pull Docker images for blockchain nodes
- Start Kubernetes pods
- Initialize blockchain networks
- Wait for all services to become ready

Be patient and wait for the environment to fully start before proceeding. You'll see logs indicating when the services are ready.

### 6. Run the Demo TypeScript Script

Once the starship environment is running, execute the test suite:

```bash
yarn starship:test
```

## Expected Results

If all tests pass successfully, you should see output indicating that the starship environment is working correctly. This confirms that:

- The virtual blockchain environment is properly configured
- Network connectivity is established
- Test transactions can be executed without errors

## Available Scripts

The following starship-related scripts are available in the cosmos network package:

- `yarn starship:all` - Start the complete starship environment
- `yarn starship:test` - Run the test suite
- `yarn starship:debug` - Run tests in debug mode with detailed output
- `yarn starship:watch` - Run tests in watch mode for development
- `yarn starship:clean` - Stop and clean up the starship environment

## Troubleshooting

### Common Issues

1. **Docker not running**: Ensure Docker daemon is started before running starship
   ```bash
   # Check if Docker is running
   sudo docker run hello-world
   
   # If not working, try starting Docker service
   sudo service docker start
   ```

2. **Docker-in-Docker issues**: In container environments, you may encounter permission issues
   - Error: "operation not permitted" with overlay filesystem
   - Error: "iptables failed: Permission denied"
   - **Solution**: Run on a native Linux system or VM with proper Docker privileges

3. **Port conflicts**: Make sure required ports are not in use by other services
   ```bash
   # Check for port conflicts
   netstat -tulpn | grep :8080
   ```

4. **Insufficient resources**: Starship requires adequate CPU and memory resources
   - Minimum: 4GB RAM, 2 CPU cores
   - Recommended: 8GB RAM, 4 CPU cores

5. **Network connectivity**: Ensure your system can pull Docker images from registries
   ```bash
   # Test Docker registry connectivity
   sudo docker pull hello-world
   ```

6. **Kubernetes cluster issues**: KIND cluster creation may fail
   ```bash
   # Check if KIND cluster exists
   kind get clusters
   
   # Create a new cluster if needed
   kind create cluster
   ```

### Container Environment Limitations

If you're running in a container environment (like Docker containers, some CI/CD systems), you may encounter limitations:

- **Docker-in-Docker**: Requires privileged mode and proper setup
- **Kubernetes**: May need special configuration for nested containerization
- **Alternative**: Use a native Linux system, VM, or cloud instance for full functionality

### Cleanup

To stop and clean up the starship environment:

```bash
yarn starship:clean
```

To completely remove KIND cluster:

```bash
kind delete cluster
```

## Next Steps

Once you have successfully run the starship tests, you can:

- Modify test cases to suit your specific use cases
- Integrate starship testing into your development workflow
- Use the virtual environment for continuous integration testing

For more advanced configuration options, refer to the starship configuration files in the `./starship/configs/` directory.