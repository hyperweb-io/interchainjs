#/usr/bin/env bash

# make sure `docker-desktop` is listed in `kubectl config get-contexts`
kubectl config use-context docker-desktop

helm install -f .starship.yaml tutorial starship/devnet --version 0.1.48 --wait
# watch kubectl get pods

./scripts/port-forward.sh --config=.starship.yaml > .port