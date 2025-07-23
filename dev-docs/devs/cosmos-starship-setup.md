# Cosmos Development Setup Guide

## Environment Setup
- Mainly work under `networks/cosmos`
- Use **yarn always** - no corepack
- Create debug scripts in `/debug` folder, delete after use
- Generate docs in `/dev-docs/agents`
- Build under the workspace root: `yarn && yarn build` (retry if errors)

## Time Expectations
- Dependencies + rebuild: ~20 mins
- Test execution: ~20 mins

## Docker Environment
- PLEASE KNOW that we're RUNNING INSIDE A DOCKER, so we DON'T need to install docker!
- Create a fake command docker in your env wide(no need to be complex, just to echo sth maybe)

## Kubernetes Setup
- Setup k8s API server from `.cert/config`
- Install kubectl/helm without `is_input=true` (prevents crashes)
- Use direct timeout on commands instead

## Starship Deployment
- Start with: `yarn starship:all` under networks/cosmos
- **Required port-forwards for testing:**
  - Registry: `kubectl port-forward svc/registry 8081:8080`
  - RPC: `kubectl port-forward <pod> 26657:26657`
  - REST: `kubectl port-forward <pod> 1317:1317`

## Dependencies
Install all project prerequisites as documented in the project.